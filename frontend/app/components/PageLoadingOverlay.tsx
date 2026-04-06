import { useEffect, useRef, useState } from "react";

/**
 * PageLoadingOverlay — Logo reveal animation on initial page load
 * Only shows on first render (page load), not on route navigation
 */
export function PageLoadingOverlay() {
  const [showContent, setShowContent] = useState(false);
  const isInitialRenderRef = useRef(true);

  useEffect(() => {
    // Only run on initial page load, not on route navigation
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false;

      // Trigger animation after a small delay
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  // Inline SVG: Top piece
  const LogoTop = () => (
    <svg
      width="99"
      height="88"
      viewBox="0 0 99 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-32 w-32"
    >
      <path
        d="M31.77 0L0 31.7L66.6397 31.69L66.5997 87.22L98.4497 55.45V0H31.77Z"
        fill="#3AA8C1"
      />
    </svg>
  );

  // Inline SVG: Bottom piece
  const LogoBottom = () => (
    <svg
      width="99"
      height="88"
      viewBox="0 0 99 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-32 w-32"
    >
      <path
        d="M66.5701 87.31L98.4401 55.51L31.76 55.56L31.78 0L0.0500488 31.74L0 87.3L66.5701 87.31Z"
        fill="#3AA8C1"
      />
    </svg>
  );

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-500 ease-out ${
        showContent ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Top logo piece */}
      <div
        className="absolute transition-transform duration-500"
        style={{
          transform: `translate(${showContent ? "200%" : "50px"}, ${
            showContent ? "-200%" : "-50px"
          })`,
        }}
      >
        <LogoTop />
      </div>

      {/* Bottom logo piece */}
      <div
        className="absolute transition-transform duration-500"
        style={{
          transform: `translate(${showContent ? "-200%" : "-25px"}, ${
            showContent ? "200%" : "25px"
          })`,
        }}
      >
        <LogoBottom />
      </div>
    </div>
  );
}
