import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DryerVentCleaningPage from './pages/DryerVentCleaningPage';
import DryerVentRepairPage from './pages/DryerVentRepairPage';
import DryerVentInstallationPage from './pages/DryerVentInstallationPage';
import DryerVentReroutingPage from './pages/DryerVentReroutingPage';
import BirdGuardPage from './pages/BirdGuardPage';
import HOAInspectionPage from './pages/HOAInspectionPage';
import AirDuctCleaningPage from './pages/AirDuctCleaningPage';
import AirDuctInstallationPage from './pages/AirDuctInstallationPage';
import AirDuctRepairPage from './pages/AirDuctRepairPage';
import AirDuctSanitizingPage from './pages/AirDuctSanitizingPage';
import AirDuctConstructionCleaningPage from './pages/AirDuctConstructionCleaningPage';
import GalleryPage from './pages/GalleryPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import ScrollToTop from './components/ScrollToTop';
import Seo from './components/Seo';
import FreeInspectionPage from './pages/FreeInspectionPage';
import ReviewsPage from './pages/ReviewsPage';
import DoylestownPage from './pages/DoylestownPage'; import NewtownPage from './pages/NewtownPage'; import RichboroPage from './pages/RichboroPage'; import WarringtonPage from './pages/WarringtonPage';
import FlexibleDuctReplacementPage from './pages/FlexibleDuctReplacementPage';
import BirdNestRemovalPage from './pages/BirdNestRemovalPage';
import BathroomExhaustVentCleaningPage from './pages/BathroomExhaustVentCleaningPage';
import KitchenExhaustVentCleaningPage from './pages/KitchenExhaustVentCleaningPage';
import ExteriorVentCoverReplacementPage from './pages/ExteriorVentCoverReplacementPage';
import ResourcesPage from './pages/ResourcesPage';
import SignsDryerVentCloggedPage from './pages/SignsDryerVentCloggedPage';
import DryerVentServiceChoicePage from './pages/DryerVentServiceChoicePage';
import BirdNestExteriorVentPage from './pages/BirdNestExteriorVentPage';
import AirDuctCleaningPricingPage from './pages/AirDuctCleaningPricingPage';
import DryerVentCleaningFrequencyPage from './pages/DryerVentCleaningFrequencyPage';
import DryerVentRigidVsFlexPage from './pages/DryerVentRigidVsFlexPage';

function App() {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/service-area" element={<ServiceAreaPage />} />
        <Route path="/free-inspection" element={<FreeInspectionPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/signs-dryer-vent-clogged" element={<SignsDryerVentCloggedPage />} />
        <Route path="/resources/dryer-vent-cleaning-repair-or-replacement" element={<DryerVentServiceChoicePage />} />
        <Route path="/resources/bird-nest-in-exterior-vent" element={<BirdNestExteriorVentPage />} />
        <Route path="/resources/air-duct-cleaning-price-inspection" element={<AirDuctCleaningPricingPage />} />
        <Route path="/resources/how-often-clean-dryer-vent" element={<DryerVentCleaningFrequencyPage />} />
        <Route path="/resources/rigid-vs-flexible-dryer-vent" element={<DryerVentRigidVsFlexPage />} />
        <Route path="/doylestown-pa" element={<DoylestownPage />} /><Route path="/newtown-pa" element={<NewtownPage />} /><Route path="/richboro-pa" element={<RichboroPage />} /><Route path="/warrington-pa" element={<WarringtonPage />} />
        <Route path="/services/dryer-vent-cleaning" element={<DryerVentCleaningPage />} />
        <Route path="/services/dryer-vent-repair" element={<DryerVentRepairPage />} />
        <Route path="/services/dryer-vent-installation" element={<DryerVentInstallationPage />} />
        <Route path="/services/dryer-vent-rerouting" element={<DryerVentReroutingPage />} />
        <Route path="/services/bird-guard" element={<BirdGuardPage />} />
        <Route path="/services/hoa-inspection" element={<HOAInspectionPage />} />
        <Route path="/services/air-duct-cleaning" element={<AirDuctCleaningPage />} />
        <Route path="/services/air-duct-installation" element={<AirDuctInstallationPage />} />
        <Route path="/services/air-duct-repair" element={<AirDuctRepairPage />} />
        <Route path="/services/air-duct-sanitizing" element={<AirDuctSanitizingPage />} />
        <Route path="/services/air-duct-construction-cleaning" element={<AirDuctConstructionCleaningPage />} />
        <Route path="/services/flexible-duct-replacement" element={<FlexibleDuctReplacementPage />} />
        <Route path="/services/bird-nest-removal" element={<BirdNestRemovalPage />} />
        <Route path="/services/bathroom-exhaust-vent-cleaning" element={<BathroomExhaustVentCleaningPage />} />
        <Route path="/services/kitchen-exhaust-vent-cleaning" element={<KitchenExhaustVentCleaningPage />} />
        <Route path="/services/exterior-vent-cover-replacement" element={<ExteriorVentCoverReplacementPage />} />
      </Routes>
    </>
  );
}

export default App;
