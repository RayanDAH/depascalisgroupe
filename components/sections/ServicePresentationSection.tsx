'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServicePresentationProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features?: string[];
}

export default function ServicePresentationSection({
  title,
  description,
  image,
  imageAlt,
  features = [],
}: ServicePresentationProps) {
  return (
    <section className="section-padding bg-black py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              {title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={index === 0 ? 'text-gold' : 'text-white'}
                >
                  {word}
                  {index < title.split(' ').length - 1 ? ' ' : ''}
                </span>
              ))}
            </h2>

            <div className="space-y-4 text-lg text-white/80">
              {description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {features.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Nos services incluent :
                </h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <div className="bg-gold mr-3 h-2 w-2 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <motion.button
              className="btn-primary mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-tally-open="mO9eNa"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
            >
              Demander un devis gratuit
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] overflow-hidden rounded-xl md:h-[500px]"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
