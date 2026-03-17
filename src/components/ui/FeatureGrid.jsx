export default function FeatureGrid({ features }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl shadow-sm border bg-white dark:bg-gray-900"
        >
          <div className="text-2xl mb-4">{f.icon}</div>
          <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  );
}