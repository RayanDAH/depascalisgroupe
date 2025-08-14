'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LegalHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-gold text-xl font-semibold leading-none">
            De Pascalis GROUPE
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="hover:text-gold text-white transition-colors duration-300"
          >
            Retour à l'accueil
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary-compact bg-gradient-to-r from-red-600 to-red-800"
            data-tally-open="mO9eNa"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Mon Devis en 24h
          </motion.button>
        </div>
      </div>
    </header>
  );
}
