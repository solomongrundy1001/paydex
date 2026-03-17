import { useState } from "react";
import { C } from "../../constants/color";
import { useTheme } from "../../context/ThemeContext";
import { FAQS } from "../../constants/faq_data";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

export function FAQBlock({ faqs = FAQS }) {
  const [open, setOpen] = useState(null);
  const { dark } = useTheme();
  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} style={{ marginBottom: 10, borderRadius: 13, border: `1px solid ${open === i ? C.teal : (dark ? "rgba(13,148,136,.25)" : "rgba(13,148,136,.2)")}`, overflow: "hidden" }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "17px 20px", background: open === i ? (dark ? "rgba(13,148,136,.12)" : "rgba(13,148,136,.06)") : "transparent", border: "none", cursor: "pointer" }}>
            <span style={{ fontWeight: 600, fontSize: 14, color: dark ? C.white : C.black, textAlign: "left" }}>{f.q}</span>
            <div style={{ color: C.teal, flexShrink: 0, marginLeft: 12 }}>{open === i ? <Minus size={17} /> : <Plus size={17} />}</div>
          </button>
          {open === i && (
            <div style={{ padding: "4px 20px 18px", background: dark ? "rgba(13,148,136,.05)" : "rgba(13,148,136,.03)" }}>
              <p style={{ margin: 0, fontSize: 14, color: dark ? "#99F6E4" : C.tealD, lineHeight: 1.75 }}>{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
