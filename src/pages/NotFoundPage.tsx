import { Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-slate-50 py-24 text-center lg:py-32">
        <div className="container mx-auto max-w-3xl px-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#F97316]">Page Not Found</p>
          <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl">We Could Not Find That Page</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
            The address may be outdated or typed incorrectly. Visit the homepage or contact Air Duct Priority for help.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700">
              <Home className="h-5 w-5" />
              Return Home
            </Link>
            <a href="tel:+12157108781" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-7 py-4 font-semibold text-white hover:bg-slate-800">
              <Phone className="h-5 w-5" />
              Call (215) 710-8781
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
