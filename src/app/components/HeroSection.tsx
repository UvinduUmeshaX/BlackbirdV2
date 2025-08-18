import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(".hero-h1", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="hero text-center min-h-screen bg-black text-white flex flex-col items-center justify-center mt-20"
    >
      <h1 className="hero-h1 mt-32 text-6xl md:text-8xl lg:text-[12rem] font-bold opacity-0 translate-y-20 font-['BL-Melody'] mb-0  transition-all duration-700 ">
        BLACKBIRD
      </h1>
      <p className="hero-p text-2xl md:text-3xl lg:text-[3rem]  font-['Lora-Regular'] tracking-widest leading-snug">
        Live Music Bar & Restaurant
      </p>
      <img
        className="hero-img mx-auto w-full mt-20"
        src="/images/hero.png"
        alt="Blackbird Hero Image"
      />

    </section>
  );
}
