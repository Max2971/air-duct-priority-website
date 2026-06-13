import Header from '../components/Header';
import AirDuctRepairHero from '../components/sections/service/AirDuctRepairHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import AirDuctRepairReason from '../components/sections/service/AirDuctRepairReason';
import AirDuctRepairActionSection from '../components/sections/service/AirDuctRepairActionSection';
import Footer from '../components/Footer';

export default function AirDuctRepairPage() {
  const processSteps = [
    {
      number: '1',
      title: 'System Inspection',
      description: 'We inspect the entire duct system to identify damaged sections, leaks, and areas requiring repair.'
    },
    {
      number: '2',
      title: 'Repair Assessment',
      description: 'We assess the extent of damage and develop a repair plan to restore proper system operation.'
    },
    {
      number: '3',
      title: 'Professional Repair',
      description: 'We repair or replace damaged sections, seal leaks, and restore proper connections throughout the system.'
    },
    {
      number: '4',
      title: 'System Verification',
      description: 'We test airflow and system performance to confirm all repairs are effective and the system operates properly.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <AirDuctRepairHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Air Duct Repair Process"
      />

      <AirDuctRepairReason />

      <AirDuctRepairActionSection />

      <Footer />
    </div>
  );
}
