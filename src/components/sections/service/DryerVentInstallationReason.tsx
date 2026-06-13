interface FlipCardProps {
  problem: string;
  hiddenCause: string;
  result: string;
  isPrimary: boolean;
}

function FlipCard({ problem, hiddenCause, isPrimary }: FlipCardProps) {
  // Parse the combined text to separate Hidden Cause and Result
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

export default function DryerVentInstallationReason() {
  const cards = [
    {
      problem: 'Dryer Vent Was Never Installed Correctly',
      hiddenCause: 'Hidden Cause: Flexible materials, excessive length, or poor routing restrict airflow from the start. Result: Long drying times, higher energy costs, and increased fire risk.',
      result: '',
      isPrimary: false
    },
    {
      problem: 'Moisture and Lint Inside the Laundry Area',
      hiddenCause: 'Hidden Cause: Improper connections or missing exterior termination allow exhaust air to escape indoors. Result: Humidity buildup, lint accumulation, and unhealthy indoor conditions.',
      result: '',
      isPrimary: false
    },
    {
      problem: 'New Dryer Still Performs Poorly',
      hiddenCause: 'Hidden Cause: Even new appliances fail to perform when connected to an incorrectly installed vent system. Result: Reduced dryer lifespan and ongoing safety concerns despite new equipment.',
      result: '',
      isPrimary: false
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-6">

        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold lg:text-3xl">
            Why Proper Dryer Vent Installation Matters
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            Improper or outdated dryer vent installations often create hidden safety risks and performance problems.
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
