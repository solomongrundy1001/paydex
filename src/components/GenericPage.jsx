import { useTheme } from "../context/ThemeContext";
import { useWindowWidth } from "../hooks";
import { C } from "../constants/color";
import { Layout } from "./layout";
import { PageSEO, SectionLabel, CTABanner, Section } from "./ui";
import { PageHero, FeatureGrid } from "./block";

export default function GenericPage({ seo, tag, title, subtitle, features, extraContent, cta = "Request Access", ctaTo = "/request-access" }) {
  const { dark } = useTheme();
  const w   = useWindowWidth();
  const mob = w < 640;

  return (
    <Layout>
      <PageSEO title={seo.title} description={seo.desc} keywords={seo.keywords} />
      <PageHero tag={tag} title={title} subtitle={subtitle} cta={cta} ctaTo={ctaTo} />
      {features && (
        <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>
          <SectionLabel>Key Capabilities</SectionLabel>
          <h2 style={{ fontWeight: 900, fontSize: mob ? 24 : 34, color: dark ? C.white : C.black, marginBottom: 36, letterSpacing: "-0.8px" }}>
            Built for how your business actually works
          </h2>
          <FeatureGrid features={features} />
        </Section>
      )}
      {extraContent}
      <Section style={{ background: dark ? "#042F2E" : "#fff" }}>
        <CTABanner />
      </Section>
    </Layout>
  );
}
