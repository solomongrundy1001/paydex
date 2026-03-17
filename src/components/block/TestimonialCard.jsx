import { Quote } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";

export default function TestimonialCard({ quote, name, role, init }) {
  const { dark } = useTheme();

  return (
    <div
      style={{
        padding: "26px 24px",
        borderRadius: 16,
        background: dark ? "rgba(13,148,136,.08)" : "#fff",
        border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
      }}
    >
      <Quote size={20} style={{ color: C.teal, marginBottom: 14, opacity: 0.7 }} />
      <p style={{ fontSize: 14, color: dark ? "#e0fdf4" : C.black, lineHeight: 1.7, marginBottom: 18, fontStyle: "italic" }}>
        "{quote}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{ width: 38, height: 38, borderRadius: "50%", background: `linear-gradient(135deg,${C.teal},${C.dark})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 12 }}
        >
          {init}
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: dark ? C.white : C.black }}>{name}</p>
          <p style={{ margin: 0, fontSize: 12, color: dark ? "#99F6E4" : C.tealD }}>{role}</p>
        </div>
      </div>
    </div>
  );
}
