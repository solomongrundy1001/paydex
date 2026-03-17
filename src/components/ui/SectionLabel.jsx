import { C } from "../../constants";

export default function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: ".14em",
        color: C.teal,
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      {children}
    </p>
  );
}
