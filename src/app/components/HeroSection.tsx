import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  // Animate H1
  useGSAP(() => {
    gsap.to(".hero-h1", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, { scope: heroRef });

  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;
    const rect = hero.getBoundingClientRect();
    const particleCount = 300; // total particles

    // Create particle divs
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.position = "absolute";
      particle.style.pointerEvents = "none";

      // Responsive size
      const size = window.innerWidth < 768 ? Math.random() * 3 + 1 : Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.borderRadius = "50%";
      particle.style.background = "white";

      // Position randomly within hero
      particle.style.top = `${rect.top + window.scrollY + Math.random() * rect.height}px`;
      particle.style.left = `${rect.left + window.scrollX + Math.random() * rect.width}px`;

      document.body.appendChild(particle);
      particlesRef.current.push(particle);
    }

    // Faster animation with bigger movement
    gsap.to(particlesRef.current, {
      y: () => Math.random() * -400 - 150, // higher vertical spread
      x: () => Math.random() * 400 - 200,  // wider horizontal spread
      opacity: 0,
      scale: 0,
      rotation: () => Math.random() * 360,
      stagger: 0.008, // faster stagger
      duration: 1.2,  // faster animation
      ease: "power3.out",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      onComplete: () => {
        particlesRef.current.forEach((p) => p.remove());
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero text-center min-h-screen bg-black text-white flex flex-col items-center justify-center -mt-4 md:mt-20 lg:mt-20 relative overflow-hidden"
    >
      <h1 className="hero-h1 mt-0 md:mt-32 lg:mt-55 text-5xl md:text-8xl lg:text-[12rem] font-bold opacity-0 translate-y-20 font-['BL-Melody'] mb-0 transition-all duration-700">
        BLACKBIRD
      </h1>
      <p className="hero-p text-[1.2rem] md:text-3xl lg:text-[3rem] font-['Lora-Regular'] tracking-widest leading-snug">
        Live Music Bar & Restaurant
      </p>
      <img
        className="hero-img mx-auto w-full mt-20"
        src="/images/hero.png"
        alt="Blackbird Hero Image"
      />
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-img {
            width: 90%;
          }
        }
        .particle {
          z-index: 20;
        }
      `}</style>
    </section>
  );
}
