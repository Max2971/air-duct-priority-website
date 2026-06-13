import Header from '../components/Header';
import DryerVentRepairHero from '../components/sections/service/DryerVentRepairHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import DryerVentRepairReason from '../components/sections/service/DryerVentRepairReason';
import DryerVentRepairActionSection from '../components/sections/service/DryerVentRepairActionSection';
import Footer from '../components/Footer';
import DryerVentServiceDetails from '../components/sections/service/DryerVentServiceDetails';

export default function DryerVentRepairPage() {
  const processSteps = [
    {
      number: '1',
      title: 'System Diagnosis',
      description: 'We inspect the dryer vent system to identify disconnections, crushed sections, airflow restrictions, leaks, and improper routing.'
    },
    {
      number: '2',
      title: 'Targeted Repair',
      description: 'Damaged, disconnected, or improperly installed vent sections are repaired or replaced with airflow and durability in mind.'
    },
    {
      number: '3',
      title: 'Airflow & Safety Verification',
      description: 'We test airflow after repairs and confirm the system operates safely and efficiently.'
    },
    {
      number: '4',
      title: 'Clear Recommendation',
      description: 'We explain the completed repair and identify any remaining routing or exterior termination concerns.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <DryerVentRepairHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Dryer Vent Repair Process"
      />

      <DryerVentRepairReason />

      <DryerVentServiceDetails
        eyebrow="Problems We Repair"
        heading="Dryer Vent Problems Cleaning Alone Cannot Fix"
        intro="Physical damage, poor routing, and improper connections can continue restricting airflow even after lint is removed."
        items={['Disconnected vent line', 'Crushed flexible duct', 'Loose or leaking connection', 'Wrong exterior vent cover', 'Bird nest damage', 'Screened or blocked termination', 'Moisture or condensation concerns', 'Long or inefficient vent route', 'Poor airflow after cleaning']}
        approachHeading="Repair or Replacement?"
        approach={['Repair the affected section when practical', 'Replace damaged or unsuitable vent material when needed', 'Explain whether rerouting is the better long-term option', 'Check airflow after repair', 'No hidden fees or unnecessary upsells', 'Serving Bucks County and Montgomery County']}
        faqHeading="Dryer Vent Repair FAQ"
        faqs={repairFaqs}
      />

      <DryerVentRepairActionSection />

      <Footer />
    </div>
  );
}

const repairFaqs: Array<[string, string]> = [
  ['How do I know whether my dryer vent needs repair?', 'Visible damage, a crushed connection, lint or moisture escaping indoors, poor airflow after cleaning, or a disconnected line can indicate repair is needed.'],
  ['Can you repair a dryer vent disconnected in an attic?', 'Accessible disconnected dryer vent sections can be evaluated and repaired when conditions allow.'],
  ['Do you replace crushed flexible duct behind the dryer?', 'Yes. A crushed or unsuitable connection can be replaced with an appropriate connection when needed.'],
  ['Can you repair a roof-exit dryer vent?', 'Roof-exit vent concerns can be inspected and addressed depending on access, condition, and the exterior termination.'],
  ['Do you provide a free inspection?', 'Yes. Air Duct Priority provides a free in-person inspection and clear recommendation before repair work begins.'],
];
