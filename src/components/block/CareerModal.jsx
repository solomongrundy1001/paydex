import { useEffect, useState } from "react";
import { X, MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";
import { useWindowWidth } from "../../hooks";
import Btn from "../ui/Btn.jsx";

export default function CareerModal({ career, onClose }) {
  const { dark } = useTheme();
  const mob = useWindowWidth() < 640;
  const txt = dark ? C.white : C.black;
  const sub = dark ? "#5EEAD4" : C.tealD;
  const [showNotice, setShowNotice] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(career.title + " Application");
    const mailto = `mailto:careers@paydex.com?subject=${subject}`;

    let switched = false;

    const onVisibilityChange = () => {
      if (document.hidden) switched = true;
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.location.href = mailto;

    setTimeout(() => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (!switched) setShowNotice(true); // show manual notice instead of opening Gmail
    }, 1000);
  };

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
    // Backdrop
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,.72)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: mob ? "flex-end" : "flex-start",
        justifyContent: "center",
        padding: mob ? 0 : "40px 1.5rem",
        overflowY: "auto",
      }}
    >
      {/* Panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 700,
          background: dark ? "#031F1E" : "#fff",
          borderRadius: mob ? "20px 20px 0 0" : 20,
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
            background: "rgba(0,0,0,.4)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <X size={18} stroke="#fff" strokeWidth={2.5} />
        </button>

        {/* Header band */}
        <div
          style={{
            background: `linear-gradient(135deg,${C.black},${C.dark})`,
            padding: mob ? "2rem 1.25rem 1.5rem" : "2.5rem 2.5rem 2rem",
          }}
        >
          {/* Dept badge */}
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".12em",
              padding: "4px 12px",
              borderRadius: 99,
              background: "rgba(13,148,136,.25)",
              color: C.tealL,
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: 16,
            }}
          >
            {career.dept}
          </span>

          {/* Title */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: mob ? 22 : 28,
              color: "#fff",
              lineHeight: 1.25,
              marginBottom: 16,
              letterSpacing: "-0.5px",
            }}
          >
            {career.title}
          </h1>

          {/* Meta pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 13,
                color: "#99F6E4",
                background: "rgba(255,255,255,.08)",
                padding: "5px 12px",
                borderRadius: 99,
              }}
            >
              <MapPin size={13} stroke="#99F6E4" strokeWidth={2} /> {career.loc}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 13,
                color: "#99F6E4",
                background: "rgba(255,255,255,.08)",
                padding: "5px 12px",
                borderRadius: 99,
              }}
            >
              <Briefcase size={13} stroke="#99F6E4" strokeWidth={2} />{" "}
              {career.dept}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 13,
                color: "#99F6E4",
                background: "rgba(255,255,255,.08)",
                padding: "5px 12px",
                borderRadius: 99,
              }}
            >
              <Clock size={13} stroke="#99F6E4" strokeWidth={2} /> {career.type}
            </span>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            padding: mob ? "1.5rem 1.25rem 2rem" : "2rem 2.5rem 2.5rem",
            overflowY: "auto",
          }}
        >
          {/* Description */}
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: dark ? "#e0fdf4" : "#1a2e2a",
              marginBottom: 32,
            }}
          >
            {career.description}
          </p>

          {/* Responsibilities */}
          <div style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontWeight: 800,
                fontSize: 16,
                color: txt,
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 18,
                  borderRadius: 4,
                  background: C.teal,
                  display: "inline-block",
                }}
              />
              Responsibilities
            </h2>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {career.responsibilities.map((r, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 14,
                    color: dark ? "#e0fdf4" : "#1a2e2a",
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: C.teal,
                      flexShrink: 0,
                      marginTop: 7,
                    }}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontWeight: 800,
                fontSize: 16,
                color: txt,
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 18,
                  borderRadius: 4,
                  background: C.teal,
                  display: "inline-block",
                }}
              />
              Skills & Requirements
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {career.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "6px 14px",
                    borderRadius: 99,
                    background: dark
                      ? "rgba(13,148,136,.12)"
                      : "rgba(13,148,136,.08)",
                    border: `1px solid ${dark ? "rgba(13,148,136,.25)" : "rgba(13,148,136,.2)"}`,
                    color: dark ? "#99F6E4" : C.tealD,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* How to apply */}
          <div
            style={{
              padding: "20px 22px",
              borderRadius: 14,
              background: dark
                ? "rgba(13,148,136,.08)"
                : "rgba(13,148,136,.05)",
              border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
              marginBottom: 32,
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: 15,
                color: txt,
                marginBottom: 8,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 16,
                  borderRadius: 4,
                  background: C.teal,
                  display: "inline-block",
                }}
              />
              How to Apply
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: dark ? "#e0fdf4" : "#1a2e2a",
                lineHeight: 1.7,
              }}
            >
              {career.apply}
            </p>
          </div>

          {showNotice && (
            <div
              style={{
                marginBottom: 20,
                padding: "14px 18px",
                borderRadius: 12,
                background: dark
                  ? "rgba(245,158,11,.1)"
                  : "rgba(245,158,11,.08)",
                border: "1px solid rgba(245,158,11,.3)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#F59E0B",
                }}
              >
                Could not open your email client
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: dark ? "#e0fdf4" : "#1a2e2a",
                  lineHeight: 1.65,
                }}
              >
                Please send your application manually to{" "}
                <a
                  href="mailto:careers@paydex.com"
                  style={{ color: C.teal, fontWeight: 600 }}
                >
                  careers@paydex.com
                </a>{" "}
                with the subject line{" "}
                <strong>"{career.title} Application"</strong>
              </p>
            </div>
          )}

          {/* Footer CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              paddingTop: 20,
              borderTop: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
            }}
          >
            <a
              href={`mailto:careers@paydex.com?subject=${encodeURIComponent(career.title + " Application")}`}
              onClick={handleApply}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "13px 28px",
                borderRadius: 11,
                fontWeight: 700,
                fontSize: 15,
                background: `linear-gradient(135deg,${C.teal},${C.dark})`,
                color: "#fff",
                textDecoration: "none",
                cursor: "pointer",
                transition: "opacity .18s, transform .18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = ".85";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "none";
              }}
            >
              Apply Now <ArrowRight size={14} />
            </a>
            <button
              onClick={onClose}
              style={{
                fontSize: 13,
                color: sub,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              ← Back to Open Roles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
