import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import TrustSectionHome from '../components/sections/TrustSectionHome';
import ReasonSectionHome from '../components/sections/ReasonSectionHome';
import HumanSection from '../components/sections/HumanSection';
import ProofSection from '../components/sections/ProofSection';
import ActionSection from '../components/sections/ActionSection';
import Footer from '../components/Footer';
import HomeTrustBar from '../components/sections/HomeTrustBar';
import HomeServicesSection from '../components/sections/HomeServicesSection';
import InspectionProofSection from '../components/sections/InspectionProofSection';
import HomeFaqSection from '../components/sections/HomeFaqSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection />

      <HomeTrustBar />

      <ReasonSectionHome />

      <HomeServicesSection />

      <InspectionProofSection />

      <TrustSectionHome />

      <HumanSection />

      <ProofSection />

      <HomeFaqSection />

      <ActionSection />

      <Footer />
    </div>
  );
}
