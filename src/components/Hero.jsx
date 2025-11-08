import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] w-full">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-6xl mx-auto px-4 pb-10 w-full">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Learn Geometry Visually
          </h1>
          <p className="mt-3 max-w-xl text-gray-600">
            An interactive, futuristic lab where shapes, theorems, and formulas come alive.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#calculator" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-700 transition-colors">
              Open Calculator
            </a>
            <a href="#concepts" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-5 py-2.5 font-medium shadow border border-gray-200 hover:bg-gray-50 transition-colors">
              Explore Concepts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
