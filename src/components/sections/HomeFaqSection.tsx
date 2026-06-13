const faqs = [
  {
    question: 'How do I know if my dryer vent may be clogged?',
    answer: 'Common signs include clothes taking two cycles to dry, a hot dryer, weak airflow outside, lint around the exterior vent, an airflow error, or a burning smell.',
  },
  {
    question: 'Do you repair and install dryer vents or only clean them?',
    answer: 'Air Duct Priority provides dryer vent cleaning, repair, installation, rerouting, exterior vent cover replacement, bird nest removal, and bird guard installation.',
  },
  {
    question: 'Will you tell me if air duct cleaning is not needed?',
    answer: 'Yes. Air duct cleaning is recommended when an inspection shows a real reason, such as heavy debris, construction dust, pest activity, odors, or a specific airflow concern.',
  },
  {
    question: 'Do you provide before-and-after proof?',
    answer: 'Yes. Before-and-after video proof is provided when possible so customers can understand the condition of their own dryer vent or air duct system.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'Air Duct Priority is based in Jamison, Pennsylvania and serves Bucks County, Montgomery County, and nearby communities.',
  },
];

export default function HomeFaqSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-700">Straight answers before you schedule service.</p>
        </div>
        <div className="space-y-4">
          {faqs.map(({ question, answer }) => (
            <article key={question} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-slate-900">{question}</h3>
              <p className="text-slate-700">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
