'use client'

import { useEffect, useRef } from 'react'
import Atropos from 'atropos'
import 'atropos/css'

const EventGallery3D = () => {
  const mainImageRef = useRef(null)
  const gridImageRefs = useRef([])
  
  useEffect(() => {
    const atroposInstances = []
    
    // Initialize main image 3D effect
    if (mainImageRef.current) {
      const mainAtropos = Atropos({
        el: mainImageRef.current,
        activeOffset: 40,
        shadowScale: 1.1,
        shadowOffset: 50,
        duration: 300,
        rotate: true,
        rotateXMax: 12,
        rotateYMax: 12
      })
      atroposInstances.push(mainAtropos)
    }
    
    // Initialize each grid image 3D effect
    gridImageRefs.current.forEach((ref, index) => {
      if (ref) {
        const gridAtropos = Atropos({
          el: ref,
          activeOffset: 30,
          shadowScale: 1.15,
          shadowOffset: 40,
          duration: 250,
          rotate: true,
          rotateXMax: 15,
          rotateYMax: 15,
          onEnter() {
            console.log(`Grid image ${index + 1} entered`)
          }
        })
        atroposInstances.push(gridAtropos)
      }
    })
    
    // Cleanup all instances on unmount
    return () => {
      atroposInstances.forEach(instance => {
        if (instance) {
          instance.destroy()
        }
      })
    }
  }, [])

  const eventImages = ['1event.png', '2event.png', '3event.png', '4event.png']

  return (
    <section id="whats-on">
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      alignItems: 'stretch'
    }}>
      {/* Left Column - Main Image with 3D */}
      <div 
        ref={mainImageRef}
        className="atropos main-image-3d"
        style={{
          width: '100%',
          height: 'auto'
        }}
      >
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner">
              <div 
                data-atropos-offset="0"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRadius: '8px'
                }}
              >
                <img
                  data-atropos-offset="3"
                  src="/images/events.jpg"
                  alt="Main Event"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              {/* Background depth element */}
              <div 
                data-atropos-offset="-3"
                style={{
                  position: 'absolute',
                  top: '2%',
                  left: '2%',
                  width: '96%',
                  height: '96%',
                  background: 'rgba(0,0,0,0.1)',
                  borderRadius: '10px',
                  zIndex: -1
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Grid of 4 individual 3D images */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
      }}>
        {eventImages.map((img, idx) => (
          <div
            key={idx}
            ref={el => gridImageRefs.current[idx] = el}
            className={`atropos grid-image-3d-${idx}`}
            style={{
              width: '100%',
              aspectRatio: '1 / 1.25'
            }}
          >
            <div className="atropos-scale">
              <div className="atropos-rotate">
                <div className="atropos-inner">
                  <div 
                    data-atropos-offset="0"
                    style={{
                      backgroundColor: '#4B5563',
                      overflow: 'hidden',
                      aspectRatio: '1 / 1.25',
                      borderRadius: '6px'
                    }}
                  >
                    <img
                      data-atropos-offset="4"
                      src={`/images/${img}`}
                      alt={`Event ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  
                  {/* Individual background depth element */}
                  <div 
                    data-atropos-offset="-2"
                    style={{
                      position: 'absolute',
                      top: '3%',
                      left: '3%',
                      width: '94%',
                      height: '94%',
                      background: 'rgba(0,0,0,0.15)',
                      borderRadius: '8px',
                      zIndex: -1
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default EventGallery3D