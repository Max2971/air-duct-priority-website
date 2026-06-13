import { Phone } from 'lucide-react';

export default function HOAInspectionHero() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden mb-2">
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover"
          src="/hero-hoa-inspection_6.23.41_pm.png"
          alt="HOA inspection and certification service"
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex h-full items-start pt-20 md:items-center md:pt-0">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">

            <h1 className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-white lg:text-6xl">
              HOA Dryer Vent Inspection & Certification in Bucks County, PA
            </h1>

            <p className="mb-12 md:mb-8 text-lg md:text-xl text-white/90 lg:text-2xl">
              Professional dryer vent inspections and documentation to meet HOA safety requirements and compliance standards.
            </p>

            <div className="mt-8 md:mt-0">
              <a
                href="tel:+12157108781"
                className="inline-flex items-center gap-3 rounded-lg bg-white px-8 py-2 md:py-4 text-sm md:text-lg font-semibold text-slate-900 transition-all hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
                Free Home Airflow & Safety Check
              </a>
            </div>

            <p className="mt-6 text-sm text-white/70">
              HOA Inspection & Certification Services
            </p>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
        <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
          <p className="text-sm font-medium text-white">
            Serving Bucks County, PA
          </p>
        </div>
      </div>
    </section>
  );
}
