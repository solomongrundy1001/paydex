import { useEffect } from "react";
import { X, Clock, User, Calendar, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";
import { useWindowWidth } from "../../hooks";
import Btn from "../ui/Btn.jsx";

// ─── Block renderers ──────────────────────────────────────────────────────────

function TextBlock({ content, dark }) {
  return (
    <p
      style={{
        fontSize: 16,
        lineHeight: 1.85,
        color: dark ? "#e0fdf4" : "#1a2e2a",
        marginBottom: 24,
      }}
    >
      {content}
    </p>
  );
}

function ImageBlock({ src, caption, dark }) {
  return (
    <figure style={{ margin: "32px 0" }}>
      <img
        src={src}
        alt={caption || ""}
        style={{
          width: "100%",
          borderRadius: 14,
          objectFit: "cover",
          maxHeight: 400,
          display: "block",
        }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      {caption && (
        <figcaption
          style={{
            marginTop: 10,
            fontSize: 13,
            color: dark ? "#5EEAD4" : C.tealD,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function AdBlock({ label, text, cta, ctaTo, dark }) {
  return (
    <div
      style={{
        margin: "32px 0",
        padding: "22px 24px",
        borderRadius: 14,
        background: dark ? "rgba(13,148,136,.12)" : "rgba(13,148,136,.07)",
        border: `1px dashed ${dark ? "rgba(13,148,136,.4)" : "rgba(13,148,136,.3)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 14,
      }}
    >
      <div>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".12em",
            color: dark ? "#5EEAD4" : C.tealD,
            textTransform: "uppercase",
            display: "block",
            marginBottom: 6,
          }}
        >
          {label}
        </span>
        <p
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 600,
            color: dark ? C.white : C.black,
          }}
        >
          {text}
        </p>
      </div>
      <Btn to={ctaTo} size="sm">
        {cta} <ArrowRight size={13} />
      </Btn>
    </div>
  );
}

function ArticleBlock({ block, dark }) {
  switch (block.type) {
    case "text":
      return <TextBlock {...block} dark={dark} />;
    case "image":
      return <ImageBlock {...block} dark={dark} />;
    case "ad":
      return <AdBlock {...block} dark={dark} />;
    default:
      return null;
  }
}

// ─── Tag colours ──────────────────────────────────────────────────────────────

const TAG_COLORS = {
  ANNOUNCEMENT: { bg: "rgba(59,130,246,.15)", color: "#60A5FA" },
  MILESTONE: { bg: "rgba(16,185,129,.15)", color: "#34D399" },
  PRODUCT: { bg: "rgba(139,92,246,.15)", color: "#A78BFA" },
  EXPANSION: { bg: "rgba(245,158,11,.15)", color: "#FCD34D" },
  PARTNERSHIP: { bg: "rgba(236,72,153,.15)", color: "#F472B6" },
  AWARD: { bg: "rgba(13,148,136,.15)", color: "#2DD4BF" },
};

// ─── ArticleModal ─────────────────────────────────────────────────────────────

export default function ArticleModal({ article, onClose }) {
  const { dark } = useTheme();
  const mob = useWindowWidth() < 640;
  const tagStyle = TAG_COLORS[article.tag] || TAG_COLORS.ANNOUNCEMENT;

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", 
        inset: 0, 
        zIndex: 100,
        background: "rgba(0,0,0,.72)", 
        backdropFilter: "blur(6px)",
        overflowY: "auto",
        padding: mob ? 0 : "40px 1.5rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: mob ? "100%" : 700,
          background: dark ? "#031F1E" : "#fff",
          borderRadius: mob ? "20px 20px 0 0" : 20,
          margin: mob ? "auto 0 0 0" : "0 auto", 
          minHeight: mob ? "92vh" : undefined,
          boxShadow: "0 32px 80px rgba(0,0,0,.45)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 10,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(0,0,0,.5)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <X size={18} stroke="#fff" strokeWidth={2.5} />
        </button>

        {/* Cover image */}
        <div
          style={{ width: "100%", height: mob ? 200 : 280, overflow: "hidden" }}
        >
          <img
            src={article.cover}
            alt={article.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            onError={(e) => {
              e.target.parentElement.style.display = "none";
            }}
          />
        </div>

        {/* Body */}
        <div style={{ padding: mob ? "1.5rem 1.25rem" : "2.5rem" }}>
          {/* Tag + meta */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".1em",
                padding: "4px 12px",
                borderRadius: 99,
                background: tagStyle.bg,
                color: tagStyle.color,
              }}
            >
              {article.tag}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 12,
                color: dark ? "#5EEAD4" : C.tealD,
              }}
            >
              <Calendar
                size={12}
                stroke={dark ? "#5EEAD4" : C.tealD}
                strokeWidth={2}
              />{" "}
              {article.date}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 12,
                color: dark ? "#5EEAD4" : C.tealD,
              }}
            >
              <User
                size={12}
                stroke={dark ? "#5EEAD4" : C.tealD}
                strokeWidth={2}
              />{" "}
              {article.author}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: 12,
                color: dark ? "#5EEAD4" : C.tealD,
              }}
            >
              <Clock
                size={12}
                stroke={dark ? "#5EEAD4" : C.tealD}
                strokeWidth={2}
              />{" "}
              {article.minRead} min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: mob ? 22 : 30,
              color: dark ? C.white : C.black,
              lineHeight: 1.25,
              marginBottom: 28,
              letterSpacing: "-0.6px",
            }}
          >
            {article.title}
          </h1>

          <div
            style={{
              height: 1,
              background: dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)",
              marginBottom: 28,
            }}
          />

          {/* Blocks */}
          {article.blocks.map((block, i) => (
            <ArticleBlock key={i} block={block} dark={dark} />
          ))}

          {/* Footer */}
          <div
            style={{
              marginTop: 40,
              paddingTop: 24,
              borderTop: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: dark ? "#5EEAD4" : C.tealD,
                margin: 0,
              }}
            >
              Published {article.date} · {article.minRead} min read
            </p>
            <button
              onClick={onClose}
              style={{
                fontSize: 13,
                color: C.teal,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              ← Back to Newsroom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
