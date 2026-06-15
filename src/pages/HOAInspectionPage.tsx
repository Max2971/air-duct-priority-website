import Header from '../components/Header';
import HOAInspectionHero from '../components/sections/service/HOAInspectionHero';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import HOAInspectionReason from '../components/sections/service/HOAInspectionReason';
import ConversionCta from '../components/ConversionCta';
import Footer from '../components/Footer';

export default function HOAInspectionPage() {
  const processSteps = [
    {
      number: '1',
      title: 'Scheduled Inspection',
      description: 'We coordinate the inspection according to HOA requirements and property access guidelines.'
    },
    {
      number: '2',
      title: 'System Evaluation',
      description: 'We inspect the dryer vent system for lint buildup, airflow restrictions, damage, and code compliance.'
    },
    {
      number: '3',
      title: 'Airflow & Safety Assessment',
      description: 'We verify proper exhaust airflow and identify any conditions that may present a fire or safety risk.'
    },
    {
      number: '4',
      title: 'Certification & Documentation',
      description: 'We provide inspection confirmation and documentation required by the HOA or property management.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <HOAInspectionHero />

      <TrustSection variant="credentials" compact />

      <ProcessSection steps={processSteps} headline="Our HOA Dryer Vent Inspection Process" />

      <HOAInspectionReason />

      <ConversionCta title="Need Dryer Vent Inspection for an HOA or Property?" description="Contact Air Duct Priority to discuss the property, inspection scope, and documentation needs." onlineLabel="Request HOA Inspection" />

      <Footer />
    </div>
  );
}
