import { Phone } from 'lucide-react';

export default function GalleryHero() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/air-duct-installation-doylestown-01.webp')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white lg:text-6xl">
            Real Inspection Photos From Bucks County Homes
          </h1>

          <p className="mb-8 text-lg md:text-xl text-white max-w-3xl mx-auto">
           Below are real photos taken during actual dryer vent inspections and cleanings.
This gallery shows what we commonly find inside dryer vents — and how it looks after professional service.
          </p>

          <a
            href="tel:+12157108781"
            className="inline-flex items-center gap-3 rounded-lg bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800"
          >
            <Phone className="h-6 w-6" />
            Free Inspection
          </a>
        </div>
      </div>
    </section>
  );
}
