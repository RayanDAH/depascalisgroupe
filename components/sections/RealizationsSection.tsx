'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

export default function RealizationsSection() {
  return (
    <section id="realisations" className="section-padding bg-[#050505] py-24">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Nos <span className="text-gold">Réalisations</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">
            Découvrez quelques-unes de nos plus belles réalisations
          </p>
        </motion.div>

        {/* Continuous Scrolling Slider */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-scroll inline-block">
            {/* First set of images */}
            {images.map((src, index) => (
              <div
                key={`first-${index}`}
                className="group relative mx-4 inline-block h-[200px] w-[300px] overflow-hidden rounded-xl md:h-[300px] md:w-[400px] lg:h-[350px] lg:w-[500px]"
              >
                <Image
                  src={src}
                  alt={`Réalisation De Pascalis ${index + 1} - Projet de rénovation ou construction terminé démontrant notre savoir-faire`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium">Réalisation De Pascalis</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((src, index) => (
              <div
                key={`second-${index}`}
                className="group relative mx-4 inline-block h-[200px] w-[300px] overflow-hidden rounded-xl md:h-[300px] md:w-[400px] lg:h-[350px] lg:w-[500px]"
              >
                <Image
                  src={src}
                  alt={`Réalisation De Pascalis ${index + 1} - Projet de rénovation ou construction terminé démontrant notre savoir-faire`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium">Réalisation De Pascalis</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-tally-open="mO9eNa"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Voir plus de réalisations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
