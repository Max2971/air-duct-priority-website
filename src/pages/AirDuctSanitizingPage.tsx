import Header from '../components/Header';
import AirDuctSanitizingHero from '../components/sections/service/AirDuctSanitizingHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import AirDuctSanitizingReason from '../components/sections/service/AirDuctSanitizingReason';
import AirDuctSanitizingActionSection from '../components/sections/service/AirDuctSanitizingActionSection';
import Footer from '../components/Footer';

export default function AirDuctSanitizingPage() {
  const processSteps = [
    {
      number: '1',
      title: 'Pre-Sanitizing Inspection',
      description: 'We assess the duct system to identify areas requiring sanitizing treatment and check for moisture issues.'
    },
    {
      number: '2',
      title: 'Professional Sanitizing',
      description: 'We apply EPA-approved sanitizing agents throughout the duct system to eliminate bacteria, mold, and odors.'
    },
    {
      number: '3',
      title: 'Treatment Verification',
      description: 'We verify complete coverage and proper application of sanitizing agents throughout the system.'
    },
    {
      number: '4',
      title: 'Air Quality Check',
      description: 'We perform a final check to ensure the system is sanitized and ready for healthy air circulation.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <AirDuctSanitizingHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Air Duct Sanitizing Process"
      />

      <AirDuctSanitizingReason />

      <AirDuctSanitizingActionSection />

      <Footer />
    </div>
  );
}
