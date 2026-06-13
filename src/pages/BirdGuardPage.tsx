import Header from '../components/Header';
import BirdGuardHero from '../components/sections/service/BirdGuardHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import BirdGuardReason from '../components/sections/service/BirdGuardReason';
import BirdGuardActionSection from '../components/sections/service/BirdGuardActionSection';
import Footer from '../components/Footer';

export default function BirdGuardPage() {
  const processSteps = [
    {
      number: '1',
      title: 'Vent Inspection',
      description: 'We inspect the exterior dryer vent termination for existing blockages, damage, or nesting activity.'
    },
    {
      number: '2',
      title: 'Cleaning & Preparation',
      description: 'Any lint, nesting material, or debris is safely removed to ensure proper airflow before installation.'
    },
    {
      number: '3',
      title: 'Bird Guard Installation',
      description: 'We install a code-compliant metal bird guard designed to allow airflow while preventing animal entry.'
    },
    {
      number: '4',
      title: 'Airflow & Safety Verification',
      description: 'We confirm unrestricted airflow and ensure the guard is securely installed and functioning properly.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <BirdGuardHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Bird Guard Installation Process"
      />

      <BirdGuardReason />

      <BirdGuardActionSection />

      <Footer />
    </div>
  );
}
