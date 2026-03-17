import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronRight, ChevronLeft } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C, ICON_MAP, NAV_ROUTES } from "../../constants";
import { Logo, Btn } from "../ui";

export default function MobileNav() {
  const { dark, setDark } = useTheme();
  const [open, setOpen] = useState(false);
  const [drill, setDrill] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(false);
      setDrill(null);
    }, 0);
    return () => clearTimeout(t);
  }, [location]);

  const bg = dark ? "#042F2E" : "#F0FDFA";
  const txt = dark ? C.white : C.black;
  const sub = dark ? "#5EEAD4" : C.tealD;
  const brd = dark ? "#0F766E" : "#CCFBF1";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          height: 60,
          background: dark ? "rgba(4,47,46,.96)" : "rgba(240,253,250,.97)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${brd}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.25rem",
        }}
      >

        <Logo size="sm" />
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              outline: "0px",
              border: "0px",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: dark ? "#FCD34D" : C.teal,
              cursor: "pointer",
            }}
          >
            {dark ? <Sun size={15} stroke={dark ? "#FCD34D" : C.teal} strokeWidth={2} style={{ flexShrink: 0 }} /> : <Moon size={15} stroke={dark ? "#FCD34D" : C.teal} strokeWidth={2} style={{ flexShrink: 0 }} />}
          </button>
          <button
            onClick={() => {
              setOpen(!open);
              setDrill(null);
            }}
            style={{
              width: 34,
              height: 34,
              fontSize: 16,
              borderRadius: "8px",
              border: `1px solid ${brd}`,
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: txt,
              cursor: "pointer",
            }}
          >
            {/* {open ? <X size={17} /> : <Menu size={17} />} */}
            {open ? <X size={17} stroke={txt} strokeWidth={2} style={{ flexShrink: 0 }} /> : <Menu size={17} stroke={txt} strokeWidth={2} style={{ flexShrink: 0 }} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 60,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 39,
            overflowY: "auto",
          }}
        >
          {!drill ? (
            <div style={{ background: bg, minHeight: "100%" }}>
              {NAV_ROUTES.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setDrill(item)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "17px 1.5rem",
                    background: "transparent",
                    border: "none",
                    borderBottom: `1px solid ${brd}`,
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 16, color: txt }}>
                    {item.label}
                  </span>
                  <ChevronRight size={18} style={{ color: C.teal }} />
                </button>
              ))}
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <Btn
                  to="/login"
                  variant="outline"
                  style={{ justifyContent: "center" }}
                >
                  Sign In
                </Btn>
                <Btn to="/request-access" style={{ justifyContent: "center" }}>
                  Request Access
                </Btn>
              </div>
            </div>
          ) : (
            <div
              style={{
                background: dark ? "#031F1E" : "#fff",
                minHeight: "100%",
              }}
            >
              <div style={{ background: drill.imgBg, padding: "1.5rem" }}>
                <button
                  onClick={() => setDrill(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(255,255,255,.8)",
                    fontSize: 14,
                    marginBottom: 16,
                  }}
                >
                  <ChevronLeft size={15} /> Back
                </button>
                <div style={{width:"100%", borderRadius:"8px"}}>
                  <img src={drill.imgSrc} alt="" style={{width:"100%", height:"100%"}} />
                </div>
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 18,
                    margin: "0 0 6px",
                  }}
                >
                  {drill.headline}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,.7)",
                    fontSize: 13,
                    margin: 0,
                  }}
                >
                  {drill.desc}
                </p>
              </div>
              {drill.subs.map((s) => {
                const Icon = ICON_MAP[s.icon];
                return (
                  <button
                    key={s.label}
                    onClick={() => navigate(s.slug)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      width: "100%",
                      padding: "14px 1.5rem",
                      background: "transparent",
                      border: "none",
                      borderBottom: `1px solid ${brd}`,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
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
                      {Icon && <Icon size={18} />}
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: 600,
                          fontSize: 15,
                          color: txt,
                        }}
                      >
                        {s.label}
                      </p>
                      <p style={{ margin: 0, fontSize: 12, color: sub }}>
                        {s.desc}
                      </p>
                    </div>
                    <ChevronRight
                      size={14}
                      style={{
                        marginLeft: "auto",
                        color: C.teal,
                        opacity: 0.6,
                      }}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}
