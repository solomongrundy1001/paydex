import { useRef } from "react";
import { useGSAP, useScrollReveal, useWindowWidth } from "../../hooks";
import FeatureCard from "./FeatureCard";

export default function FeatureGrid({ features }) {
  const ref  = useRef(null);
  const gsap = useGSAP();
  const w    = useWindowWidth();
  const mob  = w < 640;
  const tab  = w < 1024;

  useScrollReveal(
    gsap, ref,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, stagger: 0.08, duration: 0.65, ease: "power2.out" }
  );

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: mob ? "1fr" : tab ? "repeat(2,1fr)" : "repeat(3,1fr)",
        gap: 18,
      }}
    >
      {features.map(f => (
        <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
      ))}
    </div>
  );
}
