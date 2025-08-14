'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "Quels sont vos délais d'intervention pour une rénovation de salle de bain ?",
    a: "Nous proposons un devis sous 24-48h et pouvons généralement commencer les travaux sous 1 à 2 semaines selon la complexité du projet. La durée d'intervention varie de 3 à 10 jours selon l'ampleur de la rénovation.",
  },
  {
    q: 'Proposez-vous des solutions sur mesure pour les petits espaces ?',
    a: "Absolument ! Notre expertise nous permet d'optimiser tous les espaces, même les plus contraints. Nous proposons des solutions innovantes : douches italiennes compactes, mobilier sur mesure, et aménagements intelligents.",
  },
  {
    q: 'Quelles garanties offrez-vous sur vos prestations ?',
    a: "Nous garantissons nos installations et notre main-d'œuvre. Tous nos travaux sont assurés et nous assurons un service après-vente réactif pour votre tranquillité d'esprit.",
  },
  {
    q: 'Prenez-vous en charge tous les corps de métier ?',
    a: "Oui, notre équipe pluridisciplinaire maîtrise la plomberie, l'électricité, le carrelage, et l'étanchéité. Vous avez un interlocuteur unique pour l'ensemble de votre projet de rénovation.",
  },
  {
    q: 'Travaillez-vous avec des marques de qualité ?',
    a: 'Nous collaborons exclusivement avec des fournisseurs reconnus pour la qualité de leurs produits. Nous vous conseillons selon votre budget et vos préférences esthétiques.',
  },
];

export default function SdbFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section aria-labelledby="faq-title" className="w-full">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="faq-title" className="mb-4 text-3xl font-bold md:text-4xl">
          Questions <span className="text-gold">fréquentes</span>
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-white/80">
          Retrouvez les réponses aux questions les plus courantes sur nos
          services de rénovation de salle de bain.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl space-y-4"
      >
        {ITEMS.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="hover:border-gold/50 rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(215,184,65,0.2)]"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between p-6 text-left"
              aria-expanded={openIndex === index}
            >
              <h3 className="pr-4 text-lg font-semibold text-white">
                {item.q}
              </h3>
              <ChevronDown
                className={`text-gold h-5 w-5 shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <p className="leading-relaxed text-white/80">{item.a}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
