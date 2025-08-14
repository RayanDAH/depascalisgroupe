'use client';

import Image from 'next/image';
import { useState } from 'react';
import ImageLightbox from '@/components/ui/image-lightbox';

type Props = { className?: string };

const images = [
  {
    src: '/SDB-1 .jpeg',
    alt: 'Salle de bain moderne rénovée par De Pascalis avec douche italienne et carrelage contemporain',
  },
  {
    src: '/SDB-2 .jpeg',
    alt: 'Rénovation salle de bain De Pascalis - Baignoire et finitions haut de gamme',
  },
  {
    src: '/SDB-4.jpg',
    alt: 'Salle de bain complète rénovée par De Pascalis avec meuble vasque design',
  },
  {
    src: '/SDB-5.jpeg',
    alt: "Transformation salle de bain De Pascalis - Douche à l'italienne et carrelage mural",
  },
  {
    src: '/SDB-6.jpeg',
    alt: 'Rénovation complète salle de bain par De Pascalis - Aménagement optimisé',
  },
  {
    src: '/SDB-7.png',
    alt: 'Salle de bain moderne De Pascalis - Design contemporain et fonctionnel',
  },
];

export default function SdbGallery({ className }: Props) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <section className={className}>
        <h2 className="mb-8 text-center text-xl font-bold text-white sm:text-3xl">
          Nos <span className="text-gold">réalisations</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>
      <ImageLightbox
        images={images}
        isOpen={isLightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onIndexChange={setCurrentImageIndex}
      />
    </>
  );
}
