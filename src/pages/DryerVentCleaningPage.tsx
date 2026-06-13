import Header from '../components/Header';
import DryerVentHero from '../components/sections/service/DryerVentHero';
import TrustSection from '../components/sections/TrustSection';
import DryerVentProcessSection from '../components/sections/service/DryerVentProcessSection';
import DryerVentReason from '../components/sections/service/DryerVentReason';
import DryerVentActionSection from '../components/sections/service/DryerVentActionSection';
import Footer from '../components/Footer';
import DryerVentCleaningDetails from '../components/sections/service/DryerVentCleaningDetails';
import DryerVentCleaningSolutions from '../components/sections/service/DryerVentCleaningSolutions';
import DryerVentCleaningAreaFaq from '../components/sections/service/DryerVentCleaningAreaFaq';

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
      description: 'Using professional equipment, we remove lint and debris from the accessible dryer vent line, not just the visible areas.'
    },
    {
      number: '3',
      title: 'Airflow Verification',
      description: 'We verify proper airflow after cleaning to ensure the system is venting correctly and safely.'
    },
    {
      number: '4',
      title: 'Clear Recommendation',
      description: 'We explain what we find and recommend repair, rerouting, or installation only when needed.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <DryerVentHero />

      <TrustSection variant="credentials" compact />

      <DryerVentCleaningDetails />

      <DryerVentProcessSection steps={processSteps} />

      <DryerVentReason />

      <DryerVentCleaningSolutions />

      <DryerVentCleaningAreaFaq />

      <DryerVentActionSection />

      <Footer />
    </div>
  );
}
