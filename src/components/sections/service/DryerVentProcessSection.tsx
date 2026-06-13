interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface DryerVentProcessSectionProps {
  steps: ProcessStep[];
}

export default function DryerVentProcessSection({ steps }: DryerVentProcessSectionProps) {

  return (
    <section className="bg-gray-50 pt-16 pb-24 lg:pt-20 lg:pb-32">
      <div className="container mx-auto max-w-4xl px-6">

        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
            Our Professional Dryer Vent Cleaning Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Every service follows our proven 4-step process to ensure your dryer vent system is safe and efficient
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6 lg:gap-6 lg:p-8"
            >
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F97316] text-lg font-bold text-white lg:h-12 lg:w-12 lg:text-xl">
                  {step.number}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-slate-900 lg:text-xl">
                  {step.title}
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-gray-200 bg-white p-6 text-center lg:p-8">
          <p className="text-base text-slate-700 lg:text-lg">
            After service, you'll enjoy improved dryer efficiency, reduced energy costs, and most importantly, peace of mind knowing your home is protected from fire hazards.
          </p>
        </div>

      </div>
    </section>
  );
}
