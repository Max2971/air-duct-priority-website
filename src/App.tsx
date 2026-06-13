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
      </Routes>
    </>
  );
}

export default App;
