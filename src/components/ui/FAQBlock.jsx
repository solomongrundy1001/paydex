export default function FAQBlock() {
  const faqs = [
    {
      q: "Is Paydex available outside the United States?",
      a: "Yes. While headquartered in the US, Paydex is expanding across Spain, Italy, and France."
    },
    {
      q: "Does Paydex support enterprise scaling?",
      a: "Absolutely. Our infrastructure is built for high-growth US companies expanding into Europe."
    },
    {
      q: "Is Paydex compliant with US and EU regulations?",
      a: "Yes. We align with US financial standards and European regulatory requirements."
    }
  ];

  return (
    <div className="py-16">
      {faqs.map((f, i) => (
        <div key={i} className="mb-6">
          <h4 className="font-semibold mb-2">{f.q}</h4>
          <p className="text-gray-600 dark:text-gray-400">{f.a}</p>
        </div>
      ))}
    </div>
  );
}