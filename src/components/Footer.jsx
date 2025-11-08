export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} GeoLab — Learn Geometry Visually.</p>
        <div className="text-xs text-gray-500">Built with an interactive 3D scene and modern UI.</div>
      </div>
    </footer>
  );
}
