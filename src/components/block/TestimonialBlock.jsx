import { useWindowWidth } from "../../hooks";
import { TESTIMONIALS } from "../../constants";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialBlock({ testimonials = TESTIMONIALS }) {
  const w   = useWindowWidth();
  const mob = w < 640;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: mob ? "1fr" : "repeat(2,1fr)",
        gap: 18,
      }}
    >
      {testimonials.map(t => (
        <TestimonialCard
          key={t.name}
          quote={t.quote}
          name={t.name}
          role={t.role}
          init={t.init}
        />
      ))}
    </div>
  );
}
