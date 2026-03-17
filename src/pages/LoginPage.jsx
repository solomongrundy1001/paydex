import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { C } from "../constants";
import { useWindowWidth } from "../hooks";
import { Layout } from "../components/layout";
import { PageSEO, Logo } from "../components/ui";

export default function LoginPage() {
  const { dark } = useTheme();
  const [step, setStep]   = useState("idle");
  const [email, setEmail] = useState("");
  const [pass, setPass]   = useState("");
  const w   = useWindowWidth();
  const mob = w < 640;
  const txt = dark ? C.white : C.black;
  const sub = dark ? "#99F6E4" : C.tealD;

  const inpStyle = {
    width: "100%", padding: "12px 14px", borderRadius: 10, fontSize: 14,
    outline: "none", boxSizing: "border-box",
    background: dark ? "#031F1E" : C.white,
    border: `1px solid ${C.teal}`, color: txt,
  };

  return (
    <Layout>
      <PageSEO title="Sign In" description="Sign in to your Paydex account to manage your payment disbursements, view analytics, and more." />
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "6rem 1.5rem 2rem",
        background: dark
          ? "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(13,148,136,.18) 0%, transparent 60%)"
          : "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(13,148,136,.08) 0%, transparent 60%)",
      }}>
        <div style={{ width: "100%", maxWidth: 440, background: dark ? "#031F1E" : "#fff", borderRadius: 22, padding: mob ? "2rem 1.5rem" : "2.5rem", boxShadow: "0 24px 60px rgba(0,0,0,.3)", border: `1px solid ${C.teal}` }}>
          <div style={{ marginBottom: 28 }}><Logo /></div>
          <h1 style={{ fontWeight: 800, fontSize: 26, color: txt, marginBottom: 6 }}>Welcome back</h1>
          <p style={{ color: sub, fontSize: 14, marginBottom: 28 }}>Sign in to your Paydex portal</p>

          {step === "loading" && (
            <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", border: `4px solid ${C.tealL}`, borderTopColor: "transparent", animation: "fpSpin .8s linear infinite", margin: "0 auto 16px" }} />
              <p style={{ color: sub, fontSize: 14 }}>Verifying credentials…</p>
            </div>
          )}

          {step === "error" && (
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <AlertCircle size={44} style={{ color: "#F87171", margin: "0 auto 12px", display: "block" }} />
              <h3 style={{ color: "#F87171", fontWeight: 700, fontSize: 18, marginBottom: 10 }}>Unable to Sign In</h3>
              <p style={{ color: sub, fontSize: 14, marginBottom: 20, lineHeight: 1.65 }}>We couldn't verify your credentials. Please check your details or contact your account administrator.</p>
              <button onClick={() => setStep("idle")} style={{ color: C.teal, background: "none", border: "none", cursor: "pointer", textDecoration: "underline", fontSize: 14 }}>Try again</button>
            </div>
          )}

          {step === "idle" && (
            <>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: sub, marginBottom: 6 }}>Work Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" type="email" style={inpStyle} />
              </div>
              <div style={{ marginBottom: 8 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: sub, marginBottom: 6 }}>Password</label>
                <input value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" type="password" style={inpStyle} />
              </div>
              <div style={{ textAlign: "right", marginBottom: 24 }}>
                <span style={{ fontSize: 12, color: C.teal, cursor: "pointer" }}>Forgot password?</span>
              </div>
              <button
                onClick={() => { if (email && pass) { setStep("loading"); setTimeout(() => setStep("error"), 2200); } }}
                style={{ width: "100%", padding: "13px", borderRadius: 12, background: `linear-gradient(135deg,${C.teal},${C.dark})`, color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer" }}>
                Sign In
              </button>
              <p style={{ textAlign: "center", fontSize: 13, color: sub, marginTop: 18 }}>
                Don't have an account?{" "}
                <Link to="/request-access" style={{ color: C.teal, textDecoration: "none", fontWeight: 600 }}>Request Access</Link>
              </p>
            </>
          )}
        </div>
      </section>
      <style>{`@keyframes fpSpin{to{transform:rotate(360deg)}}`}</style>
    </Layout>
  );
}
