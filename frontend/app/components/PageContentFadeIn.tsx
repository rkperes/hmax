import { useEffect, useRef, useState } from "react";

interface PageContentFadeInProps {
  children: React.ReactNode;
}

/**
 * PageContentFadeIn — Fades in page content as loading overlay animates
 * Only animates on initial page load, not on route navigation
 */
export function PageContentFadeIn({ children }: PageContentFadeInProps) {
  const [showContent, setShowContent] = useState(false);
  const isInitialRenderRef = useRef(true);

  useEffect(() => {
    // Only run on initial page load, not on route navigation
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false;

      // Trigger fade-in after a small delay (synced with overlay)
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      className={`transition-opacity duration-350 ease-hero ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transitionDelay: showContent ? "150ms" : "0ms",
      }}
    >
      {children}
    </div>
  );
}
