"use client";
import { useState } from 'react';
import HeroSection from "./components/HeroSection";
import Navsection from './components/nav';
import ImageGallery from './components/ImageGallery';
import EventSection from './components/EventSection';
import MusicSection from './components/MusicEvent';
import BackgroundVideo from './components/BackgroundVideo';
import PaintingEffect from './components/PaintingEffect';
import Contact from './components/contact';
import Reservation from './components/Researvation';
import Footer from './components/footer';
import MenuSection from './components/MenuSection';
import MobText from './components/MobText';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    
    <div>
      <Navsection />
      <PaintingEffect>
      <HeroSection />
      </PaintingEffect>
      <MusicSection />
      <EventSection/>
      <MenuSection />
      <BackgroundVideo />
      <MobText />
      <Contact/>
      {/* Image Gallery Section */}
      <div className="gallery-wrapper" style={{ padding: '20px', backgroundColor: 'black' }}>
      <ImageGallery />
      </div>
      <Reservation />
      <Footer />

    </div>

    
  );
}

