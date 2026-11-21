"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contact } from "@/data/site";
import { CheckCircle2, Calendar, Users, Building, Send, ShieldCheck } from "lucide-react";

export default function CorporateCampsPage() {
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
        <section className="py-20 bg-gradient-to-b from-emerald-50 via-teal-50 to-slate-50 border-b border-slate-200">
          <div className="container max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-extrabold tracking-wider text-emerald-800 bg-emerald-100 rounded-full mb-4">
              ON-SITE WORKPLACE SCREENING
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Host an Optika <em className="text-emerald-600 not-italic">Corporate Health Camp.</em>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We bring clinical teams, auto-refractometers, vitals analyzers, and certified lab phlebotomists directly to your office, IT park, or factory premises.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container grid lg:grid-cols-12 gap-12">
            {/* Left: Camp Workflow Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase">WHY ENTERPRISES CHOOSE OPTIKA</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Zero downtime. 100% digital compliance.</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our camp coordinators manage queue scheduling, equipment setup, participant consent, and report dispatch with zero distraction to day-to-day operations.
              </p>

              <div className="space-y-4 pt-4">
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

              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mt-8">
                <strong className="text-emerald-900 font-bold block mb-1">Direct Coordination Desk</strong>
                <span className="text-xs text-emerald-700 block mb-3">Speak with our Corporate Camp Director:</span>
                <div className="text-sm font-extrabold text-slate-900">{contact.founder}: {contact.founderPhone}</div>
              </div>
            </div>

            {/* Right: Dynamic Interactive Backend Booking Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Book an On-Site Camp</h3>
                <p className="text-xs text-slate-500 mt-1">This request is stored directly in our operational database for scheduling review.</p>
              </div>

              {status === "success" ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                  <h4 className="text-2xl font-bold text-slate-900">Camp Booking Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.contactPerson}</strong>. Your request for <strong>{formData.companyName}</strong> has been logged. Our camp coordinator will contact you at <strong>{formData.contactPhone}</strong> within 4 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
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
                    }}
                    className="btn btn-primary mt-4"
                  >
                    Submit Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Manufacturing Ltd."
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Contact Person Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. HR Manager / Admin Head"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        placeholder="+91 98450 XXXXX"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Corporate Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        placeholder="hr@company.com"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Camp Location / Facility Address *</label>
                      <input
                        required
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Hosur Industrial Area, Phase II"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Employee Headcount</label>
                      <input
                        type="number"
                        min="10"
                        max="10000"
                        value={formData.estimatedEmployees}
                        onChange={(e) => setFormData({ ...formData, estimatedEmployees: Number(e.target.value) })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Camp Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Special Requirements or Notes</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify required diagnostic packages, shift timings, or special optical requests..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-primary w-full py-4 text-sm font-extrabold flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? "Registering Camp in Database..." : "Schedule Corporate Health Camp"}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
