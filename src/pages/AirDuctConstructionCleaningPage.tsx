import Header from '../components/Header';
import AirDuctConstructionCleaningHero from '../components/sections/service/AirDuctConstructionCleaningHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import AirDuctConstructionCleaningReason from '../components/sections/service/AirDuctConstructionCleaningReason';
import ConversionCta from '../components/ConversionCta';
import Footer from '../components/Footer';

export default function AirDuctConstructionCleaningPage() {
  const processSteps = [
    {
      number: '1',
      title: 'Construction Debris Assessment',
      description: 'We inspect the air duct system to identify construction debris, dust accumulation, and areas requiring attention.'
    },
    {
      number: '2',
      title: 'Heavy-Duty Cleaning',
      description: 'We use specialized equipment to remove drywall dust, sawdust, and construction materials from the entire system.'
    },
    {
      number: '3',
      title: 'Filter Replacement',
      description: 'We replace air filters that have been compromised by construction debris to ensure optimal system performance.'
    },
    {
      number: '4',
      title: 'System Verification',
      description: 'We verify the system is clean and operating properly, checking for any remaining debris or damage.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <AirDuctConstructionCleaningHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Air Duct Construction Cleaning Process"
      />

      <AirDuctConstructionCleaningReason />

      <ConversionCta title="Concerned About Construction Dust in Your Ducts?" description="Request an inspection to confirm whether cleaning is needed and understand the full-system scope." onlineLabel="Request Construction Dust Inspection" />

      <Footer />
    </div>
  );
}
