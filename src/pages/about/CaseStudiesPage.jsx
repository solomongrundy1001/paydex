import { useState } from "react";
import { useTheme }        from "../../context/ThemeContext";
import { C }               from "../../constants";
import { CASE_STUDIES }    from "../../constants/case_studies_data";
import { useWindowWidth }  from "../../hooks";
import { Layout }          from "../../components/layout";
import { PageSEO, SectionLabel, Section, CTABanner } from "../../components/ui";
import { PageHero, TestimonialBlock } from "../../components/block";
import CaseStudyCard       from "../../components/block/CaseStudyCard.jsx";
import CaseStudyModal      from "../../components/block/CaseStudyModal.jsx";

export default function CaseStudiesPage() {
  const { dark }                  = useTheme();
  const [selected, setSelected]   = useState(null);
  const mob                       = useWindowWidth() < 640;
  const txt                       = dark ? C.white : C.black;

  return (
    <Layout>
      <PageSEO
        title="Case Studies"
        description="Real outcomes from Paydex enterprise clients across Africa."
        keywords="Paydex case studies, enterprise payments outcomes"
      />

      <PageHero
        tag="CASE STUDIES"
        title="Real Clients. Real Outcomes."
        subtitle="See how leading enterprises use Paydex to transform their payment operations."
      />

      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(2,1fr)", gap: 22 }}>
          {CASE_STUDIES.map(c => (
            <CaseStudyCard
              key={c.id}
              caseStudy={c}
              onRead={() => setSelected(c)}
            />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section style={{ background: dark ? "#042F2E" : "#fff" }}>
        <SectionLabel>What They Say</SectionLabel>
        <h2 style={{ fontWeight: 900, fontSize: mob ? 24 : 34, color: txt, marginBottom: 36, letterSpacing: "-0.8px" }}>
          In their own words
        </h2>
        <TestimonialBlock />
      </Section>

      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
        <CTABanner />
      </Section>

      {/* Modal */}
      {selected && (
        <CaseStudyModal
          caseStudy={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </Layout>
  );
}
