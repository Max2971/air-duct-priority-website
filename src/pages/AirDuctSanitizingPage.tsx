import Header from '../components/Header';
import AirDuctSanitizingHero from '../components/sections/service/AirDuctSanitizingHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import AirDuctSanitizingReason from '../components/sections/service/AirDuctSanitizingReason';
import ConversionCta from '../components/ConversionCta';
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
      description: 'When appropriate, we apply a product labeled for the intended HVAC use and follow its application instructions.'
    },
    {
      number: '3',
      title: 'Treatment Verification',
      description: 'We verify complete coverage and proper application of sanitizing agents throughout the system.'
    },
    {
      number: '4',
      title: 'Air Quality Check',
      description: 'We perform a final check and explain the completed scope, limitations, and any remaining concerns.'
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

      <ConversionCta title="Have a Specific Duct Contamination Concern?" description="Request an inspection so the recommendation matches the actual condition and scope." onlineLabel="Request an Inspection" />

      <Footer />
    </div>
  );
}
