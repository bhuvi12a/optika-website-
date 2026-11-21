import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">404 Error</p>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Page Not Found</h1>
          <p className="text-slate-600 mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
