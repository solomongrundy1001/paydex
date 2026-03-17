import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { C } from "../constants/color";
import { useWindowWidth } from "../hooks";
import { Layout } from "../components/layout";
import { PageSEO, SectionLabel, Btn, Section } from "../components/ui";

export default function RequestAccessPage() {
  const { dark } = useTheme();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", volume: "", message: "" });
  const [sent, setSent] = useState(false);
  const w   = useWindowWidth();
  const mob = w < 640;
  const txt = dark ? C.white : C.black;
  const sub = dark ? "#99F6E4" : C.tealD;

  const inpStyle = {
    width: "100%", padding: "11px 14px", borderRadius: 10, fontSize: 14,
    outline: "none", boxSizing: "border-box",
    background: dark ? "#031F1E" : C.white,
    border: `1px solid ${dark ? "#0F766E" : "#CCFBF1"}`, color: txt, transition: "border .2s",
  };
  const update = k => e => setForm({ ...form, [k]: e.target.value });

  return (
    <Layout>
      <PageSEO title="Request Access" description="Apply for access to Paydex's B2B payment disbursement platform. Our team will review your application and get back to you within 24 hours." />
      <section style={{
        paddingTop: mob ? 90 : 120, paddingBottom: 60, padding: `${mob ? 90 : 120}px 1.5rem 60px`,
        background: dark
          ? "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(13,148,136,.18) 0%, transparent 60%)"
          : "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(13,148,136,.08) 0%, transparent 60%)",
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <CheckCircle2 size={56} style={{ color: C.teal, margin: "0 auto 20px", display: "block" }} />
              <h1 style={{ fontWeight: 900, fontSize: 32, color: txt, marginBottom: 14 }}>Application Received</h1>
              <p style={{ color: sub, fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>Thank you! Our team will review your application and reach out within 1–2 business days.</p>
              <Btn to="/">Back to Home</Btn>
            </div>
          ) : (
            <>
              <SectionLabel>Get Started</SectionLabel>
              <h1 style={{ fontWeight: 900, fontSize: mob ? 28 : 42, color: txt, marginBottom: 14, letterSpacing: "-1px" }}>Request Access to Paydex</h1>
              <p style={{ color: sub, fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>Fill in your details below. We review every application and only onboard clients who are a strong fit for our platform.</p>
              <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[["name","Full Name","text","John Carter"],["company","Company Name","text","Acme Inc."],["email","Work Email","email","you@company.com"],["phone","Phone Number","tel","+1 (212) 555-0182"]].map(([k, label, type, ph]) => (
                  <div key={k}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: sub, marginBottom: 6 }}>{label}</label>
                    <input value={form[k]} onChange={update(k)} placeholder={ph} type={type} style={inpStyle}
                      onFocus={e => e.target.style.borderColor = C.teal}
                      onBlur={e => e.target.style.borderColor = dark ? "#0F766E" : "#CCFBF1"} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: sub, marginBottom: 6 }}>Monthly Disbursement Volume</label>
                <select value={form.volume} onChange={update("volume")} style={{ ...inpStyle, appearance: "none" }}>
                  <option value="">Select a range</option>
                  <option>Under $50K/month</option>
                  <option>$50K – $500K/month</option>
                  <option>$500K – $5M/month</option>
                  <option>Above $5M/month</option>
                </select>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: sub, marginBottom: 6 }}>Tell us about your use case</label>
                <textarea value={form.message} onChange={update("message")} rows={4} placeholder="Describe what you're trying to solve..."
                  style={{ ...inpStyle, resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = C.teal}
                  onBlur={e => e.target.style.borderColor = dark ? "#0F766E" : "#CCFBF1"} />
              </div>
              <button onClick={() => { if (form.name && form.email) setSent(true); }}
                style={{ width: "100%", padding: "14px", borderRadius: 12, background: `linear-gradient(135deg,${C.teal},${C.dark})`, color: "#fff", fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer" }}>
                Submit Application <ArrowRight size={16} style={{ marginLeft: 4, display: "inline", verticalAlign: "middle" }} />
              </button>
              <p style={{ textAlign: "center", fontSize: 12, color: sub, marginTop: 14 }}>We review every application within 1–2 business days. No spam, ever.</p>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}