import { useWindowWidth } from "../../hooks";

export default function Section({ children, style = {}, id }) {
  const w   = useWindowWidth();
  const mob = w < 640;

  return (
    <section id={id} style={{ padding: mob ? "3rem 1.25rem" : "5rem 2rem", ...style }}>
      <div style={{ maxWidth: "100%", margin: "0 auto"}}>
        {children}
      </div>
    </section>
  );
}
