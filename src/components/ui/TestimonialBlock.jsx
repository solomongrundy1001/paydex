export default function TestimonialBlock() {
  const testimonials = [
    {
      quote:
        "Paydex helped us streamline multi-region payment processing across the US and Spain without operational friction.",
      author: "VP of Finance, New York, USA"
    },
    {
      quote:
        "Expanding into European markets became seamless thanks to Paydex’s infrastructure and compliance support.",
      author: "Payments Director, Madrid, Spain"
    },
    {
      quote:
        "Reliable, scalable, and built for enterprise growth.",
      author: "CFO, Milan, Italy"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 py-16">
      {testimonials.map((t, i) => (
        <div key={i} className="p-6 border rounded-2xl">
          <p className="mb-4 italic">"{t.quote}"</p>
          <p className="font-semibold">{t.author}</p>
        </div>
      ))}
    </div>
  );
}