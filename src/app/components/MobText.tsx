"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MobText() {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const [first, second] = textRef.current.querySelectorAll("h2");

    // First heading moves left while scrolling
    gsap.to(first, {
      x: "-20%", // adjust distance as needed
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Second heading moves right while scrolling
    gsap.to(second, {
      x: "20%", // adjust distance as needed
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={textRef}
      className="block md:hidden text-white text-[2rem] text-center bg-transparent -mt-20 mb-4  font-['BL-Melody'] "
    >
      <h2 className="font-bold leading-tight">Enjoy Live Music</h2>
      <h2 className="font-bold leading-tight">Taste Food & Drink</h2>
    </div>
  );
}
