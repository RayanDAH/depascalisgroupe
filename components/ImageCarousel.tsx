'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/imagegaleriedepascalis.png',
  '/imagegaleriedepascalis3jpeg.png',
  '/imagegaleriedepascalis4.png',
  '/imagegaleriedepascalis6.png',
  '/imagegaleriedepascalis7.png',
  '/imagegaleriedepascalis8.png',
  '/imagegaleriedepascalis9.png',
  '/imagegaleriedepascalis10.png',
  '/imagegaleriedepascalis12.png',
  '/imagegaleriedepascalis13.png',
  '/imagegaleriedepascalis14.png',
  '/imagegaleriedepascalis15.png',
  '/imagegaleriedepascalis16.png',
  '/imagegaleriedepascalis17.png',
  '/imagegaleriedepascalis18.png',
  '/imagegaleriedepascalis19.png',
  '/imagegaleriedepascalis20.png',
  '/SDB-2 .jpeg',
];

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [emblaApi, isPaused]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') scrollPrev();
    if (e.key === 'ArrowRight') scrollNext();
  };

  return (
    <div
      className="relative mx-auto w-full px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Galerie d'images"
    >
      <div className="touch-pan-y overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {images.map((src, index) => (
            <motion.div
              key={src}
              className="relative min-w-0 flex-[0_0_100%] pl-4 transition-transform duration-300 hover:scale-[1.02]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative pt-[75%] md:pt-[65%] lg:pt-[55%]">
                <Image
                  src={src}
                  alt={`Réalisation De Pascalis ${index + 1} - Projet de rénovation ou construction achevé montrant la qualité du travail`}
                  fill
                  className="rounded-lg object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
        aria-label="Image précédente"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
        aria-label="Image suivante"
      >
        <ChevronRight size={24} />
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-gold w-6' : 'bg-white/30'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
