export default function BackgroundVideo() {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="overlay">
        <img
          src="/images/videotxt.png"
          alt="video text"
          className="video-text"
        />
      </div>

      <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          height: 100vh; /* Default desktop full height */
          overflow: hidden;
        }

        video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          padding: 0 1rem;
          color: white;
        }

        .video-text {
          max-width: 100%;
          height: auto;
          width: 16rem; /* Mobile size */
        }

        /* Mobile: Reduce video height */
        @media (max-width: 767px) {
          .video-container {
            height: 40vh;
          }

          video {
            height: 40vh;
          }

          .overlay {
            height: 40vh;
          }
        }

        /* Desktop: Bigger text for taller video */
        @media (min-width: 768px) {
          .video-text {
            width: auto;
            height: 23rem; /* Restore large height */
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
}
