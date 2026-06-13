interface FlipCardProps {
  problem: string;
  hiddenCause: string;
  result: string;
  isPrimary: boolean;
}

function FlipCard({ problem, hiddenCause, result, isPrimary }: FlipCardProps) {
  const parseContent = (text: string) => {
    const hiddenCauseMatch = text.match(/Hidden Cause:\s*(.+?)(?=\s+Result:|$)/s);
    const resultMatch = text.match(/Result:\s*(.+)$/s);

    return {
      hiddenCause: hiddenCauseMatch ? hiddenCauseMatch[1].trim() : text,
      result: resultMatch ? resultMatch[1].trim() : ''
    };
  };

  const { hiddenCause: parsedHiddenCause, result: parsedResult } = parseContent(hiddenCause);

  return (
    <div className="group h-48 md:h-64 lg:h-72 w-full" style={{ perspective: '1000px' }}>
      <div className="relative h-full w-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        <div className={`absolute inset-0 flex items-center justify-center rounded-md border-l-4 p-4 md:p-6 shadow-sm [backface-visibility:hidden] ${
          isPrimary
            ? 'border-[#F97316] bg-slate-900 text-gray-100'
            : 'border-[#F97316] bg-gray-100 text-slate-900'
        }`}>
          <h3 className="text-center text-base md:text-lg font-bold lg:text-xl">
            {problem}
          </h3>
        </div>

        <div className={`absolute inset-0 flex flex-col justify-center rounded-md border-l-4 p-4 md:p-6 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] ${
          isPrimary
            ? 'border-[#F97316] bg-gray-50'
            : 'border-[#F97316] bg-gray-50'
        }`}>
          <div className="space-y-3 md:space-y-4">
            <p className="text-sm md:text-base text-gray-800 lg:text-lg">
              <span className="font-bold">Hidden Cause:</span> {parsedHiddenCause}
            </p>
            {parsedResult && (
              <p className="text-sm md:text-base text-gray-800 lg:text-lg">
                <span className="font-bold">Result:</span> {parsedResult}
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function AirDuctConstructionCleaningReason() {
  const cards = [
    {
      problem: 'Construction Debris in Ducts',
      hiddenCause: 'Hidden Cause: Drywall dust, sawdust, and construction materials settle into ductwork during renovation or new construction. Result: Poor air quality and potential damage to HVAC equipment.',
      result: '',
      isPrimary: false
    },
    {
      problem: 'Clogged Air Filters',
      hiddenCause: 'Hidden Cause: Heavy construction dust overwhelms air filters, reducing system efficiency and allowing debris to circulate. Result: Reduced airflow and increased energy costs.',
      result: '',
      isPrimary: false
    },
    {
      problem: 'HVAC System Strain',
      hiddenCause: 'Hidden Cause: Construction debris restricts airflow and forces the system to work harder to maintain temperature. Result: Premature system failure and costly repairs.',
      result: '',
      isPrimary: false
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-6">

        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold lg:text-3xl">
            Why Post-Construction Cleaning Is Essential
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            Construction creates significant dust and debris that settles in air ducts. Professional cleaning protects your HVAC system and indoor air quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
