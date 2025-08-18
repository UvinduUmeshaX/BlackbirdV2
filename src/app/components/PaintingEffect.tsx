'use client';

import { useEffect, useRef } from 'react';

interface PaintingEffectProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  soundSrc?: string;
}

const ICONS = ['♪', '♫', '♬', '♩', '🎵', '🎶'];

export default function PaintingEffect({
  children,
  size = 24,
  color = '#FFFFFF',
  soundSrc = '/sounds/hover1.mp3' // default sound file
}: PaintingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load sound on mount
  useEffect(() => {
    audioRef.current = new Audio(soundSrc);
    audioRef.current.volume = 0.4;
  }, [soundSrc]);

  const createIconParticle = (x: number, y: number) => {
    const particle = document.createElement('div');
    const icon = ICONS[Math.floor(Math.random() * ICONS.length)];

    particle.textContent = icon;
    particle.style.position = 'fixed';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.fontSize = `${size}px`;
    particle.style.color = color;
    particle.style.opacity = '0.9';
    particle.style.userSelect = 'none';
    particle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    particle.style.willChange = 'opacity, transform';

    particle.style.filter = 'brightness(0) saturate(100%) invert(100%)';

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      const moveX = (Math.random() - 0.5) * 30;
      const moveY = -20 - Math.random() * 20;
      particle.style.opacity = '0';
      particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.2)`;
    });

    setTimeout(() => {
      if (particle.parentNode) particle.parentNode.removeChild(particle);
    }, 1000);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.4) return;

      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;

      createIconParticle(e.clientX + offsetX, e.clientY + offsetY);

      // Play sound
      if (audioRef.current) {
        const audio = audioRef.current.cloneNode() as HTMLAudioElement;
        audio.play().catch(() => {}); // Avoid unhandled promise errors
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [size, color]);

  return <div ref={containerRef} style={{ position: 'relative' }}>{children}</div>;
}
