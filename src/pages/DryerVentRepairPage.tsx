import Header from '../components/Header';
import DryerVentRepairHero from '../components/sections/service/DryerVentRepairHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import DryerVentRepairReason from '../components/sections/service/DryerVentRepairReason';
import DryerVentRepairActionSection from '../components/sections/service/DryerVentRepairActionSection';
import Footer from '../components/Footer';

export default function DryerVentRepairPage() {
  const processSteps = [
    {
      number: '1',
      title: 'System Diagnosis',
      description: 'We inspect the dryer vent system to identify disconnections, crushed sections, airflow restrictions, and code violations.'
    },
    {
      number: '2',
      title: 'Targeted Repair',
      description: 'Damaged, disconnected, or improperly installed vent sections are repaired or replaced using approved metal components.'
    },
    {
      number: '3',
      title: 'Airflow & Safety Verification',
      description: 'We test airflow after repairs and confirm the system operates safely and efficiently.'
    },
    {
      number: '4',
      title: 'Final Safety Check',
      description: 'We verify proper routing, clear exhaust, and compliance with safety standards to prevent future issues.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <DryerVentRepairHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection
        steps={processSteps}
        headline="Our Professional Dryer Vent Repair Process"
      />

      <DryerVentRepairReason />

      <DryerVentRepairActionSection />

      <Footer />
    </div>
  );
}
