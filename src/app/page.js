import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import OrbitHero from './components/OrbitHero';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/footer';

export default function HomePage() {
  return (
    <main className="font-sans">
      
      <Hero />
      <StatsSection />
      <OrbitHero />
      <FeaturedProjects />
      
    </main>
  );
}