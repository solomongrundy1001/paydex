import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";

const TAG_COLORS = {
  ANNOUNCEMENT: { bg: "rgba(59,130,246,.15)",  color: "#60A5FA" },
  MILESTONE:    { bg: "rgba(16,185,129,.15)",  color: "#34D399" },
  PRODUCT:      { bg: "rgba(139,92,246,.15)",  color: "#A78BFA" },
  EXPANSION:    { bg: "rgba(245,158,11,.15)",  color: "#FCD34D" },
  PARTNERSHIP:  { bg: "rgba(236,72,153,.15)",  color: "#F472B6" },
  AWARD:        { bg: "rgba(13,148,136,.15)",  color: "#2DD4BF" },
};

export default function ArticleCard({ article, onRead }) {
  const { dark } = useTheme();
  const tagStyle  = TAG_COLORS[article.tag] || TAG_COLORS.ANNOUNCEMENT;
  const sub       = dark ? "#5EEAD4" : C.tealD;
  const txt       = dark ? C.white   : C.black;

  return (
    <div
      style={{ borderRadius: 16, overflow: "hidden", background: dark ? "rgba(13,148,136,.07)" : "#fff", border: `1px solid ${dark ? "rgba(13,148,136,.18)" : "rgba(13,148,136,.13)"}`, cursor: "pointer", transition: "transform .2s, box-shadow .2s", display: "flex", flexDirection: "column" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,148,136,.15)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
      onClick={onRead}
    >
      {/* Cover */}
      {/* <div style={{ width: "100%", height: 180, overflow: "hidden", flexShrink: 0 }}>
        <img
          src={article.cover}
          alt={article.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .3s" }}
          onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { e.target.style.transform = "none"; }}
          onError={e => { e.target.parentElement.style.background = dark ? "#042F2E" : "#F0FDFA"; e.target.style.display = "none"; }}
        />
      </div> */}

      {/* Content */}
      <div style={{ padding: "20px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Tag + date */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", padding: "3px 10px", borderRadius: 99, background: tagStyle.bg, color: tagStyle.color }}>
            {article.tag}
          </span>
          <span style={{ fontSize: 11, color: sub }}>{article.date}</span>
          <span style={{ fontSize: 11, color: sub, marginLeft: "auto" }}>{article.minRead} min read</span>
        </div>

        {/* Title */}
        <h3 style={{ fontWeight: 700, fontSize: 16, color: txt, lineHeight: 1.4, marginBottom: 10, flex: 1 }}>
          {article.title}
        </h3>

        {/* Excerpt */}
        <p style={{ fontSize: 13, color: sub, lineHeight: 1.65, marginBottom: 16 }}>
          {article.excerpt}
        </p>

        {/* Read more */}
        <button
          onClick={e => { e.stopPropagation(); onRead(); }}
          style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: C.teal, background: "none", border: "none", cursor: "pointer", padding: 0, width: "fit-content" }}
        >
          Read more <ArrowRight size={13} stroke={C.teal} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
