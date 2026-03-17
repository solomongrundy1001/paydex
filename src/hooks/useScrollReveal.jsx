import { useEffect } from "react";

export default function useScrollReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );

    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref]);
}