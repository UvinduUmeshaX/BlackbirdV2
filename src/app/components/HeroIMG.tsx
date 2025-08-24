"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DuplicateImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const imgs = containerRef.current.querySelectorAll("img");

      gsap.to(imgs, {
        y: (i) => i * -50, // each image moves differently (parallax depth)
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",   // when container enters viewport
          end: "bottom top",     // until it leaves viewport
          scrub: true,           // ties animation to scroll
        },
      });
    }
  }, []);

  const images = Array(6).fill("/images/hero.png");

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto mt-10 mb-10 md:mt-20 md:mb-20"
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="duplicate"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      ))}
      {/* Spacer for aspect ratio */}
      <div className="pt-[56.25%]"></div>
    </div>
  );
}
