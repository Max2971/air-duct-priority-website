import Header from '../components/Header';
import DryerVentHero from '../components/sections/service/DryerVentHero';
import TrustSection from '../components/sections/TrustSection';
import DryerVentProcessSection from '../components/sections/service/DryerVentProcessSection';
import DryerVentReason from '../components/sections/service/DryerVentReason';
import DryerVentActionSection from '../components/sections/service/DryerVentActionSection';
import Footer from '../components/Footer';

export default function DryerVentCleaningPage() {
  const processSteps = [
    {
      number: '1',
      title: 'System Inspection',
      description: 'We inspect the entire dryer vent system, including the dryer connection, vent path, transitions, and exterior exhaust.'
    },
    {
      number: '2',
      title: 'Dryer Vent Cleaning',
      description: 'Using professional equipment, we remove lint and debris from the full length of the vent line — not just the visible areas.'
    },
    {
      number: '3',
      title: 'Airflow Verification',
      description: 'We verify proper airflow after cleaning to ensure the system is venting correctly and safely.'
    },
    {
      number: '4',
      title: 'Safety Check',
      description: 'We check for code compliance and identify any issues that may require repair, rerouting, or upgrades.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <DryerVentHero />

      <TrustSection variant="credentials" compact />

      <DryerVentProcessSection steps={processSteps} />

      <DryerVentReason />

      <DryerVentActionSection />

      <Footer />
    </div>
  );
}
