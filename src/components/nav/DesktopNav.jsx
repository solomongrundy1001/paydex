import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C, ICON_MAP, NAV_ROUTES } from "../../constants";
import { Logo, Btn } from "../ui";

export default function DesktopNav() {
  const { dark, setDark } = useTheme();
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const bg = dark ? "rgba(4,47,46,0.95)" : "rgba(240,253,250,0.97)";
  const txt = dark ? C.white : C.black;
  const brd = dark ? "#0F766E" : "#CCFBF1";

  return (
    <header
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: bg,
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${brd}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Logo />
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {NAV_ROUTES.map((item) => (
            <div key={item.label} style={{ position: "relative" }}>
              <button
                onMouseEnter={() => setOpen(item.label)}
                onClick={() => setOpen(open === item.label ? null : item.label)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "8px 12px",
                  borderRadius: 9,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  color: open === item.label ? C.teal : txt,
                  background:
                    open === item.label
                      ? dark
                        ? "rgba(13,148,136,.15)"
                        : "rgba(13,148,136,.08)"
                      : "transparent",
                }}
              >
                {item.label}
                <ChevronDown
                  size={13}
                  style={{
                    transform: open === item.label ? "rotate(180deg)" : "none",
                    transition: "transform .2s",
                  }}
                />
              </button>
              {open === item.label && (
                <div
                  onMouseLeave={() => setOpen(null)}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: dark ? "#042F2E" : "#fff",
                    border: `1px solid ${brd}`,
                    borderRadius: 16,
                    boxShadow: "0 20px 60px rgba(0,0,0,.22)",
                    overflow: "hidden",
                    minWidth: 560,
                    display: "flex",
                    animation: "fpFadeIn .18s ease",
                  }}
                >
                  <div
                    style={{
                      width: 190,
                      background: item.imgBg,
                      padding: "1.75rem 1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flexShrink: 0,
                    }}
                  >
                      <div style={{width:"100%", borderRadius:"8px"}}>
                        <img src={item.imgSrc} alt="" style={{width:"100%", height:"100%"}} />
                      </div>
                    <div>
                      <p
                        style={{
                          color: "#99F6E4",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        {item.label}
                      </p>
                      <h3
                        style={{
                          color: "#fff",
                          fontWeight: 800,
                          fontSize: 15,
                          lineHeight: 1.35,
                          marginBottom: 8,
                        }}
                      >
                        {item.headline}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255,255,255,.65)",
                          fontSize: 12,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      flex: 1,
                    }}
                  >
                    {item.subs.map((s) => {
                      const Icon = ICON_MAP[s.icon];
                      return (
                        <button
                          key={s.label}
                          onClick={() => {
                            navigate(s.slug);
                            setOpen(null);
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 11,
                            padding: "9px 10px",
                            borderRadius: 10,
                            border: "none",
                            cursor: "pointer",
                            background: "transparent",
                            textAlign: "left",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = dark
                              ? "rgba(13,148,136,.12)"
                              : "rgba(13,148,136,.07)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: 9,
                              background: dark
                                ? "rgba(13,148,136,.18)"
                                : "rgba(13,148,136,.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: C.teal,
                              flexShrink: 0,
                            }}
                          >
                            {Icon && <Icon size={15} />}
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: 600,
                                fontSize: 13,
                                color: txt,
                                margin: 0,
                              }}
                            >
                              {s.label}
                            </p>
                            <p
                              style={{
                                fontSize: 11,
                                color: dark ? "#5EEAD4" : C.tealD,
                                margin: 0,
                              }}
                            >
                              {s.desc}
                            </p>
                          </div>
                          <ArrowUpRight
                            size={12}
                            style={{
                              marginLeft: "auto",
                              color: C.teal,
                              opacity: 0.5,
                            }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexShrink: 0,
          }}
        >
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              outline: "none",
              border: "none",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: dark ? "#FCD34D" : C.teal,
              cursor: "pointer",
            }}
          >
            {dark ? (
              <Sun
                size={15}
                stroke={dark ? "#FCD34D" : C.teal}
                strokeWidth={2}
                style={{ flexShrink: 0 }}
              />
            ) : (
              <Moon
                size={15}
                stroke={dark ? "#FCD34D" : C.teal}
                strokeWidth={2}
                style={{ flexShrink: 0 }}
              />
            )}
          </button>
          <Btn to="/login" variant="outline" size="sm">
            Sign In
          </Btn>
          <Btn to="/request-access" size="sm">
            Request Access
          </Btn>
        </div>
      </div>
      <style>{`@keyframes fpFadeIn{from{opacity:0;transform:translateX(-50%) translateY(-6px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}`}</style>
    </header>
  );
}
