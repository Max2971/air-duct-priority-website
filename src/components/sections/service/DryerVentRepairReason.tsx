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

export default function DryerVentRepairReason() {
  const cards = [
    {
      problem: 'Dryer Vent Pipe Crushed or Damaged',
      hiddenCause: 'Hidden Cause: The vent pipe becomes crushed, bent, or damaged due to tight spaces behind the dryer, improper installation, or heavy appliances pushing against the vent line. Result: Restricted airflow, overheating, increased fire risk, and reduced dryer efficiency that can lead to premature appliance failure.',
      result: '',
      isPrimary: false
    },
    {
      problem: 'Moisture Build-Up and Lint Throughout the Laundry Room',
      hiddenCause: 'Hidden Cause: Leaking, crushed, or improperly sealed vent sections allow warm, moist air and lint to escape before reaching the exterior. Result: Excess moisture, visible lint accumulation, unhealthy indoor air, and reduced dryer performance.',
      result: '',
      isPrimary: false
    },
    {
      problem: 'Dryer Shuts Off or Overheats',
      hiddenCause: 'Hidden Cause: Restricted or damaged vent lines prevent proper heat exhaust, causing internal temperature spikes. Result: Fire risk, premature dryer failure, and costly appliance repairs.',
      result: '',
      isPrimary: false
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-6">

        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold lg:text-3xl">
            Common Dryer Vent Repair Problems
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            When cleaning is not enough, hidden damage or improper installation often requires professional repair.
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
