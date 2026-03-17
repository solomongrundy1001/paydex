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
      location: "New York, USA",
      bio: "Leads product vision and global expansion. Background in building scalable payment infrastructure and cross-border systems.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Elena Kovacs",
      role: "CTO & Co-Founder",
      location: "Amsterdam, Netherlands",
      bio: "Oversees platform architecture and engineering. متخصص in distributed systems and high-availability fintech infrastructure.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Daniel Brooks",
      role: "Chief Financial Officer",
      location: "London, UK",
      bio: "Drives financial strategy, compliance, and investor relations with a focus on sustainable fintech growth.",
      image: "https://res.cloudinary.com/db2gycegs/image/upload/v1773742801/cfo_lupoij.jpg"
    },
    {
      name: "Sophie Laurent",
      role: "Chief Risk Officer",
      location: "Paris, France",
      bio: "Leads risk, compliance, and regulatory strategy across multiple jurisdictions and payment ecosystems.",
      image: "https://res.cloudinary.com/db2gycegs/image/upload/v1773742801/sophie_mvmvam.jpg"
    },
    {
      name: "Ritesh Kamath",
      role: "VP Engineering",
      location: "Berlin, Germany",
      bio: "Builds and scales backend systems powering real-time global transactions and integrations.",
      image: "https://res.cloudinary.com/db2gycegs/image/upload/v1773742801/director_f1qcta.jpg"
    },
    {
      name: "James Walker",
      role: "VP Global Sales",
      location: "Toronto, Canada",
      bio: "Leads enterprise partnerships and global sales strategy across North America and emerging markets.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop&crop=faces"
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
                margin: "0 auto 18px",
                overflow:"hidden"
              }}>
                {/* {t.init} */}
                <img 
                  src={t.image}
                  onContextMenu={(e) => e.preventDefault()}
                  alt={`image of ${t.name} - ${t.role}`} 
                  width={'100%'} 
                  height={'100%'} 
                  style={{objectFit:"cover"}}
                />
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

