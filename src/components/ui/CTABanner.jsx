import { ArrowRight } from "lucide-react";
import { C } from "../../constants";
import { useWindowWidth } from "../../hooks";
import { default as Btn } from "./Btn";

export default function CTABanner({
  title = "Ready to move money faster?",
  body  = "Join thousands of enterprises already using Paydex to disburse payments at scale.",
}) {
  const w   = useWindowWidth();
  const mob = w < 640;

  return (
    <div
      style={{
        borderRadius: 22,
        background: `linear-gradient(135deg,${C.black} 0%,${C.teal} 100%)`,
        padding: mob ? "2.5rem 1.5rem" : "3.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,.05)" }} />

      <h2 style={{ fontWeight: 900, fontSize: mob ? 24 : 36, color: "#fff", marginBottom: 14, position: "relative", letterSpacing: "-0.8px" }}>
        {title}
      </h2>
      <p style={{ color: "rgba(255,255,255,.75)", fontSize: mob ? 14 : 16, marginBottom: 28, lineHeight: 1.65, position: "relative" }}>
        {body}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", position: "relative" }}>
        <Btn to="/request-access">Request Access <ArrowRight size={15} /></Btn>
        <Btn to="/login" variant="ghost">Sign In</Btn>
      </div>
    </div>
  );
}
