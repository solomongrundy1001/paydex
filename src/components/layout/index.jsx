import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";
import { Logo } from "../ui";
import { useWindowWidth } from "../../hooks";
import DesktopNav from "../nav/DesktopNav";
import MobileNav from "../nav/MobileNav";

// ─── Adaptive Nav ─────────────────────────────────────────────────────────────
export function Nav() {
  const w = useWindowWidth();
  return w >= 1024 ? <DesktopNav /> : <MobileNav />;
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  const { dark } = useTheme();
  const brd = "rgba(94,234,212,.12)";
  const sub = "#5EEAD4";
  const w = useWindowWidth();
  const mob = w < 640;

  return (
    <footer
      style={{
        background: dark ? "#031F1E" : "#042F2E",
        padding: "3rem 2rem 2rem",
        borderTop: `1px solid ${brd}`,
      }}
    >
      <div style={{ maxWidth: "100%", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob ? "1fr 1fr" : "repeat(4,1fr)",
            gap: 32,
            marginBottom: 40,
          }}
        >
          <div style={{ gridColumn: mob ? "1/-1" : undefined }}>
            <Link to="/">
              <span>
                <img src="/images/paydex.png" alt="paydex-light" width={160}/>
              </span>
            </Link>
            <p
              style={{
                fontSize: 13,
                color: sub,
                lineHeight: 1.7,
                marginTop: 12,
              }}
            >
              Leading B2B payment disbursement platform for enterprises.
            </p>
          </div>
          {[
            [
              "Solutions",
              ["/solutions/mass-payouts", "Mass Payouts"],
              ["/solutions/invoice-payments", "Invoice Payments"],
              ["/solutions/payroll-disbursement", "Payroll"],
              ["/solutions/vendor-payments", "Vendor Payments"],
            ],
            [
              "Company",
              ["/about/our-story", "About Us"],
              ["/about/careers", "Careers"],
              ["/about/newsroom", "Newsroom"],
              ["/about/case-studies", "Case Studies"],
            ],
            [
              "Support",
              ["/support/contact", "Contact"],
              ["/support/help-center", "Help Center"],
              ["/support/system-status", "System Status"],
              ["/support/onboarding-guide", "Onboarding"],
            ],
          ].map(([head, ...links]) => (
            <div key={head}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#fff",
                  marginBottom: 14,
                  letterSpacing: ".05em",
                }}
              >
                {head}
              </p>
              {links.map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: sub,
                    marginBottom: 8,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = C.tealL)}
                  onMouseLeave={(e) => (e.target.style.color = sub)}
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: `1px solid ${brd}`,
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(94,234,212,.6)", margin: 0 }}>
            © 2025 Paydex Technologies Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Security"].map((l) => (
              <span
                key={l}
                style={{
                  fontSize: 12,
                  color: "rgba(94,234,212,.6)",
                  cursor: "pointer",
                }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────
export function Layout({ children }) {
  const { dark } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,sans-serif",
        background: dark ? "#042F2E" : C.white,
        minHeight: "100vh",
        transition: "background .3s",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
