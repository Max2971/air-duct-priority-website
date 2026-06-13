import Header from '../components/Header';
import Footer from '../components/Footer';
import GalleryHero from '../components/sections/gallery/GalleryHero';
import GalleryContext from '../components/sections/gallery/GalleryContext';
import GalleryBefore from '../components/sections/gallery/GalleryBefore';
import GalleryAfter from '../components/sections/gallery/GalleryAfter';
import GallerySafety from '../components/sections/gallery/GallerySafety';
import GalleryAction from '../components/sections/gallery/GalleryAction';

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <GalleryHero />

      <GalleryContext />

      <GalleryBefore />

      <GalleryAfter />

      <GallerySafety />

      <GalleryAction />

      <Footer />
    </div>
  );
}
