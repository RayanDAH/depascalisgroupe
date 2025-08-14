'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, PenTool, Shield } from 'lucide-react';

const advantageItems = [
  {
    icon: <Clock className="text-gold mb-4 h-12 w-12" />,
    title: 'Devis rapide sous 24-48h',
    description:
      'Nous vous garantissons une réponse rapide et un devis détaillé dans un délai de 24 à 48 heures, permettant de démarrer votre projet sans attente. Disponibilité rapide pour la réalisation des chantiers grâce à notre équipe composée de plus de 10 personnes.',
  },
  {
    icon: <Users className="text-gold mb-4 h-12 w-12" />,
    title: 'Équipe locale & réactive',
    description: 'Interlocuteur unique pour tous vos projets.',
  },
  {
    icon: <PenTool className="text-gold mb-4 h-12 w-12" />,
    title: 'Expertise polyvalente',
    description:
      "Notre savoir-faire couvre tous les domaines de la rénovation bâtiment et immobilier, vous permettant d'avoir un interlocuteur unique pour l'ensemble de votre projet.",
  },
  {
    icon: <Shield className="text-gold mb-4 h-12 w-12" />,
    title: 'Travail garanti',
    description:
      "Nous garantissons nos prestations et assurons un suivi après travaux pour votre tranquillité d'esprit et votre satisfaction à long terme.",
  },
];

export default function WhyChooseUs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <section id="valeurs" className="section-padding bg-[#050505] py-40">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pourquoi <span className="text-gold">nous choisir</span> ?
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Depuis plus de 15 ans, notre expertise en rénovation est reconnue
            dans la région.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {advantageItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="value-card flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
