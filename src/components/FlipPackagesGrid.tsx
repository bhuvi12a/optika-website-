"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Zap,
  PhoneCall,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { packages, contact } from "@/data/site";

export default function FlipPackagesGrid() {
  const [activeTier, setActiveTier] = useState<"paid" | "unpaid">("paid");
  const items = activeTier === "paid" ? packages.paidBrochure : packages.unpaidBrochure;

  return (
    <div className="packages-bento-wrapper">
      {/* Rate Sheet Toggle */}
      <div className="package-tier-toggle-bar">
        <div className="tier-pill-switcher">
          <button
            type="button"
            className={`tier-btn ${activeTier === "paid" ? "active" : ""}`}
            onClick={() => setActiveTier("paid")}
          >
            <span>Standard Corporate Rates</span>
          </button>
          <button
            type="button"
            className={`tier-btn ${activeTier === "unpaid" ? "active" : ""}`}
            onClick={() => setActiveTier("unpaid")}
          >
            <span>Partner Camp Rates</span>
          </button>
        </div>
        <span className="tier-hint">
          Hover or tap on any package to flip and connect directly with our medical expert
        </span>
      </div>

      {/* Grid of 3D Flip Cards */}
      <div className="flip-cards-grid">
        {items.map((pkg, idx) => {
          // Alternating signature colors matching the homepage feature cards:
          // Green: #28ae70 -> #168a60 | Blue: #1b759c -> #0f4d68
          const isGreen = idx % 2 === 0;

          return (
            <div key={pkg.name + activeTier} className="flip-card-perspective-container">
              <div className={`flip-card-inner ${isGreen ? "theme-green-flip" : "theme-blue-flip"}`}>
                
                {/* ================= FRONT SIDE ================= */}
                <div className="flip-card-face flip-card-front">
                  {/* Top Badge & Discount */}
                  <div className="flip-front-header">
                    <div className="package-tag-badge">
                      <ShieldCheck size={16} />
                      <span>{pkg.name} Tier</span>
                    </div>
                    <span className="param-pill">{pkg.parameters} Parameters</span>
                  </div>

                  {/* Pricing Info */}
                  <div className="flip-price-block">
                    <div className="price-row">
                      <span className="price-symbol">₹</span>
                      <span className="price-amount">{pkg.price.toLocaleString("en-IN")}</span>
                      <span className="price-per">/ person</span>
                    </div>
                    <div className="mrp-savings-row">
                      <del>MRP ₹{pkg.mrp.toLocaleString("en-IN")}</del>
                      <span className="savings-badge">
                        Save {Math.round(((pkg.mrp - pkg.price) / pkg.mrp) * 100)}%
                      </span>
                    </div>
                  </div>

                  {/* Included Diagnostic Tests */}
                  <div className="flip-tests-body">
                    <div className="tests-label">KEY INCLUSIONS</div>
                    <ul className="tests-checklist">
                      {pkg.tests.slice(0, 5).map((test) => (
                        <li key={test}>
                          <CheckCircle2 size={13} className="check-bullet" />
                          <span>{test}</span>
                        </li>
                      ))}
                      {pkg.tests.length > 5 && (
                        <li className="tests-more">
                          + {pkg.tests.length - 5} more diagnostic parameters
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Flip Prompt Footer */}
                  <div className="flip-footer-hint">
                    <Sparkles size={14} className="sparkle-icon" />
                    <span>Hover to connect with expert</span>
                    <ArrowRight size={13} />
                  </div>
                </div>

                {/* ================= BACK SIDE (CONNECT WITH EXPERT) ================= */}
                <div className="flip-card-face flip-card-back">
                  <div className="expert-avatar-wrap">
                    <div className="expert-avatar-glow" />
                    <div className="expert-avatar-box">
                      <UserCheck size={28} />
                    </div>
                  </div>

                  <div className="expert-copy-head">
                    <h4>Connect with Our Expert</h4>
                    <p>
                      Get customized quotations, employee screening slots, or advice for the <strong>{pkg.name} Package</strong>.
                    </p>
                  </div>

                  <div className="expert-highlights">
                    <div className="expert-hl-item">
                      <CalendarCheck size={15} />
                      <span>Zero employee downtime</span>
                    </div>
                    <div className="expert-hl-item">
                      <Zap size={15} />
                      <span>Certified 24hr digital reports</span>
                    </div>
                  </div>

                  {/* Direct Contact Buttons */}
                  <div className="expert-cta-buttons">
                    <a
                      href={`https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(`Hello Optika Healthcare, I would like to book or ask questions about the ${pkg.name} Health Package.`)}`}
                      className="btn-flip-chat"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a href={`tel:${contact.phoneRaw}`} className="btn-flip-call">
                      <PhoneCall size={15} />
                      <span>Call {contact.phone}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
