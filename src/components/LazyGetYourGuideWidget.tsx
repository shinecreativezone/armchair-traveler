import React, { useEffect, useRef, useState } from 'react';

interface LazyGetYourGuideWidgetProps {
  className?: string;
}

/**
 * A component that lazy loads the GetYourGuide widget only when it becomes visible in the viewport
 */
const LazyGetYourGuideWidget: React.FC<LazyGetYourGuideWidgetProps> = ({ className = "" }) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Skip if SSR or the widget is already visible
    if (typeof window === 'undefined' || !widgetRef.current || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the widget is visible
    );

    observer.observe(widgetRef.current);

    return () => {
      if (widgetRef.current) {
        observer.unobserve(widgetRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className={`mt-6 ${className}`} ref={widgetRef}>
      {isVisible ? (
        <div data-gyg-widget="auto" data-gyg-partner-id="DHU8TI0"></div>
      ) : (
        <div className="h-20 bg-gray-100 animate-pulse rounded-md flex items-center justify-center">
          <span className="text-gray-400 text-sm">Travel recommendations loading...</span>
        </div>
      )}
    </div>
  );
};

export default LazyGetYourGuideWidget; 