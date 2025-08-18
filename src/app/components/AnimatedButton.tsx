"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

type AnimatedButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string; // new optional href prop
};

export default function AnimatedButton({ children, onClick, href }: AnimatedButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // GSAP hover animation
  useEffect(() => {
    if (!btnRef.current) return;

    const ctx = gsap.context(() => {
      const btn = btnRef.current;

      btn?.addEventListener("mouseenter", () => {
        gsap.to(btn, { backgroundColor: "#ffffff", color: "#000000", duration: 0.4 });
      });

      btn?.addEventListener("mouseleave", () => {
        gsap.to(btn, { backgroundColor: "#000000", color: "#ffffff", duration: 0.4 });
      });
    }, btnRef);

    return () => ctx.revert();
  }, []);

  // handle click
  const handleClick = () => {
    if (onClick) {
      onClick(); // preserve existing onClick functionality
    } else if (href) {
      if (href.startsWith("#")) {
        // scroll to section
        const section = document.getElementById(href.slice(1));
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else if (href.startsWith("http")) {
        // external link
        window.open(href, "_blank");
      } else {
        // internal page navigation
        window.location.href = href;
      }
    }
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className="relative px-10 py-3 border border-white border-2 bg-black text-white overflow-hidden font-['Lora-Regular'] my-6"
    >
      {children}
    </button>
  );
}
