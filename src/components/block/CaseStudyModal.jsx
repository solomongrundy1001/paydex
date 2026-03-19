import { useEffect } from "react";
import { X, Clock, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";
import { useWindowWidth } from "../../hooks";
import Btn from "../ui/Btn.jsx";

// ─── Block renderers ──────────────────────────────────────────────────────────

function SectionLabel({ label, dark }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: "36px 0 16px",
      }}
    >
      <div
        style={{
          height: 1,
          flex: 1,
          background: dark ? "rgba(13,148,136,.25)" : "rgba(13,148,136,.2)",
        }}
      />
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: ".14em",
          color: C.teal,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div
        style={{
          height: 1,
          flex: 1,
          background: dark ? "rgba(13,148,136,.25)" : "rgba(13,148,136,.2)",
        }}
      />
    </div>
  );
}

function TextBlock({ content, dark }) {
  return (
    <p
      style={{
        fontSize: 16,
        lineHeight: 1.85,
        color: dark ? "#e0fdf4" : "#1a2e2a",
        marginBottom: 20,
      }}
    >
      {content}
    </p>
  );
}

function ImageBlock({ src, caption, dark }) {
  return (
    <figure style={{ margin: "28px 0" }}>
      <img
        src={src}
        alt={caption || ""}
        style={{
          width: "100%",
          borderRadius: 14,
          objectFit: "cover",
          maxHeight: 360,
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

function StatRow({ stats, dark }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        gap: 14,
        margin: "24px 0",
      }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            padding: "18px 14px",
            borderRadius: 14,
            background: dark ? "rgba(13,148,136,.1)" : "rgba(13,148,136,.06)",
            border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: 900,
              fontSize: 22,
              color: C.teal,
              letterSpacing: "-0.5px",
            }}
          >
            {s.value}
          </p>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: 12,
              color: dark ? "#5EEAD4" : C.tealD,
              lineHeight: 1.4,
            }}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function QuoteBlock({ content, author, dark }) {
  return (
    <blockquote
      style={{
        margin: "28px 0 0",
        padding: "22px 24px",
        borderRadius: 14,
        borderLeft: `4px solid ${C.teal}`,
        background: dark ? "rgba(13,148,136,.08)" : "rgba(13,148,136,.05)",
      }}
    >
      <p
        style={{
          margin: "0 0 12px",
          fontSize: 16,
          lineHeight: 1.75,
          color: dark ? "#e0fdf4" : "#1a2e2a",
          fontStyle: "italic",
        }}
      >
        "{content}"
      </p>
      <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: C.teal }}>
        — {author}
      </p>
    </blockquote>
  );
}

function CaseBlock({ block, dark }) {
  switch (block.type) {
    case "section":
      return <SectionLabel label={block.label} dark={dark} />;
    case "text":
      return <TextBlock content={block.content} dark={dark} />;
    case "image":
      return <ImageBlock src={block.src} caption={block.caption} dark={dark} />;
    case "stat-row":
      return <StatRow stats={block.stats} dark={dark} />;
    case "quote":
      return (
        <QuoteBlock content={block.content} author={block.author} dark={dark} />
      );
    default:
      return null;
  }
}

// ─── CaseStudyModal ───────────────────────────────────────────────────────────

export default function CaseStudyModal({ caseStudy, onClose }) {
  const { dark } = useTheme();
  const mob = useWindowWidth() < 640;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
        {/* Close */}
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

        {/* Cover */}
        <div
          style={{ width: "100%", height: mob ? 180 : 260, overflow: "hidden" }}
        >
          <img
            src={caseStudy.cover}
            alt={caseStudy.title}
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

        {/* Header band */}
        <div style={{ padding: mob ? "1.25rem 1.25rem 0" : "2rem 2.5rem 0" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 10,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".1em",
                padding: "4px 12px",
                borderRadius: 99,
                background: "rgba(13,148,136,.15)",
                color: C.tealL,
              }}
            >
              {caseStudy.industry}
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
              {caseStudy.minRead} min read
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: 12,
                fontWeight: 700,
                color: C.teal,
                background: dark
                  ? "rgba(13,148,136,.15)"
                  : "rgba(13,148,136,.08)",
                padding: "4px 12px",
                borderRadius: 99,
              }}
            >
              {caseStudy.result}
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: mob ? 20 : 28,
              color: dark ? C.white : C.black,
              lineHeight: 1.25,
              marginBottom: 8,
              letterSpacing: "-0.5px",
            }}
          >
            {caseStudy.title}
          </h1>
          <p
            style={{
              fontSize: 15,
              color: dark ? "#99F6E4" : C.tealD,
              lineHeight: 1.7,
              marginBottom: 0,
            }}
          >
            {caseStudy.excerpt}
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: mob ? "0 1.25rem 2rem" : "0 2.5rem 2.5rem" }}>
          {caseStudy.blocks.map((block, i) => (
            <CaseBlock key={i} block={block} dark={dark} />
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
            <Btn to="/request-access" size="sm">
              Get Similar Results <ArrowRight size={13} />
            </Btn>
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
              ← Back to Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
