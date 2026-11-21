"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contact } from "@/data/site";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    serviceType: "Corporate Health Camp",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to submit enquiry");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        <section className="py-20 bg-gradient-to-b from-emerald-50 via-teal-50 to-slate-50 border-b border-slate-200">
          <div className="container max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-extrabold tracking-wider text-emerald-800 bg-emerald-100 rounded-full mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Let’s plan your next <em className="text-emerald-600 not-italic">health initiative.</em>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Have questions about customized diagnostic panels, corporate optical prescriptions, or booking an on-site camp? Send us a message or call our coordination desk.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container grid lg:grid-cols-12 gap-12">
            {/* Contact Details & Fast WhatsApp CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Direct Office Contact</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block text-slate-900">Registered Office:</strong>
                      <span>{contact.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block text-slate-900">Phone Support:</strong>
                      <a href={`tel:${contact.phoneRaw}`} className="text-emerald-600 font-bold hover:underline">
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block text-slate-900">Corporate Enquiries:</strong>
                      <a href={`mailto:${contact.email}`} className="text-emerald-600 font-bold hover:underline">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <a
                    href={`https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent("Hello Optika Healthcare, I have an enquiry regarding services.")}`}
                    className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition duration-200 w-full shadow-lg shadow-emerald-600/20"
                  >
                    <MessageSquare size={18} />
                    <span>Instant Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Dynamic Interactive Backend Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Send a Direct Enquiry</h3>
              <p className="text-xs text-slate-500 mb-6">Submitted requests are saved in our backend database and dispatched to our coordinator.</p>

              {status === "success" ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                  <h4 className="text-2xl font-bold text-slate-900">Enquiry Submitted!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry has been received and saved. Our representative will contact you shortly at <strong>{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        organization: "",
                        serviceType: "Corporate Health Camp",
                        message: "",
                      });
                    }}
                    className="btn btn-primary mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98450 XXXXX"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Organization name (optional)"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service of Interest</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 bg-white"
                    >
                      <option value="Corporate Health Camp">Corporate Health Camp</option>
                      <option value="Eye Check-up Camp">Eye Check-up Camp</option>
                      <option value="Diagnostic Blood Packages">Diagnostic Blood Packages</option>
                      <option value="Corporate Eyewear Orders">Corporate Eyewear Orders</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can Optika Healthcare assist your team or clinic?"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-primary w-full py-4 text-sm font-extrabold flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? "Saving Enquiry..." : "Submit Enquiry"}
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
