"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, CalendarCheck, ShieldCheck, ChevronRight } from "lucide-react";
import { contact } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="Optika Healthcare home">
            <Image
              src="/optika-logo.png"
              alt="Optika Healthcare Logo"
              width={180}
              height={48}
              className="h-10 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/packages">Health Packages</Link>
            <Link href="/corporate-camps">Corporate Camps</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Desktop Action Buttons & Mobile Hamburger Button */}
          <div className="flex items-center gap-3">
            <Link href="/corporate-camps" className="nav-call hidden md:inline-flex">
              Book Camp
            </Link>
            <a className="nav-call hidden sm:inline-flex" href={`tel:${contact.phoneRaw}`}>
              <Phone size={15} /> Call Us
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <Image
                src="/optika-logo.png"
                alt="Optika Healthcare Logo"
                width={150}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-1 text-slate-500 hover:text-slate-800"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-drawer-nav">
              <Link href="/" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
                <span>Home</span> <ChevronRight size={16} />
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
                <span>About</span> <ChevronRight size={16} />
              </Link>
              <Link href="/services" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
                <span>Services</span> <ChevronRight size={16} />
              </Link>
              <Link href="/packages" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
                <span>Health Packages</span> <ChevronRight size={16} />
              </Link>
              <Link href="/corporate-camps" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
                <span>Corporate Camps</span> <ChevronRight size={16} />
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
                <span>Contact</span> <ChevronRight size={16} />
              </Link>
            </nav>

            <div className="mobile-drawer-footer">
              <Link
                href="/corporate-camps"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full justify-center mb-2"
              >
                <CalendarCheck size={16} /> Plan a Corporate Camp
              </Link>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="btn btn-outline w-full justify-center"
              >
                <Phone size={16} /> {contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
