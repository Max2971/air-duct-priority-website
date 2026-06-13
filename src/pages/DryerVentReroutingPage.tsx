import Header from '../components/Header';
import DryerVentReroutingHero from '../components/sections/service/DryerVentReroutingHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import DryerVentReroutingReason from '../components/sections/service/DryerVentReroutingReason';
import DryerVentReroutingActionSection from '../components/sections/service/DryerVentReroutingActionSection';
import Footer from '../components/Footer';

export default function DryerVentReroutingPage() {
  const processSteps = [
    {
      number: '1',
      title: 'System Evaluation',
      description: 'We inspect the existing dryer vent layout, routing path, and termination to identify airflow restrictions and safety concerns.'
    },
    {
      number: '2',
      title: 'Route Planning',
      description: 'We design a new vent route that meets code requirements, reduces length and turns, and improves overall airflow efficiency.'
    },
    {
      number: '3',
      title: 'Professional Rerouting',
      description: 'We remove or bypass unsafe sections and install new hard metal vent piping with proper support and sealing.'
    },
    {
      number: '4',
      title: 'Airflow & Safety Verification',
      description: 'We test airflow and confirm the rerouted system operates safely, efficiently, and vents correctly to the exterior.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <DryerVentReroutingHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Dryer Vent Rerouting Process"
      />

      <DryerVentReroutingReason />

      <DryerVentReroutingActionSection />

      <Footer />
    </div>
  );
}
