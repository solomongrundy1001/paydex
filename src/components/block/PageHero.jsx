import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";
import { useGSAP, useWindowWidth } from "../../hooks";
import Btn from "../ui/Btn.jsx";

export default function PageHero({ tag, title, subtitle, cta, ctaTo = "/request-access", bg }) {
  const { dark } = useTheme();
  const ref  = useRef(null);
  const gsap = useGSAP();
  const mob  = useWindowWidth() < 640;

  useEffect(() => {
    if (!gsap || !ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll("[data-h]"),
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power3.out", delay: 0.05 }
    );
  }, [gsap]);

  // If ctaTo starts with # treat it as an anchor smooth scroll
  // otherwise pass it to Btn which uses React Router navigate
  const isAnchor = ctaTo?.startsWith("#");

  const handleAnchorClick = e => {
    e.preventDefault();
    document.querySelector(ctaTo)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      style={{
        padding: `${mob ? 100 : 140}px 1.5rem 80px`,
        background:
          bg ||
          (dark
            ? "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(13,148,136,.22) 0%, transparent 65%)"
            : "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(13,148,136,.1) 0%, transparent 65%)"),
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(${C.teal}22,transparent 70%)`, top: -80, left: "5%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(${C.dark}33,transparent 70%)`, bottom: -40, right: "8%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 780, margin: "0 auto", position: "relative" }}>
        {tag && (
          <div
            data-h
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 999, fontSize: 12, fontWeight: 600, color: C.teal, background: dark ? "rgba(13,148,136,.12)" : "rgba(13,148,136,.08)", border: `1px solid ${dark ? "rgba(13,148,136,.3)" : "rgba(13,148,136,.2)"}`, marginBottom: 24 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.teal }} />
            {tag}
          </div>
        )}

        <h1
          data-h
          style={{ fontSize: mob ? "clamp(2rem,8vw,2.6rem)" : "clamp(2.8rem,5vw,4.2rem)", fontWeight: 900, lineHeight: 1.1, color: dark ? C.white : C.black, marginBottom: 20, letterSpacing: "-1.2px" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            data-h
            style={{ fontSize: mob ? 15 : 18, color: dark ? "#99F6E4" : C.tealD, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 32px" }}
          >
            {subtitle}
          </p>
        )}

        {cta && (
          <div data-h>
            {isAnchor ? (
              <a
                href={ctaTo}
                onClick={handleAnchorClick}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "13px 28px", borderRadius: 11, fontWeight: 700, fontSize: 15,
                  background: `linear-gradient(135deg,${C.teal},${C.dark})`,
                  color: "#fff", textDecoration: "none", cursor: "pointer",
                  transition: "opacity .18s, transform .18s",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = ".85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1";   e.currentTarget.style.transform = "none"; }}
              >
                {cta} <ArrowRight size={16} />
              </a>
            ) : (
              <Btn to={ctaTo}>
                {cta} <ArrowRight size={16} />
              </Btn>
            )}
          </div>
        )}
      </div>
    </section>
  );
}