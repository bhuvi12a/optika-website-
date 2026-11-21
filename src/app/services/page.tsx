import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesBentoGrid from "@/components/ServicesBentoGrid";
import { diagnosticServices, eyewearPrices } from "@/data/site";
import { ArrowRight, ShieldCheck, Microscope, Glasses } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        <section className="py-20 bg-gradient-to-b from-teal-50 via-emerald-50 to-slate-50 border-b border-slate-200">
          <div className="container max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-extrabold tracking-wider text-teal-800 bg-teal-100 rounded-full mb-4">
              SPECIALIZED HEALTHCARE DIVISIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Clinical services, <em className="text-emerald-600 not-italic">engineered for organizations.</em>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              From mobile workplace diagnostics and auto-refractor vision screenings to prescription optics and industrial health compliance.
            </p>
          </div>
        </section>

        {/* Dynamic Bento Service Grid with Category Switcher */}
        <section className="py-16">
          <div className="container">
            <ServicesBentoGrid />
          </div>
        </section>

        {/* Diagnostic Testing & Eyewear Price Catalogs */}
        <section className="py-16 border-t border-slate-200 bg-white">
          <div className="container grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="flex items-center gap-3 text-emerald-700 font-bold mb-4">
                <Microscope size={24} />
                <h3 className="text-xl font-extrabold text-slate-900">Individual Diagnostic Rates</h3>
              </div>
              <p className="text-xs text-slate-500 mb-6">Rates transcribed directly from official hospital and clinical camp schedules.</p>
              <div className="space-y-3">
                {diagnosticServices.map((d) => (
                  <div key={d.name} className="flex justify-between items-center py-3 border-b border-slate-200 text-sm">
                    <span className="font-semibold text-slate-800">{d.name}</span>
                    <strong className="text-emerald-700 font-bold text-base">₹{d.price}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="flex items-center gap-3 text-sky-700 font-bold mb-4">
                <Glasses size={24} />
                <h3 className="text-xl font-extrabold text-slate-900">Corporate Eyewear Catalog</h3>
              </div>
              <p className="text-xs text-slate-500 mb-6">Anti-blue light and computer vision lenses for screen-intensive workforces.</p>
              <div className="space-y-3">
                {eyewearPrices.map((e) => (
                  <div key={e.name} className="flex justify-between items-center py-3 border-b border-slate-200 text-sm">
                    <span className="font-semibold text-slate-800">{e.name}</span>
                    <strong className="text-sky-700 font-bold text-base">{e.price}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
