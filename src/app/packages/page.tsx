"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlipPackagesGrid from "@/components/FlipPackagesGrid";
import { contact } from "@/data/site";
import { CheckCircle2, Calendar, Users, Building, Send, ShieldCheck, Sparkles, Phone, ArrowRight } from "lucide-react";

export default function PackagesPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    contactPhone: "",
    contactEmail: "",
    location: "",
    estimatedEmployees: 100,
    preferredDate: "",
    packagesInterested: ["Silver", "Eye Check"],
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/camps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to submit booking");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <section className="py-20 bg-gradient-to-b from-emerald-50 via-teal-50 to-slate-50 border-b border-slate-200">
          <div className="container max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-extrabold tracking-wider text-emerald-800 bg-emerald-100 rounded-full mb-4">
              DIAGNOSTIC TEST CATALOG &amp; CORPORATE PACKAGES
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive <em className="text-emerald-600 not-italic">Health Screening Tiers.</em>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Select between Bronze, Silver, Gold, Platinum, and Diamond diagnostic profiles. Hover or tap any package to flip the card, or schedule an on-site corporate health camp below.
            </p>
          </div>
        </section>

        {/* ================= 3D FLIP PACKAGES GRID ================= */}
        <section className="py-16">
          <div className="container">
            <FlipPackagesGrid />
          </div>
        </section>

        {/* ================= INTEGRATED CORPORATE CAMPS SECTION ================= */}
        <section id="corporate-camps" className="py-20 bg-white border-t border-slate-200/80 scroll-mt-24">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-extrabold tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/70 rounded-full mb-4">
                <Building size={14} /> ON-SITE WORKPLACE SCREENING
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Host an Optika <em className="text-emerald-600 not-italic">Corporate Health Camp.</em>
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                We bring specialized clinical teams, auto-refractometers, vitals analyzers, and certified lab phlebotomists directly to your office, IT park, or factory premises across Hosur.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left: Camp Workflow Highlights */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase">
                  WHY ENTERPRISES CHOOSE OPTIKA
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Zero employee downtime. 100% digital compliance.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our dedicated camp directors manage queue scheduling, equipment setup, employee consent, and instant digital report dispatch with zero distraction to day-to-day operations.
                </p>

                <div className="space-y-4 pt-3">
                  {[
                    "Free pre-camp workplace ergonomics review",
                    "Dedicated optometrist station with trial lens sets",
                    "Fast-track vital stations (BP, SpO₂, BMI & Blood Sugar)",
                    "Encrypted individual employee health portal reports",
                    "Consolidated HR health-index audit report",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100/80 mt-8 shadow-sm">
                  <strong className="text-emerald-950 font-bold block mb-1">Direct Coordination Desk</strong>
                  <span className="text-xs text-emerald-700 block mb-3">Speak directly with our Corporate Camp Director:</span>
                  <div className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                    <Phone size={15} className="text-emerald-600" />
                    <span>{contact.founder}: {contact.founderPhone}</span>
                  </div>
                </div>
              </div>

              {/* Right: Booking Form */}
              <div className="lg:col-span-7 bg-slate-50/70 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-slate-900">Schedule a Corporate Health Camp</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out your organization details and our camp coordinator will reach out within 2 hours.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
                    <CheckCircle2 size={48} className="text-emerald-600 mx-auto mb-3" />
                    <h5 className="text-xl font-bold text-emerald-900">Booking Request Received!</h5>
                    <p className="text-sm text-emerald-700 mt-2">
                      Thank you for choosing Optika Healthcare. Our camp coordinator will review your schedule and connect with you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition"
                    >
                      Book Another Camp
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                      <div className="p-3 text-xs bg-red-50 text-red-700 border border-red-200 rounded-xl">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Company / Entity Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Acme Tech Solutions"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Contact Person *</label>
                        <input
                          type="text"
                          required
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          placeholder="Full Name"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.contactPhone}
                          onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.contactEmail}
                          onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                          placeholder="hr@company.com"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Campus / Factory Location *</label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Hosur Industrial Area, Sipcot..."
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Estimated Employees</label>
                        <input
                          type="number"
                          value={formData.estimatedEmployees}
                          onChange={(e) => setFormData({ ...formData, estimatedEmployees: parseInt(e.target.value) || 0 })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Preferred Date</label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Primary Packages of Interest</label>
                        <select
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                          onChange={(e) => setFormData({ ...formData, packagesInterested: [e.target.value] })}
                        >
                          <option value="Bronze & Silver">Bronze &amp; Silver Tiers</option>
                          <option value="Gold (₹1,250 with RBS)">Gold Tier (₹1,250 with RBS)</option>
                          <option value="Platinum (₹2,000)">Platinum Tier (₹2,000)</option>
                          <option value="Diamond (₹2,500)">Diamond Executive Tier (₹2,500)</option>
                          <option value="Eye Check & Optical Only">Eye Check &amp; Optical Camp Only</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Special Requirements / Notes</label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Mention any custom diagnostic requirements, shift schedules, or preferred timings..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      <Send size={16} />
                      <span>{status === "submitting" ? "Submitting Request..." : "Request Corporate Camp Proposal"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
