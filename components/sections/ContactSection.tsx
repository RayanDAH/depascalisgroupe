'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-black py-24">
      <div className="container-custom">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-gold">Contactez</span>-nous
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">
            Une question ? Un projet ? Besoin d'un devis ? Notre équipe vous
            répond sous 24 à 48h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold">
                Informations de contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-navy mr-4 rounded-full p-3">
                    <MapPin className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Adresse</h4>
                    <p className="text-white/70">21 rue de Valdoie, Belfort</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy mr-4 rounded-full p-3">
                    <Phone className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Téléphone</h4>
                    <p className="text-white/70">06 75 85 31 86</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy mr-4 rounded-full p-3">
                    <Mail className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Email</h4>
                    <p className="text-white/70">
                      flo.depascalis.sas@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy mr-4 rounded-full p-3">
                    <Clock className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Horaires</h4>
                    <p className="text-white/70">Tous les jours 24h/24</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-xl font-bold">Envoyez-nous un message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
