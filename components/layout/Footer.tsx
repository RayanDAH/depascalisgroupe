'use client';

import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black pb-6 pt-12 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">De Pascalis Groupe</h3>
            <p className="mb-2">21 rue de Valdoie</p>
            <p className="mb-2">Belfort, France</p>
            <p className="mb-2">Tél: 06 75 85 31 86</p>
            <p>Email: flo.depascalis.sas@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#batiment"
                  className="hover:text-gold transition-colors"
                >
                  Bâtiment
                </Link>
              </li>
              <li>
                <Link
                  href="#immobilier"
                  className="hover:text-gold transition-colors"
                >
                  Immobilier
                </Link>
              </li>
              <li>
                <Link href="/sdb" className="hover:text-gold transition-colors">
                  Salle de Bain
                </Link>
              </li>
              <li>
                <Link
                  href="#valeurs"
                  className="hover:text-gold transition-colors"
                >
                  Nos Valeurs
                </Link>
              </li>
              <li>
                <Link
                  href="#realisations"
                  className="hover:text-gold transition-colors"
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/chauffage"
                  className="hover:text-gold transition-colors"
                >
                  Chauffage
                </Link>
              </li>
              <li>
                <Link
                  href="/pompe-a-chaleur"
                  className="hover:text-gold transition-colors"
                >
                  Pompe à Chaleur
                </Link>
              </li>
              <li>
                <Link
                  href="/plomberie"
                  className="hover:text-gold transition-colors"
                >
                  Plomberie
                </Link>
              </li>
              <li>
                <Link
                  href="/electricite"
                  className="hover:text-gold transition-colors"
                >
                  Électricité
                </Link>
              </li>
              <li>
                <Link href="/sdb" className="hover:text-gold transition-colors">
                  Salle de Bain
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Horaires</h3>
            <p className="mb-2">Lundi - Vendredi: 8h - 18h</p>
            <p>Samedi: Sur rendez-vous</p>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-6 border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} De Pascalis Groupe. Tous droits
            réservés. |
            <Link
              href="/mentions-legales"
              className="hover:text-gold ml-1 transition-colors"
            >
              Mentions légales
            </Link>{' '}
            |{' '}
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-gold transition-colors"
            >
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
