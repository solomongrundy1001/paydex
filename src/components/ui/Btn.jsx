import { useNavigate } from "react-router-dom";
import { C } from "../../constants";

const VARIANTS = {
  primary: { background: `linear-gradient(135deg,${C.teal},${C.dark})`, color: "#fff" },
  outline: { background: "transparent", color: C.teal, border: `1.5px solid ${C.teal}` },
  ghost:   { background: "rgba(255,255,255,.13)", color: "#fff", border: "1.5px solid rgba(255,255,255,.35)" },
};

export function Btn({ children, variant = "primary", onClick, to, style = {}, size = "md" }) {
  const navigate = useNavigate();
  const pad = size === "sm" ? "8px 18px" : "13px 28px";
  const fs  = size === "sm" ? 13 : 15;

  const base = {
    padding: pad, borderRadius: 11, fontWeight: 700, fontSize: fs,
    cursor: "pointer", border: "none", display: "inline-flex", alignItems: "center",
    gap: 7, textDecoration: "none", transition: "opacity .18s, transform .18s",
    ...style,
  };

  const handleClick = (e) => {
    if (to) navigate(to);
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      style={{ ...base, ...VARIANTS[variant] }}
      onMouseEnter={e => { e.currentTarget.style.opacity = ".85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1";   e.currentTarget.style.transform = "none"; }}
    >
      {children}
    </button>
  );
}

export default Btn