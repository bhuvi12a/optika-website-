"use client";

import React from "react";

export default function MedicalBackgroundArt() {
  return (
    <div className="medical-bg-illustrations-layer" aria-hidden="true">
      {/* 1. Large Pale Pastel Geometry/Organic Arc from the original brochure */}
      <div className="medical-geo-arc arc-left" />
      <div className="medical-geo-arc arc-right" />
      <div className="medical-geo-circle circle-center" />

      {/* 2. Top-Left: Minimalist Doctor Profile with Stethoscope & Lab Coat Vector */}
      <svg
        className="medical-vector-illustration doc-vector-tl"
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle cx="100" cy="55" r="26" stroke="#28ae70" strokeWidth="2.2" strokeOpacity="0.32" />
        {/* Face Profile lines */}
        <path
          d="M100 45 C108 45, 114 50, 114 58 C114 66, 107 72, 100 72"
          stroke="#28ae70"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeOpacity="0.25"
        />
        {/* Medical Mask / Glasses subtle outline */}
        <path d="M88 52 H112" stroke="#28ae70" strokeWidth="1.5" strokeOpacity="0.25" />
        {/* Collar & White Coat */}
        <path
          d="M62 140 C62 95, 80 88, 100 88 C120 88, 138 95, 138 140 L152 230 H48 Z"
          stroke="#28ae70"
          strokeWidth="2.2"
          strokeOpacity="0.28"
          fill="#28ae70"
          fillOpacity="0.02"
        />
        {/* V-neck lapels */}
        <path d="M85 88 L100 135 L115 88" stroke="#28ae70" strokeWidth="2" strokeOpacity="0.32" />
        <path d="M100 135 V230" stroke="#28ae70" strokeWidth="1.8" strokeOpacity="0.2" />
        {/* Stethoscope wrapping around neck */}
        <path
          d="M82 100 C75 125, 76 158, 86 168 C92 174, 98 172, 100 162"
          stroke="#168a60"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.35"
        />
        <circle cx="100" cy="164" r="6" stroke="#168a60" strokeWidth="2.2" strokeOpacity="0.35" />
      </svg>

      {/* 3. Top-Right: Female Physician / Healthcare Worker with Clipboard Vector */}
      <svg
        className="medical-vector-illustration doc-vector-tr"
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hair and Head */}
        <circle cx="100" cy="52" r="24" stroke="#168a60" strokeWidth="2.2" strokeOpacity="0.3" />
        <path
          d="M78 54 C78 35, 92 30, 100 30 C108 30, 122 35, 122 54 C122 65, 118 76, 118 84"
          stroke="#168a60"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.25"
        />
        {/* Body and Scrubs */}
        <path
          d="M66 130 C66 92, 82 84, 100 84 C118 84, 134 92, 134 130 L146 230 H54 Z"
          stroke="#168a60"
          strokeWidth="2.2"
          strokeOpacity="0.26"
          fill="#168a60"
          fillOpacity="0.02"
        />
        {/* Medical Cross on Badge */}
        <path d="M115 106 H125 M120 101 V111" stroke="#28ae70" strokeWidth="2" strokeOpacity="0.4" />
        {/* Holding Health Checkup Clipboard */}
        <rect
          x="68"
          y="125"
          width="48"
          height="64"
          rx="5"
          stroke="#168a60"
          strokeWidth="2"
          strokeOpacity="0.35"
          fill="#ffffff"
          fillOpacity="0.4"
        />
        <line x1="75" y1="140" x2="108" y2="140" stroke="#168a60" strokeWidth="1.5" strokeOpacity="0.25" />
        <line x1="75" y1="150" x2="105" y2="150" stroke="#168a60" strokeWidth="1.5" strokeOpacity="0.25" />
        <line x1="75" y1="160" x2="95" y2="160" stroke="#168a60" strokeWidth="1.5" strokeOpacity="0.25" />
      </svg>

      {/* 4. Left Mid: Precision Eye Optics Refractometer Vector */}
      <svg
        className="medical-vector-illustration optometry-vector-l"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Minimalist Phoropter / Eye Testing Glasses */}
        <circle cx="50" cy="80" r="30" stroke="#28ae70" strokeWidth="2.4" strokeOpacity="0.3" />
        <circle cx="110" cy="80" r="30" stroke="#28ae70" strokeWidth="2.4" strokeOpacity="0.3" />
        <line x1="80" y1="80" x2="80" y2="70" stroke="#28ae70" strokeWidth="2.4" strokeOpacity="0.3" />
        <path d="M72 70 H88" stroke="#28ae70" strokeWidth="2.4" strokeOpacity="0.3" />
        {/* Degree Markings */}
        <circle cx="50" cy="80" r="14" stroke="#28ae70" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.25" />
        <circle cx="110" cy="80" r="14" stroke="#28ae70" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.25" />
      </svg>

      {/* 5. Right Mid: Laboratory Microscope / Diagnostic Biomarker Vector */}
      <svg
        className="medical-vector-illustration diag-vector-r"
        viewBox="0 0 160 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Microscope Base */}
        <rect x="40" y="155" width="80" height="10" rx="3" stroke="#168a60" strokeWidth="2" strokeOpacity="0.28" />
        {/* Arm */}
        <path
          d="M80 155 V130 C80 100, 110 90, 110 60 C110 40, 95 30, 80 30"
          stroke="#168a60"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.28"
        />
        {/* Eyepiece / Objective */}
        <line x1="60" y1="20" x2="75" y2="40" stroke="#168a60" strokeWidth="3" strokeOpacity="0.32" />
        <rect x="68" y="70" width="18" height="26" rx="3" stroke="#168a60" strokeWidth="2" strokeOpacity="0.3" />
        {/* Specimen Slide Stage */}
        <line x1="50" y1="102" x2="95" y2="102" stroke="#168a60" strokeWidth="2.5" strokeOpacity="0.35" />
      </svg>

      {/* 6. Subtle Floating Medical Cross & Pulse Wave Glyphs */}
      <div className="medical-floating-cross cross-1">
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="#28ae70" strokeWidth="2.2" strokeOpacity="0.3" fill="none">
          <path d="M12 5V19M5 12H19" strokeLinecap="round" />
        </svg>
      </div>

      <div className="medical-floating-cross cross-2">
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#168a60" strokeWidth="2.2" strokeOpacity="0.26" fill="none">
          <path d="M12 5V19M5 12H19" strokeLinecap="round" />
        </svg>
      </div>

      <div className="medical-floating-cross cross-3">
        <svg viewBox="0 0 24 24" width="26" height="26" stroke="#28ae70" strokeWidth="2.2" strokeOpacity="0.25" fill="none">
          <path d="M12 5V19M5 12H19" strokeLinecap="round" />
        </svg>
      </div>

      {/* Delicate Heartbeat Rhythm Wave Line in upper ambient background */}
      <svg className="medical-ambient-rhythm" viewBox="0 0 600 80" fill="none">
        <path
          d="M0 40 H180 L195 25 L210 55 L225 15 L240 65 L255 35 L265 42 L275 40 H600"
          stroke="#28ae70"
          strokeWidth="1.8"
          strokeOpacity="0.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
