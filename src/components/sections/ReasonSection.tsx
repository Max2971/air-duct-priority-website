interface FlipCardProps {
  problem: string;
  hiddenCause: string;
  result: string;
  isPrimary: boolean;
}

function FlipCard({ problem, hiddenCause, result, isPrimary }: FlipCardProps) {
  return (
    <div className="group h-40 md:h-52 w-full" style={{ perspective: '1000px' }}>
      <div className="relative h-full w-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Front Side - Problem */}
        <div className={`absolute inset-0 flex items-center justify-center rounded-md border-l-4 p-4 md:p-6 shadow-sm [backface-visibility:hidden] ${
          isPrimary
            ? 'border-[#F97316] bg-slate-900 text-gray-100'
            : 'border-[#F97316] bg-gray-100 text-slate-900'
        }`}>
          <h3 className={`text-center text-base md:text-lg font-bold lg:text-xl ${isPrimary ? '!text-white' : '!text-slate-900'}`}>
            {problem}
          </h3>
        </div>

        {/* Back Side - Explanation */}
        <div className={`absolute inset-0 flex flex-col justify-center rounded-md border-l-4 p-4 md:p-6 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] ${
          isPrimary
            ? 'border-[#F97316] bg-white'
            : 'border-[#F97316] bg-gray-50'
        }`}>
          <p className="mb-2 md:mb-3 text-xs md:text-sm text-slate-700 lg:text-base">
            {hiddenCause}
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            {result}
          </p>
        </div>

      </div>
    </div>
  );
}

export default function ReasonSection() {
  const cards = [
    {
      problem: 'Dryer takes forever',
      hiddenCause: 'Lint builds up inside your vent over time, layer by layer.',
      result: 'Airflow gets blocked, heat stays trapped.',
      isPrimary: true
    },
    {
      problem: 'Clothes come out hot but damp',
      hiddenCause: 'Moisture cannot escape when the exhaust vent is clogged.',
      result: 'Creates fire risk and ruins efficiency.',
      isPrimary: true
    },
    {
      problem: 'Burning smell or dust',
      hiddenCause: 'Debris circulates through your system when vents are dirty.',
      result: 'Allergens and particles lower air quality.',
      isPrimary: true
    },
    {
      problem: 'Energy bills keep climbing',
      hiddenCause: 'Buildup forces your system to run longer to dry clothes.',
      result: 'You pay more each month for worse results.',
      isPrimary: true
    }
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
            Here's why this usually happens
          </h2>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          {cards.map((card, index) => (
            <FlipCard
              key={index}
              problem={card.problem}
              hiddenCause={card.hiddenCause}
              result={card.result}
              isPrimary={card.isPrimary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
