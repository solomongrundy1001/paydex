import { useEffect } from "react";
import gsap from "gsap";

export default function useGsap(ref, animation) {
  useEffect(() => {
    if (!ref.current) return;
    animation(gsap, ref.current);
  }, [ref, animation]);
}