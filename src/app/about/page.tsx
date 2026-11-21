import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contact } from "@/data/site";
import { Building2, Award, Users, CheckCircle2, ShieldAlert, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        {/* Hero Banner */}
        <section className="py-20 bg-gradient-to-b from-emerald-50 via-teal-50 to-slate-50 border-b border-slate-200">
          <div className="container max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-extrabold tracking-wider text-emerald-800 bg-emerald-100 rounded-full mb-4">
              ABOUT OPTIKA HEALTHCARE
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              A holistic approach to everyday <em className="text-emerald-600 not-italic">health monitoring.</em>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Bridging the gap between corporate workplace productivity and vital preventative healthcare across Hosur, Krishnagiri, and industrial corridors.
            </p>
          </div>
        </section>

        {/* Corporate Profile Details */}
        <section className="py-20">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase">OUR MISSION &amp; PHILOSOPHY</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-6">
                Preventative diagnostics where employees work and thrive.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  Optika Healthcare was founded by <strong>{contact.founder}</strong> to solve a critical corporate challenge: employee health deterioration due to neglected routine monitoring and prolonged desk/screen time.
                </p>
                <p>
                  We conduct complete on-site employee medical check-ups, computerised refractive eye examinations, digital audiometry, and comprehensive lab panels using mobile diagnostic workstations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <strong className="text-3xl font-extrabold text-emerald-600 block">10,000+</strong>
                  <span className="text-xs font-medium text-slate-500">Employees Screened</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <strong className="text-3xl font-extrabold text-teal-600 block">100%</strong>
                  <span className="text-xs font-medium text-slate-500">Certified Lab Reports</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Award className="text-emerald-600" /> Corporate Headquarters
              </h3>
              <p className="text-sm text-slate-600">
                Operating from our specialized clinical and optical center in Bathalapalli, Hosur:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-700">
                <strong>Address:</strong><br />
                {contact.address}
              </div>
              <div className="border-t border-slate-100 pt-4 flex flex-col gap-2 text-sm text-slate-600">
                <div><strong>Founder &amp; Director:</strong> {contact.founder}</div>
                <div><strong>Direct Helpline:</strong> {contact.phone}</div>
                <div><strong>Corporate Email:</strong> {contact.email}</div>
              </div>
              <Link href="/contact" className="btn btn-primary w-full text-center py-3">
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
