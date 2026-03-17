import { ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { C } from "../constants/color";
import { Layout } from "../components/layout";
import { PageSEO, Btn } from "../components/ui";

export default function NotFoundPage() {
  const { dark } = useTheme();
  const txt = dark ? C.white : C.black;
  const sub = dark ? "#99F6E4" : C.tealD;
  return (
    <Layout>
      <PageSEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
        <div>
          <p style={{ fontSize: 96, fontWeight: 900, color: C.teal, margin: "0 0 16px", lineHeight: 1 }}>404</p>
          <h1 style={{ fontWeight: 900, fontSize: 32, color: txt, marginBottom: 14 }}>Page not found</h1>
          <p style={{ color: sub, fontSize: 16, marginBottom: 28 }}>The page you're looking for doesn't exist or has been moved.</p>
          <Btn to="/">Back to Home <ArrowRight size={15} /></Btn>
        </div>
      </section>
    </Layout>
  );
}
