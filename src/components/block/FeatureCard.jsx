import { useTheme } from "../../context/ThemeContext";
import { C, ICON_MAP } from "../../constants";
import { Shield } from "lucide-react";

export default function FeatureCard({ icon, title, desc }) {
  const { dark } = useTheme();
  const Icon = ICON_MAP[icon] || Shield;

  return (
    <div
      data-anim
      style={{
        padding: "26px 22px",
        borderRadius: 16,
        background: dark ? "rgba(13,148,136,.07)" : "rgba(13,148,136,.04)",
        border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.12)"}`,
        transition: "transform .2s, box-shadow .2s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,148,136,.18)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{ width: 42, height: 42, borderRadius: 11, background: `linear-gradient(135deg,${C.teal},${C.dark})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: 16 }}
      >
        <Icon size={19} />
      </div>
      <h3 style={{ fontWeight: 700, fontSize: 17, color: dark ? C.white : C.black, marginBottom: 8 }}>{title}</h3>
      <p style={{ color: dark ? "#99F6E4" : C.tealD, fontSize: 14, lineHeight: 1.65 }}>{desc}</p>
    </div>
  );
}
