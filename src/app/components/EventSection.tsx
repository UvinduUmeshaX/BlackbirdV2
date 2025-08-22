import React from 'react';
import EventGallery3D from './EventGallery3D';
import AnimatedButton from './AnimatedButton';

export default function EventSection() {
  return (
<section style={{ padding: '4rem 1.5rem', backgroundColor: '#111827', backgroundImage: `url('/images/eventimg.png')`, backgroundSize: 'cover',
    backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.4rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'white',
            fontFamily: 'BL-Melody, serif'
          }}>
            Events
          </h2>

          {/* Two-column grid layout */}
          <EventGallery3D />
        </div>
      
          
      </section>
  );
}