'use client';

import { motion } from 'framer-motion';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { NosPrestations } from '@/components/blocks/nos-prestations';

export default function MerciPage() {
  return (
    <>
      {/* Hero Section avec message de remerciement */}
      <section className="relative flex min-h-screen items-center justify-center bg-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              <span className="text-gold">MERCI</span> POUR VOTRE{' '}
              <span className="text-gold">DEMANDE</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto max-w-2xl text-xl font-medium text-white/90 md:text-2xl"
            >
              Nous vous contacterons au plus vite.
            </motion.p>
          </motion.div>
        </div>

        {/* Décoration en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-gold/10 absolute -right-40 -top-40 h-80 w-80 rounded-full blur-3xl"></div>
          <div className="bg-gold/5 absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Section Témoignages */}
      <TestimonialsSection />

      {/* Section Nos autres prestations */}
      <NosPrestations
        title="Nos autres prestations"
        description="Découvrez l'ensemble de nos services professionnels pour tous vos projets de construction, rénovation et aménagement."
      />
    </>
  );
}
