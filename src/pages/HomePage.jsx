import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { C, STATS } from "../constants";
import { useGSAP, useWindowWidth } from "../hooks";
import { Layout } from "../components/layout";
import { PageSEO, SectionLabel, Btn, Section, CTABanner } from "../components/ui";
import { FeatureGrid, TestimonialBlock, FAQBlock } from "../components/block";

const SLIDES = [
  { tag: "MASS PAYOUTS",  title: "Disburse to thousands in seconds",           body: "Upload one file. Paydex routes every payment to the optimal rail automatically.", bg: "#0D9488" },
  { tag: "COMPLIANCE",    title: "Stay compliant across every jurisdiction",    body: "Built-in KYB, AML screening, and regulatory reporting so you move fast safely.", bg: "#065F46" },
  { tag: "INTEGRATIONS",  title: "Connect your entire finance stack",           body: "SAP, Oracle, Workday, NetSuite, and a REST API your developers will love.", bg: "#0F766E" },
];

export default function HomePage() {
  const { dark } = useTheme();
  const [slide, setSlide] = useState(0);
  const ref  = useRef(null);
  const gsap = useGSAP();
  const w    = useWindowWidth();
  const mob  = w < 640;
  const txt  = dark ? C.white : C.black;
  const sub  = dark ? "#99F6E4" : C.tealD;

  useEffect(() => { const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5000); return () => clearInterval(t); }, []);
  useEffect(() => {
    if (!gsap || !ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll("[data-hero]"), { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: .12, duration: .85, ease: "power3.out", delay: .1 });
  }, [gsap]);

  const s = SLIDES[slide];

  return (
    <Layout>

      <PageSEO
        title="Home"
        description="Paydex provides enterprise payout infrastructure for companies operating in the United States and Europe. Schedule payroll, vendor payments, and mass disbursements while Paydex handles processing, routing, and settlement."
        keywords="enterprise payouts, mass payments infrastructure, payroll disbursement platform, fintech infrastructure US Europe, vendor payment automation"
      />

      {/* Hero */}
      <section ref={ref} style={{ paddingTop: mob ? 100 : 140, paddingBottom: 80, padding: `${mob ? 100 : 140}px 1.5rem 80px`, textAlign: "center", position: "relative", overflow: "hidden",
        background: dark ? "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(13,148,136,.22) 0%, transparent 65%)" : "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(13,148,136,.1) 0%, transparent 65%)" }}>
        
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(${C.teal}22,transparent 70%)`, top: -80, left: "8%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(${C.dark}33,transparent 70%)`, bottom: -40, right: "8%", pointerEvents: "none" }} />

        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>

          <div data-hero style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 999, fontSize: 12, fontWeight: 600, color: C.teal, background: dark ? "rgba(13,148,136,.12)" : "rgba(13,148,136,.08)", border: `1px solid ${dark ? "rgba(13,148,136,.3)" : "rgba(13,148,136,.2)"}`, marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.teal, animation: "fpPulse 1.8s ease infinite" }} />
            Trusted by 3,400+ enterprises worldwide
          </div>

          <h1 data-hero style={{ fontSize: mob ? "clamp(2.2rem,9vw,2.8rem)" : "clamp(3rem,6vw,5rem)", fontWeight: 900, lineHeight: 1.08, color: txt, marginBottom: 24, letterSpacing: "-1.5px" }}>
            Payments that move<br />
            <span style={{ background: `linear-gradient(135deg,${C.teal},${C.tealL})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              at the speed of business
            </span>
          </h1>

          <p data-hero style={{ fontSize: mob ? 15 : 18, color: sub, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px" }}>
            Paydex provides enterprise payout infrastructure across the United States and Europe — built for companies that need reliable, large-scale payment operations.
          </p>

          <div data-hero style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Btn to="/request-access">Request Access <ArrowRight size={16} /></Btn>
            <Btn to="/login" variant="outline">Sign In</Btn>
          </div>

        </div>

        {/* Stats */}
        <div data-hero style={{ maxWidth: 900, margin: "64px auto 0", display: "grid", gridTemplateColumns: mob ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: mob ? 14 : 22 }}>
          {STATS.map(st => (
            <div key={st.label} style={{ padding: "20px 14px", borderRadius: 14, background: dark ? "rgba(13,148,136,.1)" : "rgba(13,148,136,.06)", border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}` }}>
              <p style={{ margin: 0, fontWeight: 900, fontSize: mob ? 22 : 28, color: C.teal }}>{st.value}</p>
              <p style={{ margin: "4px 0 0", fontSize: 12, color: sub }}>{st.label}</p>
            </div>
          ))}
        </div>

        <style>{`@keyframes fpPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.3)}}`}</style>
      </section>

      {/* Slides */}
      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <div style={{ borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: mob ? "column" : "row", minHeight: mob ? undefined : 340 }}>
          
          <div style={{ flex: 1, background: s.bg, padding: mob ? "2rem 1.5rem" : "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "background .5s" }}>
            <div>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "rgba(255,255,255,.65)", display: "block", marginBottom: 14 }}>{s.tag}</span>
              <h2 style={{ fontWeight: 900, fontSize: mob ? 22 : 34, color: "#fff", lineHeight: 1.2, marginBottom: 14 }}>{s.title}</h2>
              <p style={{ color: "rgba(255,255,255,.75)", fontSize: 15, lineHeight: 1.65 }}>{s.body}</p>
            </div>

            <button style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", borderRadius: 10, background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", width: "fit-content" }}>
              Learn More <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ width: mob ? "100%" : 240, background: dark ? "#042F2E" : "#fff", padding: "1.5rem", display: "flex", flexDirection: mob ? "row" : "column", justifyContent: "center", gap: 12, borderLeft: mob ? "none" : `1px solid ${dark ? "#0F766E" : "#CCFBF1"}`, borderTop: mob ? `1px solid ${dark ? "#0F766E" : "#CCFBF1"}` : "none" }}>
            {SLIDES.map((sl, i) => (
              <button key={i} onClick={() => setSlide(i)}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 12px", borderRadius: 11, border: "none", cursor: "pointer", background: slide === i ? (dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.1)") : "transparent", flex: mob ? 1 : undefined }}>
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: slide === i ? C.teal : (dark ? "#0F766E" : "#CCFBF1"), flexShrink: 0 }} />
                {!mob && <span style={{ fontSize: 12, fontWeight: slide === i ? 700 : 500, color: slide === i ? C.teal : (dark ? "#99F6E4" : C.tealD) }}>{sl.tag}</span>}
              </button>
            ))}
          </div>

        </div>
      </Section>

      {/* Features */}
      <Section style={{ background: dark ? "#042F2E" : "#fff" }}>
        <SectionLabel>Why Paydex</SectionLabel>

        <h2 style={{ fontWeight: 900, fontSize: mob ? 26 : 40, color: dark ? C.white : C.black, marginBottom: mob ? 30 : 50, letterSpacing: "-1px" }}>
          Everything you need to move money — nothing you don't
        </h2>

        <FeatureGrid features={[
          { icon: "Zap", title: "Instant Payouts", desc: "Settle disbursements in seconds through FedNow, RTP, SEPA Instant, SWIFT, and digital checks across the United States and Europe." },
          { icon: "Shield", title: "Bank-Grade Security", desc: "SOC 2 Type II, PCI DSS Level 1, end-to-end encryption, and real-time fraud detection." },
          { icon: "BarChart3", title: "Full Visibility", desc: "Live dashboards, audit trails, and reconciliation reports at every stage." },
          { icon: "Link2", title: "Deep Integrations", desc: "SAP, Oracle, NetSuite, Workday, and 200+ connectors via REST API or SDKs." },
          { icon: "Globe", title: "Multi-Currency", desc: "Multi-currency payouts with competitive FX rates and intelligent payment routing across the United States and Europe." },
          { icon: "RefreshCcw", title: "Smart Automation", desc: "Rules-based approvals, auto-routing, and scheduling cut manual work by 80%." },
        ]} />
      </Section>

      {/* Testimonials */}
      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <SectionLabel>What Clients Say</SectionLabel>

        <h2 style={{ fontWeight: 900, fontSize: mob ? 24 : 36, color: dark ? C.white : C.black, marginBottom: 36, letterSpacing: "-0.8px" }}>
          Real outcomes, real businesses
        </h2>

        <TestimonialBlock />
      </Section>

      {/* FAQ */}
      <Section style={{ background: dark ? "#042F2E" : "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <SectionLabel>FAQ</SectionLabel>

          <h2 style={{ fontWeight: 900, fontSize: mob ? 24 : 36, color: dark ? C.white : C.black, marginBottom: 32, letterSpacing: "-0.8px" }}>
            Frequently asked questions
          </h2>

          <FAQBlock />
        </div>
      </Section>

      {/* CTA */}
      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <CTABanner />
      </Section>

    </Layout>
  );
}