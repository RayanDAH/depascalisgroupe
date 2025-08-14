'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const logoImages = [
  {
    src: '/images/Logo-groupe.png',
    alt: 'Logo De Pascalis Groupe - Entreprise multicompétences de rénovation',
  },
  {
    src: '/images/Logo-batiment.png',
    alt: 'Logo De Pascalis Bâtiment - Spécialiste construction et rénovation',
  },
  {
    src: '/images/Logo-devis.png',
    alt: 'Logo De Pascalis Devis - Service de devis rapide en 24h',
  },
  {
    src: '/images/Logo-immobilier.png',
    alt: 'Logo De Pascalis Immobilier - Expert en rénovation immobilière',
  },
  {
    src: '/images/Logo-mobilier.png',
    alt: 'Logo De Pascalis Mobilier - Mobilier sur mesure et aménagement',
  },
  {
    src: '/images/Logo-signature.png',
    alt: 'Logo De Pascalis Signature - Gamme premium de prestations haut de gamme',
  },
];

export default function AutoScrollSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollWidth = slider.scrollWidth;
    const viewportWidth = slider.offsetWidth;
    let currentScroll = 0;

    const animate = () => {
      currentScroll += 0.5;
      if (currentScroll >= scrollWidth / 2) {
        currentScroll = 0;
      }
      if (slider) {
        slider.scrollLeft = currentScroll;
      }
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Un groupe multicompétences
        </motion.h2>

        <div ref={sliderRef} className="overflow-hidden whitespace-nowrap">
          <div className="inline-block">
            {[...logoImages, ...logoImages].map((logo, index) => (
              <div key={index} className="inline-block px-8 align-middle">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
