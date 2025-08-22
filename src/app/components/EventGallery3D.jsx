"use client";

import { useEffect, useRef } from "react";
import Atropos from "atropos";
import "atropos/css";

const EventGallery3D = () => {
  const mainImageRef = useRef(null);
  const gridImageRefs = useRef([]);

  useEffect(() => {
    const atroposInstances = [];

    if (mainImageRef.current) {
      const mainAtropos = Atropos({
        el: mainImageRef.current,
        activeOffset: 40,
        shadowScale: 1.1,
        shadowOffset: 50,
        duration: 300,
        rotate: true,
        rotateXMax: 12,
        rotateYMax: 12,
      });
      atroposInstances.push(mainAtropos);
    }

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
            console.log(`Grid image ${index + 1} entered`);
          },
        });
        atroposInstances.push(gridAtropos);
      }
    });

    return () => {
      atroposInstances.forEach((instance) => {
        if (instance) instance.destroy();
      });
    };
  }, []);

  const eventImages = ["1event.png", "2event.png", "3event.png", "4event.png"];

  return (
    <section id="whats-on" className="px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left Column - Main Image */}
        <div
          ref={mainImageRef}
          className="atropos main-image-3d w-full h-auto"
        >
          <div className="atropos-scale">
            <div className="atropos-rotate">
              <div className="atropos-inner relative">
                <div
                  data-atropos-offset="0"
                  className="flex items-center justify-center overflow-hidden rounded-lg"
                >
                  <img
                    data-atropos-offset="3"
                    src="/images/events.jpg"
                    alt="Main Event"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Background depth element */}
                <div
                  data-atropos-offset="-3"
                  className="absolute top-[2%] left-[2%] w-[96%] h-[96%] bg-black/10 rounded-lg -z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Grid of 4 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {eventImages.map((img, idx) => (
            <div
              key={idx}
              ref={el => (gridImageRefs.current[idx] = el)}
              className="atropos w-full aspect-[1/1.25] scale-90 sm:scale-100"
               
            >
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner relative">
                    <div
                      data-atropos-offset="0"
                      className="bg-gray-600 overflow-hidden aspect-[1/1.25] rounded-md"
                    >
                      <img
                        data-atropos-offset="4"
                        src={`/images/${img}`}
                        alt={`Event ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Background depth element */}
                    <div
                      data-atropos-offset="-2"
                      className="absolute top-[3%] left-[3%] w-[94%] h-[94%] bg-black/15 rounded-md -z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery3D;
