'use client';

import { motion } from 'framer-motion';
import { StaggerTestimonials } from '@/components/ui/stagger-testimonials';

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="section-padding bg-black py-24">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ce que disent <span className="text-gold">nos clients</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">
            Découvrez les expériences de nos clients satisfaits qui témoignent
            de notre engagement à offrir des rénovations de qualité.
          </p>
        </motion.div>

        <StaggerTestimonials />
      </div>
    </section>
  );
}
