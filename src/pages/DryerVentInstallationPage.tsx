import Header from '../components/Header';
import DryerVentInstallationHero from '../components/sections/service/DryerVentInstallationHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import DryerVentInstallationReason from '../components/sections/service/DryerVentInstallationReason';
import DryerVentInstallationActionSection from '../components/sections/service/DryerVentInstallationActionSection';
import Footer from '../components/Footer';
import DryerVentServiceDetails from '../components/sections/service/DryerVentServiceDetails';

export default function DryerVentInstallationPage() {
  const processSteps = [
    {
      number: '1',
      title: 'Site Assessment',
      description: 'We evaluate the dryer location, building layout, and exterior exit options to determine the safest and most efficient vent route.'
    },
    {
      number: '2',
      title: 'Route Planning',
      description: 'We plan a clear vent path that minimizes unnecessary length and turns and supports proper airflow.'
    },
    {
      number: '3',
      title: 'Professional Installation',
      description: 'We install hard metal dryer vent piping with secure connections, proper sealing, and correct exterior termination.'
    },
    {
      number: '4',
      title: 'Airflow & Safety Verification',
      description: 'We test airflow and explain the completed route, connections, and exterior termination.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <DryerVentInstallationHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Dryer Vent Installation Process"
      />

      <DryerVentInstallationReason />

      <DryerVentServiceDetails
        eyebrow="When Installation Is Needed"
        heading="A Better Dryer Vent Route Starts with the Right Plan"
        intro="Installation or replacement may be needed when a vent is missing, damaged, poorly routed, unsafe, or unable to move air effectively."
        items={['New dryer vent line', 'Replace an old or damaged line', 'Reroute a long or inefficient path', 'Correct a disconnected vent', 'Replace unsuitable flexible material', 'Install a proper exterior termination', 'Move a dryer to a new location', 'Improve access for future cleaning', 'Correct recurring airflow problems']}
        approachHeading="Our Installation Approach"
        approach={['Installed with safety and airflow in mind', 'Clear route whenever possible', 'Smooth metal where appropriate', 'Secure connections and proper exterior termination', 'Avoid screens where they can trap lint', 'Code-conscious recommendations without claiming official inspection']}
        faqHeading="Dryer Vent Installation FAQ"
        faqs={installationFaqs}
      />

      <DryerVentInstallationActionSection />

      <Footer />
    </div>
  );
}

const installationFaqs: Array<[string, string]> = [
  ['When is a new dryer vent line needed?', 'A new line may be needed when the existing vent is missing, damaged, unsafe, poorly routed, or cannot be repaired effectively.'],
  ['Can you reroute an existing dryer vent?', 'Yes. Air Duct Priority provides dryer vent rerouting when a clearer or more practical route is available.'],
  ['What materials do you use?', 'The recommended materials depend on the route and conditions. Smooth metal is used where appropriate, with secure connections and a proper exterior termination.'],
  ['Can you install a new exterior vent cover?', 'Yes. Exterior termination and vent cover replacement can be included when appropriate.'],
  ['Do you provide a free inspection before installation?', 'Yes. Air Duct Priority provides a free in-person inspection and explains the proposed route and scope before work begins.'],
];
