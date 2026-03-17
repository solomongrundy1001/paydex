import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

export function useGSAP() {
  const [gsap, setGsap] = useState(null);

  useEffect(() => {
    // Already loaded — defer with setTimeout so setState is never synchronous
    if (window.gsap) {
      const t = setTimeout(() => setGsap(window.gsap), 0);
      return () => clearTimeout(t);
    }

    // Script already injected by another instance — poll until available
    if (document.querySelector('script[src*="gsap"]')) {
      const poll = setInterval(() => {
        if (window.gsap) {
          setGsap(window.gsap);
          clearInterval(poll);
        }
      }, 50);
      return () => clearInterval(poll);
    }

    // First load — onload is always async, so setState here is safe
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    s.onload = () => setGsap(window.gsap);
    document.head.appendChild(s);
  }, []);

  return gsap;
}

export function useScrollReveal(gsap, ref, fromVars, toVars, deps = []) {
  useEffect(() => {
    if (!gsap || !ref.current) return;
    const el  = ref.current;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        gsap.fromTo(el.querySelectorAll("[data-anim]"), fromVars, toVars);
        obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line
  }, [gsap, ...deps]);
}