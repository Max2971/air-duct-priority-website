import Header from '../components/Header';
import AirDuctCleaningHero from '../components/sections/service/AirDuctCleaningHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import AirDuctCleaningReason from '../components/sections/service/AirDuctCleaningReason';
import AirDuctCleaningActionSection from '../components/sections/service/AirDuctCleaningActionSection';
import Footer from '../components/Footer';
import AirDuctCleaningDetails from '../components/sections/service/AirDuctCleaningDetails';

export default function AirDuctCleaningPage() {
  const processSteps = [
    {
      number: '1',
      title: 'System Inspection',
      description: 'We inspect the entire air duct system, including supply and return vents, main trunk lines, and HVAC connections.'
    },
    {
      number: '2',
      title: 'Air Duct Cleaning',
      description: 'Using professional equipment, we remove dust, debris, and contaminants from the full length of the ductwork.'
    },
    {
      number: '3',
      title: 'Airflow Verification',
      description: 'We verify proper airflow after cleaning to ensure the system is operating correctly and efficiently.'
    },
    {
      number: '4',
      title: 'System Check',
      description: 'We check for any issues that may require repair or attention and provide recommendations as needed.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <AirDuctCleaningHero />

      <TrustSection variant="credentials" compact />
      <AirDuctCleaningDetails />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Air Duct Cleaning Process"
      />

      <AirDuctCleaningReason />

      <AirDuctCleaningActionSection />

      <Footer />
    </div>
  );
}
