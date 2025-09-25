import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import OrbitHero from './components/OrbitHero';
import FeaturedProjects from './components/FeaturedProjects';
export default function HomePage() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <StatsSection />
      <OrbitHero />
      <FeaturedProjects />
    </main>
  );
}