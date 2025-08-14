'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, X } from 'lucide-react';
import { AnimatedText } from '@/components/ui/animated-shiny-text';

export default function SocialMediaPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsOpen(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Auto-hide after 3 seconds of being visible
  useEffect(() => {
    if (isOpen) {
      const autoHideTimer = setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(autoHideTimer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && isOpen && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.6,
          }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/20 bg-black shadow-2xl"
          style={{ height: '100px' }}
        >
          <div className="container relative mx-auto flex h-full items-center justify-center px-4">
            <div className="flex items-center space-x-6">
              <span className="text-base font-medium text-white md:text-lg">
                Suivez-nous :
              </span>

              <div className="flex space-x-4">
                <motion.a
                  href="https://www.facebook.com/De.pascalis.batiment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold rounded-full p-2 text-white transition-colors duration-300 hover:bg-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={28} />
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/de.pascalis.groupe/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold rounded-full p-2 text-white transition-colors duration-300 hover:bg-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={28} />
                </motion.a>
              </div>
            </div>

            <motion.button
              className="hover:text-gold absolute right-4 top-4 rounded-full p-2 text-white transition-colors duration-300 hover:bg-white/10"
              onClick={handleClose}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Fermer"
            >
              <X size={24} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
