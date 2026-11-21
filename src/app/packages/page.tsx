import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlipPackagesGrid from "@/components/FlipPackagesGrid";

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        <section className="py-20 bg-gradient-to-b from-emerald-50 via-teal-50 to-slate-50 border-b border-slate-200">
          <div className="container max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-extrabold tracking-wider text-emerald-800 bg-emerald-100 rounded-full mb-4">
              DIAGNOSTIC TEST CATALOG &amp; PACKAGES
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive <em className="text-emerald-600 not-italic">Health Screening Tiers.</em>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Select between Bronze, Silver, Gold, Platinum, and Diamond diagnostic profiles. Hover or tap any package to flip the card and connect directly with our chief medical coordinator.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <FlipPackagesGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
