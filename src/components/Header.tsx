"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  CalendarCheck,
  ChevronDown,
  ArrowRight,
  Eye,
  HeartPulse,
  Microscope,
  Glasses,
  Building2,
  Sparkles,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";
import { contact } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
  },
  { name: "Health Packages", href: "/packages" },
  { name: "Contact", href: "/contact" },
];

const serviceDropdownItems = [
  {
    title: "Corporate Health Camps",
    desc: "Complete on-site health screening & diagnostics at your workplace",
    href: "/corporate-camps",
    icon: Building2,
    badge: "Popular",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "Comprehensive Eye Check-ups",
    desc: "Advanced auto-refraction, vision screening & pathology tests",
    href: "/services",
    icon: Eye,
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "Certified Diagnostic Lab",
    desc: "NABL standard blood tests with doorstep sample collection",
    href: "/services",
    icon: Microscope,
    color: "text-cyan-600 bg-cyan-50",
  },
  {
    title: "Prescription Eyewear Solutions",
    desc: "Anti-glare lenses, blue-cut computer glasses & branded frames",
    href: "/services",
    icon: Glasses,
    color: "text-indigo-600 bg-indigo-50",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-b border-emerald-100/60 py-2.5"
            : "bg-white/95 backdrop-blur-md border-b border-slate-200/60 py-3.5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo with Interactive Hover Glow */}
          <Link
            href="/"
            className="group flex items-center gap-2 relative transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Optika Healthcare home"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <Image
                src="/optika-logo.png"
                alt="Optika Healthcare Logo"
                width={175}
                height={46}
                className="relative h-9 sm:h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Dynamic Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/70 shadow-sm"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 rounded-full text-[13.5px] font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                        isActive || servicesOpen
                          ? "text-emerald-700 bg-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180 text-emerald-600" : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {/* Animated Mega Dropdown */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[460px] p-3.5 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-slate-100 ring-1 ring-slate-900/5 grid grid-cols-1 gap-1.5 z-50"
                        >
                          <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-slate-100 mb-1">
                            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                              Healthcare Solutions
                            </span>
                            <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                              <Sparkles size={12} /> Hosur & Workplace
                            </span>
                          </div>

                          {serviceDropdownItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150"
                            >
                              <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110 ${item.color}`}
                              >
                                <item.icon size={18} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-[13px] font-bold text-slate-800 group-hover/item:text-emerald-700 transition-colors">
                                    {item.title}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}

                          <div className="mt-1 pt-2 border-t border-slate-100 px-3 flex items-center justify-between text-[11.5px] text-slate-500">
                            <span>Need custom medical screening?</span>
                            <Link
                              href="/packages#corporate-camps"
                              onClick={() => setServicesOpen(false)}
                              className="font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                            >
                              Request Camp <ArrowRight size={13} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-emerald-700 bg-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-emerald-500/20 bg-emerald-500/5 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Interactive CTA Actions */}
          <div className="flex items-center gap-2.5">
            {/* Live WhatsApp / Phone Direct Button */}
            <a
              href={`tel:${contact.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[13px] font-semibold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/70 border border-slate-200/80 transition-all duration-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Phone size={14} className="text-emerald-600" />
              <span>Call Us</span>
            </a>

            {/* Glowing Magnetic "Book Camp" Button */}
            <Link
              href="/packages#corporate-camps"
              className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_22px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 overflow-hidden group"
            >
              {/* Light sweep effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <CalendarCheck size={15} className="group-hover:rotate-12 transition-transform duration-200" />
              <span>Book Camp</span>
            </Link>

            {/* Dynamic Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Slide-in Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-[84%] max-w-sm bg-white shadow-2xl flex flex-col z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
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
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Nav Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-bold transition-all ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700 shadow-sm"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                    </Link>
                  );
                })}

                {/* Mobile Quick Service Highlights */}
                <div className="pt-4 mt-3 border-t border-slate-100">
                  <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Healthcare Services
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/corporate-camps"
                      onClick={() => setMobileOpen(false)}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-left transition-colors"
                    >
                      <Building2 size={16} className="text-emerald-600 mb-1.5" />
                      <div className="text-[12px] font-bold text-slate-800">Corporate</div>
                      <div className="text-[10px] text-slate-500">On-site Camps</div>
                    </Link>
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-left transition-colors"
                    >
                      <Eye size={16} className="text-blue-600 mb-1.5" />
                      <div className="text-[12px] font-bold text-slate-800">Eye Exams</div>
                      <div className="text-[10px] text-slate-500">Vision Checks</div>
                    </Link>
                    <Link
                      href="/packages"
                      onClick={() => setMobileOpen(false)}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-cyan-50 text-left transition-colors"
                    >
                      <Microscope size={16} className="text-cyan-600 mb-1.5" />
                      <div className="text-[12px] font-bold text-slate-800">Blood Tests</div>
                      <div className="text-[10px] text-slate-500">Doorstep Lab</div>
                    </Link>
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50 text-left transition-colors"
                    >
                      <Glasses size={16} className="text-indigo-600 mb-1.5" />
                      <div className="text-[12px] font-bold text-slate-800">Eyewear</div>
                      <div className="text-[10px] text-slate-500">Modern Frames</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/70 space-y-2">
                <Link
                  href="/packages#corporate-camps"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-500/20"
                >
                  <CalendarCheck size={16} /> Plan a Corporate Camp
                </Link>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 shadow-sm"
                >
                  <Phone size={15} className="text-emerald-600" /> {contact.phone}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
