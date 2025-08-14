import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AutoScrollSlider from '@/components/sections/AutoScrollSlider';
import ServicePresentationSection from '@/components/sections/ServicePresentationSection';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import DirectorWordSection from '@/components/sections/DirectorWordSection';
import { NosPrestations } from '@/components/blocks/nos-prestations';
import { electricitePageData } from '@/data/electricitePageData';

export const metadata: Metadata = electricitePageData.metadata;

export default function ElectricitePage() {
  return (
    <>
      <Hero {...electricitePageData.hero} />
      <AutoScrollSlider />
      <ServicePresentationSection
        {...electricitePageData.servicePresentation}
      />
      <TestimonialCarousel testimonials={electricitePageData.testimonials} />
      <DirectorWordSection />
      <NosPrestations title="Nos autres corps de métiers" />
    </>
  );
}
