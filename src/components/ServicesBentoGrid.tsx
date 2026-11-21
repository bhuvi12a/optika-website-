"use client";

import { useState } from "react";
import {
  HeartPulse,
  Eye,
  FlaskConical,
  Glasses,
  Ear,
  Activity,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { services, contact } from "@/data/site";

const iconMap = [
  HeartPulse,
  Eye,
  FlaskConical,
  Glasses,
  Ear,
  Activity,
];

const categories = [
  { id: "all", label: "All Services" },
  { id: "health-camps", label: "Health Camps" },
  { id: "eye-care", label: "Eye Care" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "eyewear", label: "Eyewear" },
];

export default function ServicesBentoGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="services-bento-container">
      {/* Category Pills matching the uploaded image */}
      <div className="service-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`filter-pill-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Alternating Green & White Corporate Bento Grid */}
      <div className="service-bento-grid">
        {filtered.map((service, index) => {
          // Alternating pattern: even index = crisp white, odd index = corporate emerald gradient
          const isGreenCard = index % 2 === 1;
          const Icon = iconMap[index % iconMap.length];

          return (
            <article
              key={service.number + service.title}
              className={`bento-service-card ${isGreenCard ? "card-theme-green" : "card-theme-white"}`}
            >
              {/* Top Row: Squircle Gradient App-style Icon & Badge */}
              <div className="bento-card-header">
                <div className={`bento-icon-squircle icon-${service.iconColor || "teal"}`}>
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <span className="bento-num-tag">{service.number}</span>
              </div>

              {/* Title & Description */}
              <div className="bento-card-body">
                <h3 className="bento-title">{service.title}</h3>
                <p className="bento-desc">{service.description}</p>

                {/* Sub-features list */}
                <ul className="bento-feature-list">
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions: View Features & Get Quote Button */}
              <div className="bento-card-footer">
                <a href="#contact" className="bento-link-action">
                  <span>View Details</span>
                  <ChevronRight size={15} />
                </a>

                <a
                  href={`https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(`Hello Optika Healthcare, I would like to get a quote for ${service.title}.`)}`}
                  className="bento-btn-quote"
                >
                  Get Quote
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
