import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AutoScrollSlider from '@/components/sections/AutoScrollSlider';
import ServicePresentationSection from '@/components/sections/ServicePresentationSection';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import DirectorWordSection from '@/components/sections/DirectorWordSection';
import { NosPrestations } from '@/components/blocks/nos-prestations';
import { plomberiePageData } from '@/data/plomberiePageData';

export const metadata: Metadata = plomberiePageData.metadata;

export default function PlomberiePage() {
  return (
    <>
      <Hero {...plomberiePageData.hero} />
      <AutoScrollSlider />
      <ServicePresentationSection {...plomberiePageData.servicePresentation} />
      <TestimonialCarousel testimonials={plomberiePageData.testimonials} />
      <DirectorWordSection />
      <NosPrestations title="Nos autres corps de métiers" />
    </>
  );
}
