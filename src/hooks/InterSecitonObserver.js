import { useEffect, useRef, useState } from "react";

function useIntersectionObserver(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observe) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      if (!entry.isIntersecting) return;
      observe.unobserve(entry.target);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
}

export { useIntersectionObserver };
