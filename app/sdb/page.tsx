import { Metadata } from 'next';
import HeroSdb from '@/components/sections/HeroSdb';
import AutoScrollSlider from '@/components/sections/AutoScrollSlider';
import ServicePresentationSection from '@/components/sections/ServicePresentationSection';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import DirectorWordSection from '@/components/sections/DirectorWordSection';
import { NosPrestations } from '@/components/blocks/nos-prestations';
import SdbGallery from '@/components/sections/SdbGallery';
import SdbTestimonialCarousel from '@/components/sections/SdbTestimonialCarousel';
import SdbFaq from '@/components/sections/SdbFaq';
import { sdbPageData } from '@/data/sdbPageData';

export const metadata: Metadata = sdbPageData.metadata;

export default function SdbPage() {
  return (
    <>
      <HeroSdb {...sdbPageData.hero} />
      <TestimonialCarousel testimonials={sdbPageData.testimonials} />
      <SdbGallery className="section-padding bg-[#050505] py-24" />
      <section className="section-padding bg-[#050505] py-24">
        <div className="container-custom">
          <SdbFaq />
        </div>
      </section>
      <AutoScrollSlider />
      <ServicePresentationSection {...sdbPageData.servicePresentation} />
      <DirectorWordSection />
      <NosPrestations title="Nos autres corps de métiers" />
    </>
  );
}
