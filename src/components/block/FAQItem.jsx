import { Plus, Minus } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  const { dark } = useTheme();

  return (
    <div
      style={{
        marginBottom: 10,
        borderRadius: 13,
        border: `1px solid ${isOpen ? C.teal : dark ? "rgba(13,148,136,.25)" : "rgba(13,148,136,.2)"}`,
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "17px 20px",
          background: isOpen
            ? dark ? "rgba(13,148,136,.12)" : "rgba(13,148,136,.06)"
            : "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 14, color: dark ? C.white : C.black, textAlign: "left" }}>
          {question}
        </span>
        <div style={{ color: C.teal, flexShrink: 0, marginLeft: 12 }}>
          {isOpen ? <Minus size={17} /> : <Plus size={17} />}
        </div>
      </button>

      {isOpen && (
        <div style={{ padding: "4px 20px 18px", background: dark ? "rgba(13,148,136,.05)" : "rgba(13,148,136,.03)" }}>
          <p style={{ margin: 0, fontSize: 14, color: dark ? "#99F6E4" : C.tealD, lineHeight: 1.75 }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
