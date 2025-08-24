import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import DuplicateImage from "./HeroIMG";

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
      className="hero text-center mt-0 md:mt-12 mb-12 md:mb-0 md:min-h-screen lg:min-h-screen bg-black  text-white flex flex-col items-center justify-center "
    >
      <h1 className="hero-h1 mt-20 md:mt-40 lg:mt-40 text-5xl md:text-8xl  lg:text-[12rem] font-bold opacity-0 translate-y-20 font-['BL-Melody']  transition-all duration-700 ">
        BLACKBIRD
      </h1>
      <p className="hero-p mb-12 md:mb-10 text-[1.2rem] md:text-3xl lg:text-[3rem]  font-['Lora-Regular']  tracking-widest leading-snug">
        Live Music Bar & Restaurant
      </p> 
      <DuplicateImage />
    </section>
  );
}
