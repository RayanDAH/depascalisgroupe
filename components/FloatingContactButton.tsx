'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button
              className="to-navy flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={scrollToContact}
            >
              <MessageSquare size={18} />
              <span>Une demande ?</span>
            </button>
          </DialogTrigger>
          <DialogContent className="border border-gray-800 bg-black sm:max-w-[600px]">
            <div className="py-6">
              <h2 className="mb-6 text-center text-2xl font-bold">
                Contactez-nous
              </h2>
              <ContactForm onSuccess={() => setIsOpen(false)} />
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </>
  );
}
