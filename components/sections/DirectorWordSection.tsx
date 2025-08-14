'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DirectorWordSection() {
  return (
    <section className="section-padding bg-black py-24">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-[350px] overflow-hidden rounded-xl md:h-[400px] lg:h-[400px]">
            <Image
              src="/images/photo-directeur-florian-de-pascalis.png"
              alt="Florian de Pascalis, CEO et fondateur du groupe De Pascalis, dirigeant depuis 17 ans"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                Mot du <span className="text-gold">dirigeant</span>
              </h2>

              <div className="space-y-4 text-white/80">
                <p>
                  Je suis Florian De Pascalis, CEO du groupe De Pascalis j'ai
                  créé ma première entreprise à l'âge de 17 ans - cela fait donc
                  17 ans que je suis à la tête d'entreprise afin de faire
                  respecter plusieurs valeurs essentielles tel que la rigueur,
                  le sérieux, la qualité du travail dans mes entreprises.
                </p>
                <p>
                  La satisfaction client est la notion primordiale qui me tient
                  à cœur dans toutes les filiales de mon groupe.
                </p>
                <p className="text-gold font-semibold italic">
                  La confiance est ce qu'il a disparu dans ce monde, c'est là
                  que nos équipes et moi même arrivons afin de vous rassurer sur
                  le travail à effectuer mais aussi sur la communication que
                  l'on met en place pour le bon déroulement de vos projets.
                </p>
              </div>

              <motion.button
                className="btn-primary mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-tally-open="mO9eNa"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                Discuter de votre projet
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
