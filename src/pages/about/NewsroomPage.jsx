import { useState } from "react";
import { useTheme }       from "../../context/ThemeContext";
import { C }              from "../../constants";
import { articles }       from "../../constants/article_data";
import { useWindowWidth } from "../../hooks";
import { Layout }         from "../../components/layout";
import { PageSEO, Section, CTABanner } from "../../components/ui";
import { PageHero }       from "../../components/block";
import ArticleCard        from "../../components/block/ArticleCard.jsx";
import ArticleModal       from "../../components/block/ArticleModal.jsx";

const TAGS = ["ALL", "ANNOUNCEMENT", "MILESTONE", "PRODUCT", "EXPANSION", "PARTNERSHIP", "AWARD"];

export default function NewsroomPage() {
  const { dark }                  = useTheme();
  const [selected, setSelected]   = useState(null);
  const [activeTag, setActiveTag] = useState("ALL");
  const mob                       = useWindowWidth() < 640;
  const sub                       = dark ? "#99F6E4" : C.tealD;

  const filtered = activeTag === "ALL"
    ? articles
    : articles.filter(a => a.tag === activeTag);

  return (
    <Layout>
      <PageSEO
        title="Newsroom"
        description="Latest news, announcements, and press releases from Paydex."
        keywords="Paydex news, American fintech press"
      />

      <PageHero
        tag="NEWSROOM"
        title="Latest from Paydex"
        subtitle="Product launches, milestones, partnerships, and press coverage."
      />

      <Section style={{ background: dark ? "#031F1E" : "#F0FDFA" }}>

        {/* Filter tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {TAGS.map(tag => {
            const active = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  padding: "7px 16px",
                  borderRadius: 99,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: `1px solid ${active ? C.teal : dark ? "rgba(13,148,136,.3)" : "rgba(13,148,136,.2)"}`,
                  background: active ? `linear-gradient(135deg,${C.teal},${C.dark})` : "transparent",
                  color: active ? "#fff" : dark ? "#5EEAD4" : C.tealD,
                  transition: "all .15s",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Count */}
        <p style={{ fontSize: 13, color: sub, marginBottom: 24 }}>
          {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          {activeTag !== "ALL" ? ` in ${activeTag}` : ""}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)", gap: 20 }}>
            {filtered.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
                onRead={() => setSelected(article)}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <p style={{ fontSize: 16, color: sub }}>No articles in this category yet.</p>
          </div>
        )}
      </Section>

      <Section style={{ background: dark ? "#042F2E" : "#fff" }}>
        <CTABanner />
      </Section>

      {/* Modal — outside sections so it overlays everything */}
      {selected && (
        <ArticleModal
          article={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </Layout>
  );
}
