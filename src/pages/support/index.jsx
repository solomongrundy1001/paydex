import { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  Activity,
  Search,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C, FAQS, ICON_MAP } from "../../constants";
import { useWindowWidth } from "../../hooks";
import { Layout } from "../../components/layout";
import { PageSEO, SectionLabel, Section, CTABanner } from "../../components/ui";
import { PageHero, FAQBlock } from "../../components/block";

// ─── Contact ──────────────────────────────────────────────────────────────────
export function ContactPage() {
  const { dark } = useTheme();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const w = useWindowWidth();
  const mob = w < 640;
  const txt = dark ? C.white : C.black;
  const sub = dark ? "#99F6E4" : C.tealD;
  const inpStyle = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    background: dark ? "#031F1E" : C.white,
    border: `1px solid ${dark ? "#0F766E" : "#CCFBF1"}`,
    color: txt,
  };
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const iconBox = {
    width: 42,
    height: 42,
    borderRadius: 11,
    flexShrink: 0,
    background: `linear-gradient(135deg,${C.teal},${C.dark})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  };
  const row = {
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
    marginBottom: 24,
  };
  const addresses = [
    {
      icon: MapPin,
      title: "HQ Office — Geneva",
      val: "1, Place des Alpes, 1201 Geneva, Switzerland",
      sub: "Mon–Fri 9am–6pm CET/CEST",
    },

    {
      icon: MapPin,
      title: "Iowa Office — Des Moines",
      val: "100 Market St Unit 602, Des Moines, IA 50309",
      sub: "Mon–Fri 9am–6pm CT • +1 (515) 379-5872",
    },

    {
      icon: MapPin,
      title: "New York Office",
      val: "W 38th St, New York, NY 10018",
      sub: "Mon–Fri 9am–6pm ET • +1 (917) 936-5683",
    },

    {
      icon: MapPin,
      title: "Nebraska Office — Omaha",
      val: "4601 Catalyst Ct, Omaha, NE 68106",
      sub: "Mon–Fri 9am–6pm CT  • +1 (402) 433-0872",
    },
  ];

  return (
    <Layout>
      <PageSEO
        title="Contact Support"
        description="Get in touch with Paydex's support team. Available 24/7 for enterprise clients."
        keywords="Paydex contact, payment platform support, fintech support"
      />
      <PageHero
        tag="SUPPORT"
        title="We're Here to Help"
        subtitle="Enterprise support available 24/7. Typical response time under 2 hours."
      />
      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
            gap: 40,
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div>
            <SectionLabel>Contact Channels</SectionLabel>

            {/* Email */}
            <div style={row}>
              <div style={iconBox}>
                <Mail size={18} />
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: 14,
                    color: txt,
                  }}
                >
                  Email Support
                </p>
                <p
                  style={{
                    margin: "2px 0",
                    fontSize: 14,
                    color: C.teal,
                    fontWeight: 600,
                  }}
                >
                  support@getpaydex.com
                </p>
                <p style={{ margin: 0, fontSize: 12, color: sub }}>
                  Response within 2 hours
                </p>
              </div>
            </div>

            {/* support hours */}
            <div style={row}>
              <div style={iconBox}>
                <Clock size={18} />
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: 14,
                    color: txt,
                  }}
                >
                  Support Hours
                </p>
                <p
                  style={{
                    margin: "2px 0",
                    fontSize: 14,
                    color: C.teal,
                    fontWeight: 600,
                  }}
                >
                  24/7 Enterprise | 9am–6pm Business
                </p>
                <p style={{ margin: 0, fontSize: 12, color: sub }}>
                  Coverage across ET / CT / CET
                </p>
              </div>
            </div>
            {/* office trigger button */}
          <div
              onClick={() => setShow((prev) => !prev)}
              style={{
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                color:dark? '#fff' : "#000",
                marginBottom: 24,
                marginLeft: 30,
                background: dark ? "rgba(13,148,136,.07)" : "#99F6E4",
                border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
                borderRadius: 15,
                padding: "1rem",
                maxWidth: 200,
                textAlign: "center"
              }}
            
            >
              {show ? "Collapse Offices" : "View Offices"}
            </div>

            {/* office address */}
            {show && (
              <div>
                {addresses.map((address) => {
                  const AddrIcon = address.icon;
                  return (
                    <div key={address.title} style={row}>
                      <div style={iconBox}>
                        <AddrIcon size={18} />
                      </div>
                      <div>
                        <p
                          style={{
                            margin: 0,
                            fontWeight: 700,
                            fontSize: 14,
                            color: txt,
                          }}
                        >
                          {address.title}
                        </p>
                        <p
                          style={{
                            margin: "2px 0",
                            fontSize: 14,
                            color: C.teal,
                            fontWeight: 600,
                          }}
                        >
                          {address.val}
                        </p>
                        <p style={{ margin: 0, fontSize: 12, color: sub }}>
                          {address.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* ── RIGHT COLUMN — contact form ── */}
          {sent ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2rem",
              }}
            >
              <CheckCircle2
                size={52}
                style={{ color: C.teal, marginBottom: 16 }}
              />
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 22,
                  color: txt,
                  marginBottom: 10,
                }}
              >
                Message Sent!
              </h3>
              <p style={{ color: sub, fontSize: 15, lineHeight: 1.7 }}>
                Our team will respond within 2 hours. For urgent issues call our
                24/7 line.
              </p>
            </div>
          ) : (
            <div
              style={{
                background: dark ? "rgba(13,148,136,.07)" : "#fff",
                padding: "2rem",
                borderRadius: 18,
                border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
              }}
            >
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 20,
                  color: txt,
                  marginBottom: 20,
                }}
              >
                Send a Message
              </h3>
              {[
                ["name", "Name", "text", "Your name"],
                ["email", "Email", "email", "you@company.com"],
                ["subject", "Subject", "text", "How can we help?"],
              ].map(([k, l, t, ph]) => (
                <div key={k} style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: sub,
                      marginBottom: 5,
                    }}
                  >
                    {l}
                  </label>
                  <input
                    value={form[k]}
                    onChange={update(k)}
                    placeholder={ph}
                    type={t}
                    style={inpStyle}
                  />
                </div>
              ))}
              <div style={{ marginBottom: 20 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: sub,
                    marginBottom: 5,
                  }}
                >
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={4}
                  placeholder="Describe your issue..."
                  style={{ ...inpStyle, resize: "vertical" }}
                />
              </div>
              <button
                onClick={() => {
                  if (form.name && form.email) setSent(true);
                }}
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: 11,
                  background: `linear-gradient(135deg,${C.teal},${C.dark})`,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </div>
          )}
        </div>{" "}
        {/* end grid */}
      </Section>
    </Layout>
  );
}


// ─── Help Center ─────────────────────────────────────────────────────────────
export function HelpCenterPage() {
  const { dark } = useTheme();
  const w = useWindowWidth();
  const mob = w < 640;
  const txt = dark ? C.white : C.black;
  const sub = dark ? "#99F6E4" : C.tealD;

  const cats = [
    { icon: "Play", title: "Getting Started", count: 12 },
    { icon: "CreditCard", title: "Payments", count: 28 },
    { icon: "Link2", title: "API & Integrations", count: 34 },
    { icon: "Shield", title: "Security", count: 16 },
    { icon: "BarChart3", title: "Reporting", count: 19 },
    { icon: "PhoneCall", title: "Account & Billing", count: 11 },
  ];

  return (
    <Layout>
      <PageSEO
        title="Help Center"
        description="Browse Paydex's help center for guides, FAQs, and troubleshooting articles."
        keywords="Paydex help, payment support docs, fintech guides"
      />
      <PageHero
        tag="HELP CENTER"
        title="How Can We Help?"
        subtitle="Browse guides, troubleshooting articles, and API documentation."
      />
      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <div style={{ maxWidth: 640, margin: "0 auto 40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 18px",
              borderRadius: 12,
              background: dark ? "rgba(13,148,136,.1)" : "#fff",
              border: `1px solid ${C.teal}`,
            }}
          >
            <Search size={18} style={{ color: C.teal, flexShrink: 0 }} />
            <input
              placeholder="Search help articles..."
              style={{
                flex: 1,
                border: "none",
                background: "transparent",
                fontSize: 15,
                outline: "none",
                color: txt,
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {cats.map((c) => {
            const Icon = ICON_MAP[c.icon];
            return (
              <div
                key={c.title}
                style={{
                  padding: "22px 20px",
                  borderRadius: 14,
                  background: dark ? "rgba(13,148,136,.07)" : "#fff",
                  border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.13)"}`,
                  cursor: "pointer",
                  transition: "transform .2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-3px)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `linear-gradient(135deg,${C.teal},${C.dark})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    marginBottom: 14,
                  }}
                >
                  {Icon && <Icon size={18} />}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: txt,
                    marginBottom: 4,
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: 12, color: sub }}>{c.count} articles</p>
              </div>
            );
          })}
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2
            style={{
              fontWeight: 900,
              fontSize: mob ? 24 : 32,
              color: txt,
              marginBottom: 28,
              letterSpacing: "-0.8px",
            }}
          >
            Quick Answers
          </h2>
          <FAQBlock />
        </div>
      </Section>
    </Layout>
  );
}

// ─── System Status ────────────────────────────────────────────────────────────
export function SystemStatusPage() {
  const { dark } = useTheme();
  const txt = dark ? C.white : C.black;
  const sub = dark ? "#99F6E4" : C.tealD;

  const systems = [
    { name: "Payment Processing", status: "Operational", uptime: "99.99%" },
    { name: "API Gateway", status: "Operational", uptime: "99.98%" },
    { name: "Webhook Delivery", status: "Operational", uptime: "99.97%" },
    { name: "Dashboard", status: "Operational", uptime: "99.99%" },
    { name: "Reconciliation Engine", status: "Operational", uptime: "99.96%" },
    { name: "FX Engine", status: "Operational", uptime: "99.99%" },
  ];

  return (
    <Layout>
      <PageSEO
        title="System Status"
        description="Real-time status and uptime information for all Paydex services."
        keywords="Paydex status, system uptime, payment platform status"
      />
      <PageHero
        tag="SYSTEM STATUS"
        title="System Status"
        subtitle="Real-time status for all Paydex services."
      />
      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "20px 24px",
              borderRadius: 16,
              background: "rgba(16,185,129,.12)",
              border: "1px solid rgba(16,185,129,.3)",
              marginBottom: 32,
            }}
          >
            <CheckCircle2 size={28} style={{ color: "#10B981" }} />
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#10B981",
                }}
              >
                All Systems Operational
              </p>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: sub }}>
                Last updated: just now
              </p>
            </div>
          </div>
          {systems.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderRadius: 12,
                border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
                marginBottom: 10,
                background: dark ? "rgba(13,148,136,.05)" : "#fff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Activity size={18} style={{ color: C.teal }} />
                <span style={{ fontWeight: 600, fontSize: 15, color: txt }}>
                  {s.name}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span style={{ fontSize: 12, color: sub }}>
                  {s.uptime} uptime
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#10B981",
                    background: "rgba(16,185,129,.12)",
                    padding: "3px 10px",
                    borderRadius: 99,
                  }}
                >
                  {s.status}
                </span>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 40 }}>
            <SectionLabel>Incident History</SectionLabel>
            <div
              style={{
                padding: "20px",
                borderRadius: 14,
                background: dark ? "rgba(13,148,136,.07)" : "#fff",
                border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
              }}
            >
              <p style={{ color: sub, fontSize: 14, fontStyle: "italic" }}>
                No incidents in the past 90 days.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

// ─── Onboarding Guide ─────────────────────────────────────────────────────────
export function OnboardingGuidePage() {
  const { dark } = useTheme();
  const w = useWindowWidth();
  const mob = w < 640;
  const txt = dark ? C.white : C.black;
  const sub = dark ? "#99F6E4" : C.tealD;

  const steps = [
    {
      n: "01",
      title: "Submit Application",
      desc: "Fill out the Request Access form with your company details, use case, and expected payment volumes.",
      icon: "FileText",
    },
    {
      n: "02",
      title: "KYB Verification",
      desc: "Our compliance team reviews your business registration documents, directors, and company information within 24 hours.",
      icon: "Shield",
    },
    {
      n: "03",
      title: "Account Configuration",
      desc: "Your dedicated onboarding manager configures your account, payment rails, and approval workflows.",
      icon: "Layers",
    },
    {
      n: "04",
      title: "ERP Integration",
      desc: "Connect your ERP or accounting system via our pre-built connectors or REST API. Sandbox testing included.",
      icon: "Link2",
    },
    {
      n: "05",
      title: "Team Training",
      desc: "Live walkthrough of the dashboard, payment initiation, and reconciliation with your finance team.",
      icon: "Users",
    },
    {
      n: "06",
      title: "Go Live",
      desc: "First production payment processed. Dedicated support manager available for your first 30 days.",
      icon: "Zap",
    },
  ];

  return (
    <Layout>
      <PageSEO
        title="Onboarding Guide"
        description="Step-by-step guide to getting started with Paydex. Most clients go live within 3–5 business days."
        keywords="Paydex onboarding, payment platform setup, fintech onboarding guide"
      />
      <PageHero
        tag="ONBOARDING"
        title="From Application to First Payment in 5 Days"
        subtitle="Our onboarding process is designed to be fast, thorough, and fully supported — no surprises."
        cta="Start Application"
      />
      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mob ? "1fr" : "repeat(2,1fr)",
            gap: 20,
          }}
        >
          {steps.map((s, i) => {
            const Icon = ICON_MAP[s.icon];
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 18,
                  padding: "22px 20px",
                  borderRadius: 16,
                  background: dark ? "rgba(13,148,136,.07)" : "#fff",
                  border: `1px solid ${dark ? "rgba(13,148,136,.18)" : "rgba(13,148,136,.13)"}`,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `linear-gradient(135deg,${C.teal},${C.dark})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontWeight: 700,
                      fontSize: 16,
                      color: txt,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: sub,
                      lineHeight: 1.65,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
      <Section style={{ background: dark ? "#042F2E" : "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <SectionLabel>FAQ</SectionLabel>
          <h2
            style={{
              fontWeight: 900,
              fontSize: mob ? 24 : 32,
              color: txt,
              marginBottom: 28,
              letterSpacing: "-0.8px",
            }}
          >
            Onboarding Questions
          </h2>
          <FAQBlock faqs={FAQS.slice(0, 4)} />
        </div>
      </Section>
      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <CTABanner />
      </Section>
    </Layout>
  );
}
