import { useState } from 'react';
import AnimatedButton from './AnimatedButton';

export default function Navsection() {
   
      const [isMenuOpen, setIsMenuOpen] = useState(false);

     return (
    <div style={{backgroundColor: 'black', color: 'white'}}>
     <nav className="bb-nav" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2.5rem 2.25rem 1.5rem 2.25rem', fontFamily: 'Lora, serif'}}>
        {/* Logo - Left */}

          <img
            className="logo-img"
            src="/images/logo.png"
            alt="Blackbird Logo"
            style={{ height: '7rem', width: 'auto' }}
          />
          
        {/* Menu Links - Center */}
        <div className="desktop-nav-links" style={{display: 'flex', alignItems: 'center', gap: '5rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
          <a href="#info" style={{color: 'white', fontSize: '1.5rem'}}>Info</a>
          <a href="#whats-on" style={{color: 'white', fontSize: '1.5rem'}}>What's on</a>
          <a href="#menu" style={{color: 'white', fontSize: '1.5rem'}}>Menu</a>
          <a href="#contact" style={{color: 'white', fontSize: '1.5rem'}}>Contact</a>
        </div>
        
        {/* Button - Right */}
        <div className="nav-cta" style={{display: 'flex', alignItems: 'center'}}>
          <AnimatedButton href="https://www.google.com/maps/reserve/v/dine/c/p_NJo1ovpZ4?source=pa&opi=89978449&hl=si-LK&gei=4uuiaMKXBtG4seMPjr-0wAc&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dblackbird%2Bsg%26oq%3Dblackbird%2Bsg%26gs_lcrp%3DEgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIMCAEQIxgnGIAEGIoFMgoIAhAAGLEDGIAEMgoIAxAAGLEDGIAEMgoIBBAuGLEDGIAEMgoIBRAAGLEDGIAEMgYIBhBFGDwyBggHEEUYPNIBCDM2MjRqMGo3qAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1">
          Book A Table</AnimatedButton>
        </div> 
        {/* Hamburger - Mobile */}
        <button aria-label="Open menu" className="hamburger" onClick={() => setIsMenuOpen(true)}>☰</button>
      </nav>
      {isMenuOpen && (
        <div className="mobile-menu">
          <button aria-label="Close menu" className="close-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
          <a href="#info" onClick={() => setIsMenuOpen(false)}>Info</a>
          <a href="#whats-on" onClick={() => setIsMenuOpen(false)}>What's on</a>
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="mobile-cta" onClick={() => setIsMenuOpen(false)}>Book A Table</button>
        </div>
      )}      
     <style jsx>{`
     .bb-nav { margin-left: 130px; margin-right: 130px; position: relative; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; }
        .logo-img { display: block; height: 7rem; width: auto; }
        .hamburger { display: none; background: transparent; color: white; border: 1px solid white; padding: 0.25rem 0.5rem; font-size: 1.5rem; }
        .mobile-menu { position: fixed; top: 0; left: 0; right: 0; background: black; padding: 1rem 1rem 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center; z-index: 1000; border-bottom: 1px solid #333; }
        .mobile-menu a { color: white; font-size: 1.25rem; }
        .mobile-cta { padding: 0.5rem 1.5rem; border: 2px solid white; background: transparent; color: white; font-family: Lora, serif; }
        .close-btn { align-self: flex-end; background: transparent; color: white; border: 1px solid white; padding: 0.25rem 0.5rem; font-size: 1.25rem; }
      @media (max-width: 1400px) {
          .desktop-nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: block; }
        }

        @media (max-width: 1024px)
         { .bb-nav { margin-left: 60px; margin-right: 60px; } }

         @media (max-width: 768px) {
          .bb-nav { margin-left: 0; margin-right: 0; padding: 1.5rem 1rem; flex-direction: row; gap: 0; justify-content: space-between; align-items: center; }
          .desktop-nav-links { display: none !important; }
          .hamburger { display: block; align-self: auto; }
          .logo-img { height: 6.5rem !important; }

     `}
     
     </style>
     </div>
     



     );

    


}