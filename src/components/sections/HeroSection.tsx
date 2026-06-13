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
          <div className="flex h-full max-w-2xl flex-col pt-24 pb-16">
            {/* TOP: Headline + Subheadline */}
            <div>
              <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-100 md:text-5xl lg:text-6xl">
                Protect Your Home from Dryer Vent Fires
              </h1>

              <p className="text-lg text-gray-200 md:text-xl lg:text-2xl">
                Full system airflow inspection focused on dryer vent safety and fire prevention.
              </p>
            </div>

            {/* BOTTOM: CTA + Small supporting text */}
            <div className="mt-auto">
              <a
                href="tel:+12157108781"
                className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-gray-100 transition-all hover:bg-blue-700 md:py-4 md:text-lg"
              >
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
                Free Home Airflow &amp; Safety Check
              </a>

              <p className="mt-6 text-sm text-gray-300">
                Full system airflow inspection and cleaning services available - from dryer vents to complete air duct systems.
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
