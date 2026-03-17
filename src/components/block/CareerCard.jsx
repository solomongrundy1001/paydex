import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { C } from "../../constants";
import { Btn } from "../ui";

export default function CareerCard({ career, onRead }) {
  const { dark } = useTheme();
  const sub = dark ? "#5EEAD4" : C.tealD;
  const txt = dark ? C.white : C.black;
 

  return (
    <div
      style={{
        borderRadius: 18,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform .2s, box-shadow .2s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        // e.currentTarget.style.boxShadow = "0 14px 36px rgba(13,148,136,.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
      onClick={()=>onRead}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection:"column",
          gap: 12,
          flexWrap: "wrap",
          padding: "18px 20px",
          borderRadius: 12,
          border: `1px solid ${
            dark ? "rgba(13,148,136,.2)" : "rgba(13,148,136,.15)"
          }`,
          marginBottom: 12,
          background: dark ? "rgba(13,148,136,.05)" : "#fff",
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontWeight: 700, fontSize: 16, color: txt }}>
            {career.title}
          </h3>

          <p style={{ margin: "4px 0 0", fontSize: 12, color: sub }}>
            {career.dept} · {career.loc} · {career.type}
          </p>
        </div>

        <Btn size="sm"  onClick={()=>onRead()}>
          Apply Now <ArrowRight size={13} />
        </Btn>
      </div>
    </div>
  );
}
