// import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";
import { useWindowWidth } from "../../hooks";
import { Layout } from "../../components/layout";
import { PageSEO, Section, CTABanner } from "../../components/ui";
import { PageHero } from "../../components/block";

export function LeadershipPage() {

  const { dark } = useTheme();
  const w = useWindowWidth();
  const mob = w < 640;

  const txt = dark ? C.white : C.black;
  const sub = dark ? "#99F6E4" : C.tealD;

  const team = [

    {
      name: "Michael Carter",
      role: "CEO & Co-Founder",
      bio: "Former Stripe infrastructure lead. 18 years building global payment systems.",
      init: "MC"
    },

    {
      name: "Elena Kovacs",
      role: "CTO & Co-Founder",
      bio: "Previously engineering director at Adyen. Expert in large-scale financial systems.",
      init: "EK"
    },

    {
      name: "Daniel Brooks",
      role: "Chief Financial Officer",
      bio: "Former Morgan Stanley executive specializing in fintech growth and capital strategy.",
      init: "DB"
    },

    {
      name: "Sophie Laurent",
      role: "Chief Risk Officer",
      bio: "Former EU payments regulator with 20 years in compliance and financial governance.",
      init: "SL"
    },

    {
      name: "Lucas Schneider",
      role: "VP Engineering",
      bio: "Ex-Google distributed systems engineer focused on scalable infrastructure.",
      init: "LS"
    },

    {
      name: "James Walker",
      role: "VP Global Sales",
      bio: "15+ years leading enterprise fintech sales across North America and Europe.",
      init: "JW"
    }

  ];

  return (

    <Layout>

      <PageSEO
        title="Leadership"
        description="Meet the leadership team building Paydex — operators and engineers behind global payment infrastructure."
      />

      <PageHero
        tag="LEADERSHIP"
        title="Built by Operators"
        subtitle="The Paydex team brings decades of experience from the world's leading fintech companies."
      />

      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)",
          gap: 20
        }}>

          {team.map(t => (

            <div key={t.name}
              style={{
                padding: "28px 24px",
                borderRadius: 16,
                background: dark ? "rgba(13,148,136,.08)" : "#fff",
                border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
                textAlign: "center"
              }}>

              <div style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: `linear-gradient(135deg,${C.teal},${C.dark})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 800,
                fontSize: 20,
                margin: "0 auto 18px"
              }}>
                {t.init}
              </div>

              <h3 style={{
                fontWeight: 700,
                fontSize: 17,
                color: txt,
                marginBottom: 4
              }}>
                {t.name}
              </h3>

              <p style={{
                fontSize: 13,
                color: C.teal,
                fontWeight: 600,
                marginBottom: 12
              }}>
                {t.role}
              </p>

              <p style={{
                fontSize: 13,
                color: sub,
                lineHeight: 1.65
              }}>
                {t.bio}
              </p>

            </div>

          ))}

        </div>

      </Section>

      <Section style={{ background: dark ? "#042F2E" : "#fff" }}>
        <CTABanner />
      </Section>

    </Layout>

  );
}

