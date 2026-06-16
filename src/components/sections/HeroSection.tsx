import { Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden mb-2">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-dryer-vent-cleaning.webp"
        >
          <source src="/hero-dryer-vent-cleaning.mp4" type="video/mp4" />
        </video>

        {/* Subtle Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-slate-900/45" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto h-full px-6 lg:px-12">
          {/* This wrapper controls TOP vs BOTTOM layout */}
          <div className="flex h-full max-w-3xl flex-col pb-16 pt-20 lg:pt-28">
            {/* TOP: Headline + Subheadline */}
            <div className="rounded-2xl border border-white/15 bg-slate-950/35 p-6 shadow-2xl backdrop-blur-[2px] md:p-8 lg:p-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FDBA74] md:text-base">
                Air Duct Priority
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-[1.08] text-gray-100 md:text-5xl lg:text-6xl">
                Dryer Vent &amp; Air Duct Services
                <span className="mt-2 block text-2xl font-semibold text-slate-200 md:text-3xl lg:text-4xl">
                  Bucks &amp; Montgomery Counties, PA
                </span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
                Owner-operated service with complimentary air duct inspections, no-pressure recommendations, and before-and-after video proof.
              </p>
            </div>

            {/* BOTTOM: CTA + Small supporting text */}
            <div className="mt-auto">
              <a
                href="tel:+12157108781"
                className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-gray-100 transition-all hover:bg-blue-700 md:py-4 md:text-lg"
              >
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
                Call Air Duct Priority
              </a>

              <p className="mt-6 text-sm text-gray-300">
                Dryer vent cleaning, repair, installation, rerouting, and full-system air duct cleaning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Badge - Subtle Authority Indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
        <div className="rounded-lg bg-slate-800/60 px-4 py-2 backdrop-blur-sm">
          <p className="text-sm font-medium text-gray-200">
            Serving Bucks County &amp; Montgomery County, PA
          </p>
        </div>
      </div>
    </section>
  );
}
