import Header from '../components/Header';
import DryerVentInstallationHero from '../components/sections/service/DryerVentInstallationHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import DryerVentInstallationReason from '../components/sections/service/DryerVentInstallationReason';
import DryerVentInstallationActionSection from '../components/sections/service/DryerVentInstallationActionSection';
import Footer from '../components/Footer';

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
      description: 'We design a vent path that meets code requirements, minimizes length and turns, and ensures proper airflow.'
    },
    {
      number: '3',
      title: 'Professional Installation',
      description: 'We install hard metal dryer vent piping with secure connections, proper sealing, and correct exterior termination.'
    },
    {
      number: '4',
      title: 'Airflow & Safety Verification',
      description: 'We test airflow and confirm the system operates safely, efficiently, and in compliance with applicable standards.'
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

      <DryerVentInstallationActionSection />

      <Footer />
    </div>
  );
}
