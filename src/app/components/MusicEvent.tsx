"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MusicSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const vinylRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  const setImageRef = (el: HTMLDivElement | null, index: number) => {
    if (el) imageRefs.current[index] = el;
  };

  // Predefined sizes and positions for 7 images
  const floatingImages = [
    { src: "/images/image1.jpg", width: 180, height: 200, top: "10%", left: "5%" },
    { src: "/images/image2.jpg", width: 220, height: 180, top: "15%", left: "75%" },
    { src: "/images/image3.jpg", width: 160, height: 210, top: "70%", left: "20%" },
    { src: "/images/image4.jpg", width: 200, height: 190, top: "65%", left: "80%" },
    { src: "/images/image5.jpg", width: 190, height: 180, top: "25%", left: "35%" },
    { src: "/images/image6.jpg", width: 210, height: 220, top: "55%", left: "10%" },
    { src: "/images/image7.png", width: 170, height: 200, top: "45%", left: "85%" },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Heading animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Paragraph animation
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Vinyl rotation
    if (vinylRef.current) {
      gsap.to(vinylRef.current, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // Animate floating images along X-axis only
    imageRefs.current.forEach((img) => {
      if (!img) return;

      gsap.to(img, {
        x: () => (Math.random() - 0.5) * 200, // horizontal drift
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black h-screen px-6 flex flex-col items-center overflow-hidden mt-0"
    >
      {/* Foreground Text at the top */}
      <div className="relative z-20 w-full text-center mt-0 md:mt-12 lg:mt-12">
        <h2
          ref={headingRef}
          className="text-white text-[2rem] md:text-6xl font-serif mb-3 font-['BL-Melody'] mt-4 md:mt-16 lg:mt-16"
        >
          “Where the music never stops and<br/>the glasses never empty.”
        </h2>
        <p
          ref={paragraphRef}
          className="text-white text-xl md:text-2xl font-serif font-lora"
        >
          Eat. Drink. Groove. Repeat.
        </p>
      </div>

      {/* Floating Images Behind Vinyl */}
      {floatingImages.map((imgData, index) => (
        <div
          key={index}
          ref={(el) => setImageRef(el, index)}
          className="absolute bg-cover bg-center"
          style={{
            width: `${imgData.width}px`,
            height: `${imgData.height}px`,
            top: imgData.top,
            left: imgData.left,
            zIndex: 0,
            backgroundImage: `url(${imgData.src})`,
          }}
        />
      ))}

      {/* Vinyl Center */}
      <div
        ref={vinylRef}
        className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-center bg-no-repeat bg-contain z-10"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundImage: "url('/images/vinyl.png')",
        }}
      />
    </section>
  );
}
