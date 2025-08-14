import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AutoScrollSlider from '@/components/sections/AutoScrollSlider';
import ServicePresentationSection from '@/components/sections/ServicePresentationSection';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import DirectorWordSection from '@/components/sections/DirectorWordSection';
import { NosPrestations } from '@/components/blocks/nos-prestations';
import { pompeAChaleurPageData } from '@/data/pompeAChaleurPageData';

export const metadata: Metadata = pompeAChaleurPageData.metadata;

export default function PompeAChaleurPage() {
  return (
    <>
      <Hero {...pompeAChaleurPageData.hero} />
      <AutoScrollSlider />
      <ServicePresentationSection
        {...pompeAChaleurPageData.servicePresentation}
      />
      <TestimonialCarousel testimonials={pompeAChaleurPageData.testimonials} />
      <DirectorWordSection />
      <NosPrestations title="Nos autres corps de métiers" />
    </>
  );
}
