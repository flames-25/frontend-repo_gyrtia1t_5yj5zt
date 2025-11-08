export default function ConceptCards() {
  const concepts = [
    {
      title: 'Pythagorean Theorem',
      desc: 'In a right triangle, a² + b² = c². Visualize relationships between sides.',
    },
    {
      title: 'Circle Theorems',
      desc: 'Central angles, arcs, chords, and tangents. Learn through interactive examples.',
    },
    {
      title: 'Transformations',
      desc: 'Translations, rotations, reflections, and dilations with coordinate geometry.',
    },
  ];

  return (
    <section id="concepts" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Concepts</h2>
        <p className="text-gray-600 mt-2">Bite-sized visual explanations to build strong intuition.</p>

        <div id="explore" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {concepts.map((c) => (
            <article key={c.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">{c.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{c.desc}</p>
              <div className="mt-4 text-blue-700 text-sm font-medium">Learn more →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
