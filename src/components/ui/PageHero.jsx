export default function PageHero({ title, subtitle }) {
  return (
    <div className="py-24 px-6 md:px-12 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}