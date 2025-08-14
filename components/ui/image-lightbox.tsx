'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

interface ImageLightboxProps {
  images: Array<{ src: string; alt: string }>;
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function ImageLightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: currentIndex,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    onIndexChange(emblaApi.selectedScrollSnap());
  }, [emblaApi, onIndexChange]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Scroll to current index when it changes externally
  useEffect(() => {
    if (emblaApi && isOpen) {
      emblaApi.scrollTo(currentIndex);
    }
  }, [emblaApi, currentIndex, isOpen]);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          scrollPrev();
          break;
        case 'ArrowRight':
          scrollNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, scrollPrev, scrollNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="z-60 hover:text-gold absolute right-4 top-4 rounded-full p-2 text-white transition-colors hover:bg-white/10"
          aria-label="Fermer"
        >
          <X size={32} />
        </button>

        {/* Navigation arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollPrev();
          }}
          className="z-60 hover:text-gold absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white transition-colors hover:bg-white/10"
          aria-label="Image précédente"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollNext();
          }}
          className="z-60 hover:text-gold absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white transition-colors hover:bg-white/10"
          aria-label="Image suivante"
        >
          <ChevronRight size={32} />
        </button>

        {/* Image carousel */}
        <div className="flex h-full items-center justify-center p-8">
          <div
            className="h-full w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full overflow-hidden" ref={emblaRef}>
              <div className="flex h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex min-w-0 flex-[0_0_100%] items-center justify-center"
                  >
                    <div className="relative h-full max-h-[80vh] w-full max-w-[90vw]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        sizes="90vw"
                        priority={index === currentIndex}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Thumbnail navigation */}
        <div className="absolute bottom-16 left-1/2 flex max-w-[90vw] -translate-x-1/2 gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                emblaApi?.scrollTo(index);
              }}
              className={`relative h-16 w-16 overflow-hidden rounded-lg border-2 transition-all ${
                index === currentIndex
                  ? 'border-gold'
                  : 'border-white/30 hover:border-white/60'
              }`}
            >
              <Image
                src={image.src}
                alt={`Miniature ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
