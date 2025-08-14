'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Navigation from './Navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black py-1.5 shadow-lg' : 'bg-transparent py-2.5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex h-full items-center">
          <span className="text-gold font-montserrat text-xl font-thin leading-none">
            De Pascalis
          </span>
        </Link>

        <div className="hidden items-center space-x-4 md:flex">
          <Navigation />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary-compact bg-gradient-to-r from-red-600 to-red-800 text-sm"
            data-tally-open="mO9eNa"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Mon Devis en 24h
          </motion.button>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary-compact bg-gradient-to-r from-red-600 to-red-800 text-sm"
            data-tally-open="mO9eNa"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Devis 24h
          </motion.button>
          <button
            type="button"
            className="text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black"
            >
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" className="flex items-center">
                    <span className="text-gold text-xl font-semibold leading-none">
                      De Pascalis GROUPE
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex flex-col space-y-6">
                  <Link
                    href="/"
                    className="hover:text-gold text-xl font-medium text-white transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Accueil
                  </Link>
                  <Link
                    href="#batiment"
                    className="hover:text-gold text-xl font-medium text-white transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Bâtiment
                  </Link>
                  <Link
                    href="#immobilier"
                    className="hover:text-gold text-xl font-medium text-white transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Immobilier
                  </Link>
                  <Link
                    href="/sdb"
                    className="hover:text-gold text-xl font-medium text-white transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Salle de Bain
                  </Link>
                  <Link
                    href="#valeurs"
                    className="hover:text-gold text-xl font-medium text-white transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Nos Valeurs
                  </Link>
                  <Link
                    href="#realisations"
                    className="hover:text-gold text-xl font-medium text-white transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Réalisations
                  </Link>
                  <Link
                    href="#temoignages"
                    className="hover:text-gold text-xl font-medium text-white transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Témoignages
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
