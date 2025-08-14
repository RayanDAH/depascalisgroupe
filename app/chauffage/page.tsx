import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AutoScrollSlider from '@/components/sections/AutoScrollSlider';
import ServicePresentationSection from '@/components/sections/ServicePresentationSection';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import DirectorWordSection from '@/components/sections/DirectorWordSection';
import { NosPrestations } from '@/components/blocks/nos-prestations';
import { chauffagePageData } from '@/data/chauffagePageData';

export const metadata: Metadata = chauffagePageData.metadata;

export default function ChauftagePage() {
  return (
    <>
      <Hero {...chauffagePageData.hero} />
      <AutoScrollSlider />
      <ServicePresentationSection {...chauffagePageData.servicePresentation} />
      <TestimonialCarousel testimonials={chauffagePageData.testimonials} />
      <DirectorWordSection />
      <NosPrestations title="Nos autres corps de métiers" />
    </>
  );
}
