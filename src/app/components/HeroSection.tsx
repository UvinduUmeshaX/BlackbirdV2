import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Existing H1 animation
      gsap.to(".hero-h1", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // New scroll animation for duplicates
      gsap.to(".hero-img-duplicate", {
        y: -200, // move upwards
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".hero-img-wrapper",
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="hero text-center min-h-screen bg-black text-white flex flex-col items-center justify-center -mt-4 md:mt-20 lg:mt-20"
    >
      <h1 className="hero-h1 mt-0 md:mt-32 lg:mt-55 text-5xl md:text-8xl lg:text-[12rem] font-bold opacity-0 translate-y-20 font-['BL-Melody'] mb-0 transition-all duration-700">
        BLACKBIRD
      </h1>
      <p className="hero-p text-[1.2rem] md:text-3xl lg:text-[3rem] font-['Lora-Regular'] tracking-widest leading-snug">
        Live Music Bar & Restaurant
      </p>

      {/* Wrapper for hero image + duplicates */}
      <div className="hero-img-wrapper relative mx-auto w-full mt-20">
        {/* Original Image */}
        <img
          className="hero-img relative z-10 mx-auto w-full"
          src="/images/hero.png"
          alt="Blackbird Hero Image"
        />

        {/* Duplicates */}
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            className="hero-img-duplicate absolute top-0 left-0 w-full"
            src="/images/hero.png"
            alt={`duplicate-${i}`}
            style={{
              zIndex: 0,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
        }
      `}</style>
    </section>
  );
}
