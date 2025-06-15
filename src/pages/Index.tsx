
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import FeaturedPrompts from '@/components/FeaturedPrompts';
import AboutSection from '@/components/AboutSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <FeaturedPrompts />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
