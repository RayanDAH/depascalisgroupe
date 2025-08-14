'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = getCookie('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
    setIsLoaded(true);
  }, []);

  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  };

  const setCookie = (name: string, value: string, days: number) => {
    if (typeof document === 'undefined') return;

    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  };

  const handleAccept = () => {
    setCookie('cookie_consent', 'accepted', 365); // Valid for 1 year
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookie('cookie_consent', 'declined', 365); // Valid for 1 year
    setShowBanner(false);
  };

  // Don't render anything until we've checked for existing consent
  if (!isLoaded) return null;

  return (
    <AnimatePresence>
      {showBanner && (
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
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/20 bg-black/95 shadow-2xl backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center">
              {/* Cookie Icon */}
              <div className="flex-shrink-0">
                <Cookie className="text-gold h-8 w-8" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Nous utilisons des cookies
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  Nous utilisons des cookies pour améliorer votre expérience sur
                  notre site, analyser le trafic et personnaliser le contenu. En
                  continuant à naviguer, vous acceptez notre utilisation des
                  cookies conformément à notre politique de confidentialité.
                </p>

                {/* Legal Links */}
                <div className="flex flex-wrap gap-4 text-xs">
                  <Link
                    href="/politique-de-confidentialite"
                    className="text-gold hover:text-gold/80 inline-flex items-center gap-1 transition-colors"
                  >
                    Politique de confidentialité
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/mentions-legales"
                    className="text-gold hover:text-gold/80 inline-flex items-center gap-1 transition-colors"
                  >
                    Mentions légales
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                <motion.button
                  onClick={handleDecline}
                  className="btn-secondary text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Refuser
                </motion.button>
                <motion.button
                  onClick={handleAccept}
                  className="btn-primary text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Accepter tous les cookies
                </motion.button>
              </div>
            </div>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={handleDecline}
            className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white lg:hidden"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
