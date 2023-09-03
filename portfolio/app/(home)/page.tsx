import About from '@/components/about';
import ArrowDownSign from '@/components/arrow-down';
import HeroSection from '@/components/hero/hero-section';
import Container from '@/components/ui/container';

export default async function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <ArrowDownSign />
      </div>
      <About />
    </Container>
  );
}
