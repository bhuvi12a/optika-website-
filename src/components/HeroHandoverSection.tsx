"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function HeroHandoverSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progressPct, setProgressPct] = useState(0);

  useEffect(() => {
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
      const h = (canvas.height = (canvas.parentElement?.clientHeight || rect.height || 480) * dpr);

      ctx.clearRect(0, 0, w, h);

      // Edge-to-edge frameless cover
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

      ctx.drawImage(baseImg, offX, offY, drawW, drawH);

      // Subtle dynamic natural lighting glow during scroll transition
      const docHandX = offX + drawW * 0.43;
      const empHandX = offX + drawW * 0.54;
      const handY = offY + drawH * 0.62;

      const currentX = docHandX + (empHandX - docHandX) * progress;
      const currentY = handY + Math.sin(progress * Math.PI) * (drawH * 0.015);

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
  }, [progressPct]);

  return (
    <div ref={containerRef} className="handover-pinned-wrapper frameless">
      <div className="handover-viewport-card frameless">
        <canvas ref={canvasRef} className="handover-canvas" />
      </div>
    </div>
  );
}
