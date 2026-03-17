import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C, STATS } from "../../constants";
import { useWindowWidth } from "../../hooks";
import { Layout } from "../../components/layout";
import { PageSEO, SectionLabel, Btn, Section, CTABanner } from "../../components/ui";
import { PageHero, FeatureGrid, TestimonialBlock } from "../../components/block";



export function OurStoryPage() {

  const { dark } = useTheme();
  const w = useWindowWidth();
  const mob = w < 640;

  const txt = dark ? C.white : C.black;
  const sub = dark ? "#99F6E4" : C.tealD;

  const milestones = [
    { year: "2018", event: "Paydex founded by fintech engineers and operators who previously built infrastructure at Stripe, Adyen, and PayPal." },
    { year: "2019", event: "First enterprise clients onboarded across Europe and North America. Early focus on contractor payouts and vendor payments." },
    { year: "2020", event: "Launch of Paydex API — unified infrastructure for global payouts and payment orchestration." },
    { year: "2021", event: "Series A funding raised to expand global payment rails and compliance coverage." },
    { year: "2022", event: "Paydex expands its payout infrastructure from the United States into Europe, marking the company's first international expansion." },
    { year: "2023", event: "Enterprise client base crosses 800 companies across logistics, fintech, SaaS, and marketplaces." },
    { year: "2024", event: "Paydex processes billions in annual payment volume and launches real-time payout infrastructure." }
  ];

  return (
    <Layout>

      <PageSEO
        title="Our Story"
        description="How Paydex built global payment infrastructure that helps businesses move money across borders faster and more reliably."
        keywords="Paydex company story, global payments infrastructure, fintech platform"
      />

      <PageHero
        tag="ABOUT PAYDEX"
        title="Building the Infrastructure That Moves Global Money"
        subtitle="Modern businesses operate globally. Paydex was built to give them the payment infrastructure to match."
      />

      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
          gap: 40,
          alignItems: "center"
        }}>

          <div>

            <SectionLabel>Our Mission</SectionLabel>

            <h2 style={{
              fontWeight: 900,
              fontSize: mob ? 26 : 36,
              color: txt,
              marginBottom: 18,
              letterSpacing: "-0.8px"
            }}>
              Money should move as fast as business
            </h2>

            <p style={{
              color: sub,
              fontSize: 15,
              lineHeight: 1.8,
              marginBottom: 16
            }}>
              Businesses today operate across borders, currencies, and markets.
              Yet most payment infrastructure was designed decades ago for a
              slower world. Fragmented bank integrations, limited visibility,
              and manual reconciliation create friction for modern finance teams.
            </p>

            <p style={{
              color: sub,
              fontSize: 15,
              lineHeight: 1.8
            }}>
              Paydex was built to remove that friction. Our platform connects
              global payment rails, automates disbursements, and gives
              enterprises the tools to move money instantly, securely,
              and at scale.
            </p>

          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14
          }}>

            {STATS.map(s => (

              <div key={s.label}
                style={{
                  padding: "22px 18px",
                  borderRadius: 14,
                  background: dark ? "rgba(13,148,136,.1)" : "rgba(13,148,136,.06)",
                  border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
                  textAlign: "center"
                }}>

                <p style={{
                  margin: 0,
                  fontWeight: 900,
                  fontSize: 28,
                  color: C.teal
                }}>
                  {s.value}
                </p>

                <p style={{
                  margin: "4px 0 0",
                  fontSize: 12,
                  color: sub
                }}>
                  {s.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </Section>


      <Section style={{ background: dark ? "#042F2E" : "#fff" }}>

        <SectionLabel>Milestones</SectionLabel>

        <h2 style={{
          fontWeight: 900,
          fontSize: mob ? 24 : 34,
          color: txt,
          marginBottom: 36,
          letterSpacing: "-0.8px"
        }}>
          The Paydex journey
        </h2>

        <div style={{ position: "relative" }}>

          <div style={{
            position: "absolute",
            left: mob ? 16 : "50%",
            top: 0,
            bottom: 0,
            width: 2,
            background: `linear-gradient(${C.teal},${C.dark})`,
            transform: mob ? "none" : "translateX(-50%)"
          }} />

          {milestones.map((m, i) => (

            <div key={m.year}
              style={{
                display: "flex",
                gap: 24,
                marginBottom: 32,
                flexDirection: mob ? "row" : i % 2 === 0 ? "row-reverse" : "row",
                alignItems: "flex-start",
                position: "relative"
              }}>

              {!mob && <div style={{ flex: 1 }} />}

              <div style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: `linear-gradient(135deg,${C.teal},${C.dark})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 800,
                fontSize: 11,
                flexShrink: 0,
                zIndex: 1
              }}>
                {m.year.slice(2)}
              </div>

              <div style={{
                flex: 1,
                padding: "14px 18px",
                borderRadius: 14,
                background: dark ? "rgba(13,148,136,.08)" : "rgba(13,148,136,.05)",
                border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.12)"}`
              }}>

                <p style={{
                  margin: "0 0 4px",
                  fontWeight: 700,
                  fontSize: 13,
                  color: C.teal
                }}>
                  {m.year}
                </p>

                <p style={{
                  margin: 0,
                  fontSize: 14,
                  color: sub,
                  lineHeight: 1.6
                }}>
                  {m.event}
                </p>

              </div>

            </div>

          ))}

        </div>

      </Section>

      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <CTABanner />
      </Section>

    </Layout>
  );
}


