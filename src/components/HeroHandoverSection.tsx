"use client";

import { useEffect, useRef, useState } from "react";
import HeartRateMonitor from "./HeartRateMonitor";
import { Activity, FileText, CheckCircle2 } from "lucide-react";

export default function HeroHandoverSection() {
  const [activeTab, setActiveTab] = useState<"handover" | "vitals">("handover");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progressPct, setProgressPct] = useState(0);

  useEffect(() => {
    if (activeTab !== "handover") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const baseImg = new Image();
    baseImg.src = "/handover-base.jpg";

    const drawFrame = (progress: number) => {
      if (!ctx || !baseImg.complete) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = (canvas.width = (canvas.parentElement?.clientWidth || rect.width || 800) * dpr);
      const h = (canvas.height = (canvas.parentElement?.clientHeight || rect.height || 450) * dpr);

      ctx.clearRect(0, 0, w, h);

      // Perfect 'contain' or 'cover' fit without displacement
      const imgAspect = baseImg.width / baseImg.height;
      const canvasAspect = w / h;
      let drawW = w;
      let drawH = h;
      let offX = 0;
      let offY = 0;

      if (canvasAspect > imgAspect) {
        drawW = w;
        drawH = w / imgAspect;
        offY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgAspect;
        offX = (w - drawW) / 2;
      }

      // Draw the complete uncropped base camp photo
      ctx.drawImage(baseImg, offX, offY, drawW, drawH);

      // Subtle natural paper handover highlight & soft depth gradient that shifts with scroll
      const docHandX = offX + drawW * 0.43;
      const empHandX = offX + drawW * 0.54;
      const handY = offY + drawH * 0.62;

      const currentX = docHandX + (empHandX - docHandX) * progress;
      const currentY = handY + Math.sin(progress * Math.PI) * (drawH * 0.015);

      // Ambient light catch on the handover area
      ctx.save();
      const glowGrad = ctx.createRadialGradient(
        currentX,
        currentY,
        5 * dpr,
        currentX,
        currentY,
        70 * dpr
      );
      glowGrad.addColorStop(0, "rgba(255, 255, 255, 0.18)");
      glowGrad.addColorStop(0.5, "rgba(40, 174, 112, 0.08)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(currentX, currentY, 70 * dpr, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    baseImg.onload = () => {
      drawFrame(0);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Calculate progress naturally as the hero tab travels through the viewport
      // Starts as it enters (rect.top <= windowH) and reaches 100% when centered (rect.top <= windowH * 0.25)
      const totalDist = windowH * 0.75;
      const currentPos = windowH - rect.top;
      const rawProgress = Math.min(Math.max(currentPos / totalDist, 0), 1);

      setProgressPct(Math.round(rawProgress * 100));
      drawFrame(rawProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => drawFrame(progressPct / 100));

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab, progressPct]);

  return (
    <div ref={containerRef} className="handover-pinned-wrapper">
      {/* Switcher Navigation Pill at top of the Card */}
      <div className="handover-tab-nav">
        <button
          type="button"
          onClick={() => setActiveTab("handover")}
          className={`handover-tab-btn ${activeTab === "handover" ? "active" : ""}`}
        >
          <FileText size={16} />
          <span>Report Handover</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("vitals")}
          className={`handover-tab-btn ${activeTab === "vitals" ? "active" : ""}`}
        >
          <Activity size={16} />
          <span>Live ECG Monitor</span>
        </button>
      </div>

      {activeTab === "handover" ? (
        <div className="handover-viewport-card">
          <canvas ref={canvasRef} className="handover-canvas" />

          {/* Phase Narrative Overlay */}
          <div className="handover-status-badge">
            <span className="handover-pulse-dot" />
            <div className="handover-status-text">
              {progressPct < 30 && <strong>Phase 1: Doctor verifying Medical Checkup Report</strong>}
              {progressPct >= 30 && progressPct < 75 && (
                <strong>Phase 2: Handing over certified report to employee</strong>
              )}
              {progressPct >= 75 && (
                <strong>
                  <CheckCircle2 size={14} className="inline mr-1 text-emerald-600" />
                  Handover Complete: Consultation Successful
                </strong>
              )}
              <small>Scroll down to advance handover · Scroll up to reverse</small>
            </div>
            <div className="handover-progress-pill">{progressPct}%</div>
          </div>

          {/* Bottom Clinical Subtitle Bar */}
          <div className="handover-bottom-bar">
            <span>Corporate Camp Session · Certified Optical &amp; Diagnostic Handover</span>
            <span className="handover-tag">SCROLL CONTROLLED</span>
          </div>
        </div>
      ) : (
        <div className="hero-telemetry-container">
          <HeartRateMonitor />
        </div>
      )}
    </div>
  );
}
