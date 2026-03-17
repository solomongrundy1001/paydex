import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";
import { useWindowWidth } from "../../hooks";
import { Layout } from "../../components/layout";
import {
  PageSEO,
  SectionLabel,
  Btn,
  Section,
  CTABanner,
} from "../../components/ui";
import { PageHero, FeatureGrid } from "../../components/block";
import { roles } from "../../constants/careers_data";
import CareerCard from "../../components/block/CareerCard";
import { useState } from "react";
import CareerModal from "../../components/block/CareerModal";

export function CareersPage() {
  const { dark } = useTheme();
   const w = useWindowWidth();
  const mob = w < 640;
  const tab  = w < 1024;
  const txt = dark ? C.white : C.black;
//   const sub = dark ? "#99F6E4" : C.tealD;
  const [selected, setSelected] = useState(null);


  return (
    <Layout>
      <PageSEO
        title="Careers"
        description="Join Paydex. Explore open roles across engineering, product, operations, and customer success."
        keywords="Paydex careers, fintech jobs USA, payments infrastructure careers"
      />

      <PageHero
        tag="CAREERS"
        title="Help Build the Future of Payment Infrastructure"
        subtitle="We're a team of engineers, operators, and builders working to make business payments faster, more reliable, and easier to manage."
        cta="View Open Roles"
        ctaTo="#open-roles"
      />

      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <SectionLabel>Why Paydex</SectionLabel>

        <h2
          style={{
            fontWeight: 900,
            fontSize: mob ? 24 : 34,
            color: txt,
            marginBottom: 36,
            letterSpacing: "-0.8px",
          }}
        >
          A place to do your best work
        </h2>

        <FeatureGrid
          features={[
            {
              icon: "Globe",
              title: "Work That Matters",
              desc: "Your work powers the infrastructure businesses rely on to move money across the United States and Europe.",
            },
            {
              icon: "TrendingUp",
              title: "Rapid Growth",
              desc: "We're building a modern financial infrastructure company with opportunities to grow alongside the platform.",
            },
            {
              icon: "Shield",
              title: "Top Compensation",
              desc: "Competitive salaries, performance bonuses, and benefits aligned with leading fintech companies.",
            },
            {
              icon: "Users",
              title: "Collaborative Team",
              desc: "Work with experienced operators, engineers, and product leaders across our offices in the United States.",
            },
          ]}
        />
      </Section>

      <Section
        id={"open-roles"}
        style={{ background: dark ? "#042F2E" : "#fff" }}
      >
        <SectionLabel>Open Roles</SectionLabel>

        <h2
          style={{
            fontWeight: 900,
            fontSize: mob ? 24 : 34,
            color: txt,
            marginBottom: 30,
            letterSpacing: "-0.8px",
            
          }}
        >
          Join the team
        </h2>

        <div style={{ background: dark ? "#031F1E" : "#F0FDFA", borderRadius:"8px" }}>
          <div
            style={{
                display: "grid",
                gridTemplateColumns: mob ? "1fr" : tab ? "repeat(2,1fr)" : "repeat(3,1fr)",
                gap: 22,
                padding: "25px",
                border: `1px solid ${dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"}`,
                borderRadius:"8px",
            }}
          >
            {roles.map((c) => (
              <CareerCard key={c.id} career={c} onRead={() => setSelected(c)} />
            ))}
          </div>
        </div>

      </Section>

      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <CTABanner
          title="Don't see your role?"
          body="We're always looking for exceptional people. Send us your resume and tell us how you could contribute to Paydex."
        />
      </Section>

      {/* Modal */}
      {selected && (
        <CareerModal
          career={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </Layout>
  );
}
