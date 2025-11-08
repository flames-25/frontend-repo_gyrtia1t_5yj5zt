import { Rocket, Ruler } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-blue-600" />
          <span className="font-bold tracking-tight text-gray-900">GeoLab</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#explore" className="hover:text-gray-900 transition-colors">Explore</a>
          <a href="#calculator" className="hover:text-gray-900 transition-colors flex items-center gap-1">
            <Ruler className="w-4 h-4" />
            Calculator
          </a>
          <a href="#concepts" className="hover:text-gray-900 transition-colors">Concepts</a>
        </nav>
      </div>
    </header>
  );
}
