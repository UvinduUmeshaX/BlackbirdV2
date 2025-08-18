"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

export default function MenuSection() {
 
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(sectionRef.current, {
        backgroundPositionY: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax for video + button wrappers
      const wrappers = gsap.utils.toArray<HTMLElement>(".video-wrapper");

      wrappers.forEach((wrapper, i) => {
        gsap.fromTo(
          wrapper,
          { y: i % 2 === 0 ? -80 : 80 }, // first up, second down
          {
            y: i % 2 === 0 ? 80 : -80,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative bg-black bg-cover bg-center text-white py-16 px-4"
      style={{ backgroundImage: "url('images/menu-bg.png')" , backgroundSize: "100%",backgroundRepeat: "no-repeat",backgroundPosition: "center", }}
    >
      <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '4rem', color: 'white', fontFamily: 'BL-Melody, serif', textAlign: "center", }}>Food & Drinks</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
        {/* Video 1 + Button */}
        <div className="video-wrapper flex flex-col items-center">
          <div className="menu-video w-2/3 aspect-[3/5] bg-gray-800  overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              src="videos/food.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        <AnimatedButton onClick={() => window.open("/files/Blackbird-Food-Menu-2025.pdf", "_blank")}>Food Menu</AnimatedButton>
        </div>

        {/* Video 2 + Button */}
        <div className="video-wrapper flex flex-col items-center translate-y-12 md:translate-y-20">
          <div className="menu-video w-2/3 aspect-[3/5] bg-gray-800  overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              src="videos/drink.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <AnimatedButton  onClick={() => window.open("/files/Blackbird-Drinks-Menu-2025.pdf", "_blank")}>Drink Menu</AnimatedButton>
        </div>
      </div>
    </section>
  );

}
