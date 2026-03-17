import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";

export default function CaseStudyCard({ caseStudy, onRead }) {
  const { dark } = useTheme();
  const sub = dark ? "#5EEAD4" : C.tealD;
  const txt = dark ? C.white   : C.black;

  return (
    <div
      style={{ borderRadius: 18, overflow: "hidden", border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`, cursor: "pointer", transition: "transform .2s, box-shadow .2s", display: "flex", flexDirection: "column" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(13,148,136,.15)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
      onClick={onRead}
    >
      {/* Cover */}
      <div style={{ width: "100%", height: 180, overflow: "hidden", flexShrink: 0 }}>
        <img
          src={caseStudy.cover}
          alt={caseStudy.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .3s" }}
          onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { e.target.style.transform = "none"; }}
          onError={e => { e.target.parentElement.style.background = dark ? "#042F2E" : "#F0FDFA"; e.target.style.display = "none"; }}
        />
      </div>

      {/* Header band with company + result */}
      <div style={{ background: `linear-gradient(135deg,${C.black},${C.dark})`, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg,${C.teal},${C.tealL})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 12, flexShrink: 0 }}>
            {caseStudy.init}
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: "#fff" }}>{caseStudy.company}</p>
            <p style={{ margin: 0, fontSize: 11, color: "#99F6E4" }}>{caseStudy.industry}</p>
          </div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.tealL, background: "rgba(13,148,136,.25)", padding: "4px 12px", borderRadius: 99, whiteSpace: "nowrap" }}>
          {caseStudy.result}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", flex: 1, background: dark ? "rgba(13,148,136,.05)" : "#fff" }}>
        <h3 style={{ fontWeight: 700, fontSize: 15, color: txt, lineHeight: 1.45, marginBottom: 10 }}>
          {caseStudy.title}
        </h3>
        <p style={{ fontSize: 13, color: sub, lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
          {caseStudy.excerpt}
        </p>
        <button
          onClick={e => { e.stopPropagation(); onRead(); }}
          style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: C.teal, background: "none", border: "none", cursor: "pointer", padding: 0, width: "fit-content" }}
        >
          Read full story <ArrowRight size={13} stroke={C.teal} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
