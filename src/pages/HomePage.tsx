import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import TrustSectionHome from '../components/sections/TrustSectionHome';
import ReasonSectionHome from '../components/sections/ReasonSectionHome';
import HumanSection from '../components/sections/HumanSection';
import ProofSection from '../components/sections/ProofSection';
import ActionSection from '../components/sections/ActionSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection />

      <TrustSectionHome />

      <ReasonSectionHome />

      <HumanSection />

      <ProofSection />

      <ActionSection />

      <Footer />
    </div>
  );
}
