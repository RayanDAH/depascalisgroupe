import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import DirectorWordSection from '@/components/sections/DirectorWordSection';
import AutoScrollSlider from '@/components/sections/AutoScrollSlider';
import RealizationsSection from '@/components/sections/RealizationsSection';
import { NosPrestations } from '@/components/blocks/nos-prestations';
import { homePageData } from '@/data/homePageData';

export default function Home() {
  return (
    <>
      <Hero {...homePageData.hero} />
      <AutoScrollSlider />
      <TestimonialsSection />
      <NosPrestations />
      <RealizationsSection />
      <DirectorWordSection />
      <WhyChooseUs />
    </>
  );
}
