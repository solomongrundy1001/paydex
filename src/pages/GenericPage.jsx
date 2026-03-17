import Layout from "../components/layout/Layout";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import FeatureGrid from "../components/ui/FeatureGrid";
import CTABanner from "../components/ui/CTABanner";
import PageSEO from "../components/ui/PageSEO";

export default function GenericPage({ title, subtitle, features }) {
  return (
    <Layout>
      <PageSEO
        title={title}
        description={`Learn more about ${title} at Paydex.`}
      />

      <PageHero title={title} subtitle={subtitle} />

      <Section>
        <FeatureGrid features={features} />
      </Section>

      <Section>
        <CTABanner />
      </Section>
    </Layout>
  );
}