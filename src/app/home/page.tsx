import {
  ArrowRight,
  Eye,
  HeartPulse,
  Building2,
  CalendarCheck,
  ShieldCheck,
  Microscope,
  Glasses,
  Users,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeartRateMonitor from "@/components/HeartRateMonitor";
import LiquidText from "@/components/ui/liquid-text";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { contact } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ================= HERO WITH 3D CONTAINER SCROLL ================= */}
        <section className="hero-scroll-wrapper">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <ContainerScroll
            titleComponent={
              <div className="hero-scroll-title">
                <div className="eyebrow justify-center mb-3">
                  <span className="pulse-dot" /> OPTICAL &amp; DIAGNOSTICS
                </div>
                <div className="liquid-brand-center">
                  <LiquidText
                    text="OPTIKA"
                    color="#28ae70"
                    highlight="#86efac"
                    accentColor="#168a60"
                    fontSize={170}
                    fontWeight={800}
                    fontFamily="'Manrope', sans-serif"
                    viscosity={0.5}
                    className="hero-liquid-title"
                  />
                </div>
                <h1 className="hero-scroll-h1">
                  Better health starts with <em>regular care.</em>
                </h1>
                <p className="hero-scroll-p">
                  Corporate health camps, precision eye check-ups, and certified diagnostic services that make routine health monitoring seamless.
                </p>
                <div className="hero-actions justify-center">
                  <Link className="btn btn-primary" href="/corporate-camps">
                    Plan a Corporate Camp <ArrowRight size={17} />
                  </Link>
                  <Link className="btn btn-outline" href="/services">
                    Explore Services
                  </Link>
                </div>
              </div>
            }
          >
            <div className="hero-panel-scroll-inner">
              <div className="hero-panel-top">
                <span>OPTIKA HEALTHCARE</span>
                <span className="live-label">LIVE VITALS MONITOR</span>
              </div>
              <div className="health-graphic">
                <HeartRateMonitor />
                <div className="float-card card-a">
                  <HeartPulse size={18} />
                  <span>
                    <b>Body Vitals</b>
                    <small>BP · SpO₂ · Pulse</small>
                  </span>
                </div>
                <div className="float-card card-b">
                  <Eye size={18} />
                  <span>
                    <b>Eye Check</b>
                    <small>Vision assessment</small>
                  </span>
                </div>
              </div>
              <div className="hero-panel-bottom">
                <span>LIVE CLINICAL TELEMETRY</span>
                <span>REGULAR HEALTH SCREENING</span>
              </div>
            </div>
          </ContainerScroll>
        </section>

        {/* ================= METRIC STRIP ================= */}
        <section className="trust-strip">
          <div className="container trust-grid">
            <Link href="/services" className="trust-link-item">
              <strong>01</strong>
              <span>Health Check</span>
            </Link>
            <Link href="/services" className="trust-link-item">
              <strong>02</strong>
              <span>Eye Check</span>
            </Link>
            <Link href="/packages" className="trust-link-item">
              <strong>03</strong>
              <span>Diagnostics</span>
            </Link>
            <Link href="/services" className="trust-link-item">
              <strong>04</strong>
              <span>Eyewear</span>
            </Link>
          </div>
        </section>

        {/* ================= CLEAN PORTAL NAVIGATION HUBS ================= */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">
                CORPORATE &amp; CLINICAL PORTAL
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Everything you need, <em>organized by division.</em>
              </h2>
              <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
                Explore dedicated sections for enterprise medical camps, laboratory testing tiers, and direct consultation desks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: About */}
              <Link
                href="/about"
                className="group bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition">
                    About Optika
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Learn about our founder, mission, accredited medical partnerships, and clinical HQ in Hosur.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <span>Read Profile</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition" />
                </div>
              </Link>

              {/* Card 2: Services */}
              <Link
                href="/services"
                className="group bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all">
                    <Microscope size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition">
                    Services
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Explore our alternating bento cards for workplace check-ups, diagnostics, audiometry, and optics.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-sky-600">
                  <span>Explore Catalog</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition" />
                </div>
              </Link>

              {/* Card 3: Health Packages */}
              <Link
                href="/packages"
                className="group bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition">
                    Health Packages
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Interactive 3D flip cards for Bronze, Silver, Gold, Platinum, and Diamond corporate health tiers.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <span>View Package Tiers</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition" />
                </div>
              </Link>

              {/* Card 4: Corporate Camps */}
              <Link
                href="/corporate-camps"
                className="group bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <CalendarCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition">
                    Corporate Camps
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Host an on-site health camp with zero employee downtime. Submit your booking form directly.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <span>Schedule Camp</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= FAST ACTION BANNER ================= */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-extrabold tracking-widest uppercase text-emerald-200 block mb-2">
                HAVE QUESTIONS OR NEED A CUSTOM QUOTATION?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Connect with our medical coordinator.
              </h2>
              <p className="text-emerald-100 text-sm mt-3 leading-relaxed">
                Reach out for on-site camp availability, package customization, or direct optical prescriptions.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn btn-white font-extrabold text-slate-900 py-3.5 px-6 rounded-xl">
                Send an Enquiry
              </Link>
              <a
                href={`https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent("Hello Optika Healthcare, I would like to enquire about your services.")}`}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3.5 px-6 rounded-xl transition duration-200 flex items-center gap-2"
              >
                Chat on WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

