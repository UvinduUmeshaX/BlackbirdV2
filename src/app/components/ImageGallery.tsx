"use client";
import React from "react";

const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.png",
    "/images/image9.jpg",
    "/images/image10.jpg",
    "/images/image11.jpg",
    "/images/image12.jpg",
    "/images/image13.jpg",
    "/images/image14.jpg",
    "/images/image15.jpg",
    "/images/image16.jpg",
    "/images/image17.jpg",
    "/images/image18.jpg",
    "/images/image19.jpg",
    "/images/image20.jpg",
    "/images/image21.jpg",
    "/images/image22.jpg",
    "/images/image23.jpg",
    "/images/image24.jpg",
    "/images/image25.jpg",
];

export default function ImageGallery() {
  return (
    <div className="w-full overflow-hidden py-6 ">
      <div className="relative">
        <div className="marquee">
          {/* first group */}
          <div className="marquee__group flex gap-4">
            {images.map((src, i) => (
              <div key={`a-${i}`} className="flex-shrink-0" style={{ minWidth: 320 }}>
                <img
                  src={src}
                  alt={`image${i + 1}`}
                  style={{
                    width: "350px",
                    height: "400px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>

          {/* duplicate group for seamless loop */}
          <div className="marquee__group flex gap-4" aria-hidden="true">
            {images.map((src, i) => (
              <div key={`b-${i}`} className="flex-shrink-0" style={{ minWidth: 320 }}>
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "320px",
                    height: "400px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          /* slower = larger duration (seconds) */
          animation: marquee 50s linear infinite;
          will-change: transform;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        .marquee__group {
          display: flex;
          gap: 2rem;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* small responsive tweak */
        @media (max-width: 640px) {
          .marquee__group img {
            width: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </div>
  );
}
