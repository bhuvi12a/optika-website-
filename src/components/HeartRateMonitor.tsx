"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Activity, Plus, Eye, HeartPulse } from "lucide-react";

export default function HeartRateMonitor() {
  const [bpm, setBpm] = useState(75);
  const [isBeating, setIsBeating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bpmRef = useRef(75);

  useEffect(() => {
    bpmRef.current = bpm;
  }, [bpm]);

  // Realistic natural fluctuation around 75 bpm (e.g. 73-77)
  useEffect(() => {
    const bpmInterval = setInterval(() => {
      setBpm((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const next = prev + delta;
        return Math.min(Math.max(next, 71), 79);
      });
    }, 2500);

    return () => clearInterval(bpmInterval);
  }, []);

  // Continuous Full-Width Canvas ECG Telemetry Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 960);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 480);

    const onResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth || 960;
        height = canvas.height = canvas.parentElement.clientHeight || 480;
      }
    };
    window.addEventListener("resize", onResize);

    let offset = 0;
    const baseline = height * 0.53; // exact horizontal level of the line
    const cycleWidth = 230; // pixels per cardiac cycle

    // Accurate clinical P-Q-R-S-T wave function matching the monitor photo
    const getWaveY = (progress: number, h: number, base: number) => {
      // progress in [0, 1)
      if (progress >= 0.12 && progress < 0.22) {
        // P wave (gentle bump)
        const p = (progress - 0.12) / 0.10;
        return base - Math.sin(p * Math.PI) * (h * 0.045);
      }
      if (progress >= 0.28 && progress < 0.315) {
        // Q wave (small dip)
        const q = (progress - 0.28) / 0.035;
        return base + Math.sin(q * Math.PI) * (h * 0.06);
      }
      if (progress >= 0.315 && progress < 0.37) {
        // R sharp vertical spike
        const r = (progress - 0.315) / 0.055;
        if (r < 0.45) {
          return base - (r / 0.45) * (h * 0.36);
        } else {
          return base - (h * 0.36) + ((r - 0.45) / 0.55) * (h * 0.50);
        }
      }
      if (progress >= 0.37 && progress < 0.42) {
        // S wave (dip below baseline)
        const s = (progress - 0.37) / 0.05;
        return base + Math.sin(s * Math.PI) * (h * 0.14);
      }
      if (progress >= 0.48 && progress < 0.66) {
        // T wave (smooth arch)
        const t = (progress - 0.48) / 0.18;
        return base - Math.sin(t * Math.PI) * (h * 0.075);
      }
      // Micro variations along baseline
      return base;
    };

    let beatTriggerLock = false;

    const render = () => {
      // Smooth continuous scrolling from right to left
      const currentBpm = bpmRef.current;
      const speed = (currentBpm / 75) * 2.4; // px per frame
      offset += speed;

      // Pulse trigger synced with central R peak passing through center
      const centerCycleProgress = ((width / 2 + offset) % cycleWidth) / cycleWidth;
      if (centerCycleProgress >= 0.315 && centerCycleProgress <= 0.37) {
        if (!beatTriggerLock) {
          setIsBeating(true);
          beatTriggerLock = true;
          setTimeout(() => {
            setIsBeating(false);
            beatTriggerLock = false;
          }, 220);
        }
      }

      ctx.clearRect(0, 0, width, height);

      // Layer 1: Ambient Green Glow
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 12;
      ctx.strokeStyle = "rgba(46, 213, 115, 0.25)";
      ctx.shadowColor = "#2ed573";
      ctx.shadowBlur = 26;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let x = 0; x <= width; x += 3) {
        const cycleProgress = ((x + offset) % cycleWidth) / cycleWidth;
        const y = getWaveY(cycleProgress, height, baseline);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Layer 2: Neon Cyan-Green Core Line
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 4.2;
      ctx.strokeStyle = "#55efc4";
      ctx.shadowColor = "#00b894";
      ctx.shadowBlur = 10;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let x = 0; x <= width; x += 3) {
        const cycleProgress = ((x + offset) % cycleWidth) / cycleWidth;
        const y = getWaveY(cycleProgress, height, baseline);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Layer 3: Crisp White Center Core (exact match to photo)
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = "#ffffff";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let x = 0; x <= width; x += 3) {
        const cycleProgress = ((x + offset) % cycleWidth) / cycleWidth;
        const y = getWaveY(cycleProgress, height, baseline);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="hp-monitor-screen">
      {/* Real Clinical Cyan-Green Grid Lines */}
      <div className="hp-grid-overlay" />

      {/* Top Left: OPTIKA HEALTHCARE BRAND LOGO */}
      <div className="hp-top-left">
        <Image
          src="/optika-logo.png"
          alt="Optika Healthcare Logo"
          width={190}
          height={50}
          className="h-10 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          priority
        />
      </div>

      {/* Top Right: Green Dot + LIVE VITALS MONITOR */}
      <div className="hp-top-right">
        <span className="hp-live-indicator" />
        <span className="hp-live-text">LIVE VITALS MONITOR</span>
      </div>

      {/* Continuous Full-Screen Glowing ECG Canvas */}
      <canvas ref={canvasRef} className="hp-ecg-canvas" />

      {/* Left White Rounded Card: Body Vitals */}
      <div className="hp-card hp-card-vitals">
        <div className="hp-card-icon-wrap">
          <HeartPulse size={28} className="hp-card-teal-icon" />
        </div>
        <div className="hp-card-divider" />
        <div className="hp-card-info">
          <strong className="hp-card-title">Body Vitals</strong>
          <span className="hp-card-sub">BP · SpO₂ · Pulse</span>
        </div>
      </div>

      {/* Center White Pill: 75 bpm + Central Floating Heart Bubble */}
      <div className="hp-center-cluster">
        <div className="hp-bpm-pill">
          <span className="hp-bpm-number">{bpm}</span>
          <span className="hp-bpm-unit">bpm</span>
        </div>
        <div className={`hp-heart-circle ${isBeating ? "heart-beat-active" : ""}`}>
          <svg
            className="hp-heart-svg-fill"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      {/* Right White Rounded Card: Eye Check */}
      <div className="hp-card hp-card-eye">
        <div className="hp-card-icon-wrap">
          <Eye size={28} className="hp-card-teal-icon" />
        </div>
        <div className="hp-card-divider" />
        <div className="hp-card-info">
          <strong className="hp-card-title">Eye Check</strong>
          <span className="hp-card-sub">Vision assessment</span>
        </div>
      </div>

      {/* Bottom Left: ECG Pulse Icon | LIVE CLINICAL TELEMETRY */}
      <div className="hp-bottom-left">
        <Activity size={22} className="hp-bottom-icon" />
        <div className="hp-bottom-sep" />
        <span className="hp-bottom-text">LIVE CLINICAL TELEMETRY</span>
      </div>

      {/* Bottom Right: Circle Plus Icon | REGULAR HEALTH SCREENING */}
      <div className="hp-bottom-right">
        <div className="hp-bottom-circle-plus">
          <Plus size={16} strokeWidth={3} />
        </div>
        <div className="hp-bottom-sep" />
        <span className="hp-bottom-text">REGULAR HEALTH SCREENING</span>
      </div>
    </div>
  );
}
