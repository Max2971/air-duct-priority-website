import Header from '../components/Header';
import AirDuctInstallationHero from '../components/sections/service/AirDuctInstallationHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import AirDuctInstallationReason from '../components/sections/service/AirDuctInstallationReason';
import AirDuctInstallationActionSection from '../components/sections/service/AirDuctInstallationActionSection';
import Footer from '../components/Footer';

export default function AirDuctInstallationPage() {
  const processSteps = [
    {
      number: '1',
      title: 'Site Assessment',
      description: 'We evaluate the property layout, HVAC system requirements, and optimal duct routing for maximum efficiency.'
    },
    {
      number: '2',
      title: 'System Design',
      description: 'We design a duct system that ensures proper airflow distribution and meets all code requirements.'
    },
    {
      number: '3',
      title: 'Professional Installation',
      description: 'We install the ductwork with secure connections, proper sealing, and correct sizing for your system.'
    },
    {
      number: '4',
      title: 'System Testing',
      description: 'We test airflow and system performance to confirm proper operation and efficiency.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <AirDuctInstallationHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Air Duct Installation Process"
      />

      <AirDuctInstallationReason />

      <AirDuctInstallationActionSection />

      <Footer />
    </div>
  );
}
