import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GeometryCalculator from './components/GeometryCalculator';
import ConceptCards from './components/ConceptCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <GeometryCalculator />
        <ConceptCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
