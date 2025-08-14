'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Cookie, BarChart3, Target, Shield } from 'lucide-react';
import { cookieUtils } from '@/utils/cookieUtils';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
  icon: React.ReactNode;
}

export default function CookieSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<CookieCategory[]>([
    {
      id: 'necessary',
      name: 'Cookies nécessaires',
      description:
        'Ces cookies sont essentiels au fonctionnement du site web et ne peuvent pas être désactivés.',
      required: true,
      enabled: true,
      icon: <Shield className="h-5 w-5" />,
    },
    {
      id: 'analytics',
      name: 'Cookies analytiques',
      description:
        'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web.',
      required: false,
      enabled: cookieUtils.getCookie('analytics_consent') === 'true',
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      id: 'marketing',
      name: 'Cookies marketing',
      description:
        'Ces cookies sont utilisés pour personnaliser les publicités et mesurer leur efficacité.',
      required: false,
      enabled: cookieUtils.getCookie('marketing_consent') === 'true',
      icon: <Target className="h-5 w-5" />,
    },
  ]);

  const handleToggle = (categoryId: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId && !cat.required
          ? { ...cat, enabled: !cat.enabled }
          : cat
      )
    );
  };

  const handleSavePreferences = () => {
    categories.forEach((category) => {
      if (!category.required) {
        cookieUtils.setCookie(
          `${category.id}_consent`,
          category.enabled.toString()
        );
      }
    });

    // Set general consent
    cookieUtils.setCookie('cookie_consent', 'customized');
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    categories.forEach((category) => {
      if (!category.required) {
        cookieUtils.setCookie(`${category.id}_consent`, 'true');
      }
    });
    cookieUtils.setCookie('cookie_consent', 'accepted');
    setIsOpen(false);
  };

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 rounded-full bg-black/80 p-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-black"
        aria-label="Paramètres des cookies"
      >
        <Settings className="h-5 w-5" />
      </button>

      {/* Settings Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/20 bg-black p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center gap-3">
              <Cookie className="text-gold h-6 w-6" />
              <h2 className="text-xl font-bold text-white">
                Paramètres des cookies
              </h2>
            </div>

            <p className="mb-6 text-white/80">
              Gérez vos préférences de cookies. Vous pouvez activer ou
              désactiver différents types de cookies ci-dessous.
            </p>

            <div className="mb-6 space-y-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-1 items-start gap-3">
                      <div className="text-gold mt-1">{category.icon}</div>
                      <div className="flex-1">
                        <h3 className="mb-1 font-semibold text-white">
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/70">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      {category.required ? (
                        <span className="text-gold bg-gold/20 rounded px-2 py-1 text-xs">
                          Requis
                        </span>
                      ) : (
                        <button
                          onClick={() => handleToggle(category.id)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            category.enabled ? 'bg-gold' : 'bg-white/20'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              category.enabled
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setIsOpen(false)}
                className="btn-secondary"
              >
                Annuler
              </button>
              <button onClick={handleSavePreferences} className="btn-primary">
                Sauvegarder les préférences
              </button>
              <button onClick={handleAcceptAll} className="btn-primary">
                Accepter tout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
