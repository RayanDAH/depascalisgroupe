'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie L.',
    role: 'Propriétaire',
    content:
      "Nous avons fait appel à cette entreprise à deux reprises : d'abord pour des travaux de maçonnerie et ensuite pour une rénovation complète. Le résultat est impeccable, je recommande vivement !",
    rating: 5,
  },
  {
    name: 'Thomas B.',
    role: 'Investisseur',
    content:
      "Excellent suivi de chantier, respect des délais et une équipe à l'écoute. La qualité des finitions est remarquable.",
    rating: 5,
  },
  {
    name: 'Sophie M.',
    role: 'Propriétaire',
    content:
      'De la conception à la réalisation, tout était parfait. Les artisans sont professionnels et le résultat dépasse nos attentes.',
    rating: 5,
  },
];

export function StaggerTestimonials() {
  return (
    <div className="w-full">
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full flex-shrink-0 snap-start rounded-xl border border-white/10 bg-muted/30 p-6 backdrop-blur-sm md:w-[calc(33.33%-1rem)]"
          >
            <div className="mb-4 flex items-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-gold h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="mb-4 text-white/80">
              "{testimonial.content}"
            </blockquote>
            <footer>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-white/60">{testimonial.role}</div>
            </footer>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
