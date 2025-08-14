'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { CheckCircle } from 'lucide-react';

interface ReassuranceItem {
  text: string;
  icon?: React.ReactNode;
}

interface HeroProps {
  backgroundImage?: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  reassuranceItems?: ReassuranceItem[];
}

export default function Hero({
  backgroundImage,
  title = '',
  highlightWord = '',
  subtitle = '',
  reassuranceItems = [],
}: HeroProps) {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center pb-16 pt-24"
      style={{
        backgroundImage: backgroundImage ? `url("${backgroundImage}")` : 'none',
        backgroundColor: backgroundImage ? 'transparent' : '#1a1a1a',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {backgroundImage && <div className="hero-overlay absolute inset-0" />}

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12">
          <div className="text-center">
            <HeroHighlight containerClassName="!h-auto !bg-transparent">
              <motion.h1
                className="mb-6 text-center text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white">
                  {title.split(highlightWord)[0]}
                </span>
                <Highlight className="text-white">{highlightWord}</Highlight>
                <span className="text-white">
                  {title.split(highlightWord)[1]}
                </span>
              </motion.h1>
            </HeroHighlight>

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>

            {reassuranceItems.length > 0 && (
              <motion.div
                className="mx-auto mb-8 flex max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {reassuranceItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm"
                  >
                    {item.icon || <CheckCircle className="text-gold h-5 w-5" />}
                    <span className="text-sm font-medium text-white md:text-base">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            <motion.div
              className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                className="btn-primary"
                data-tally-open="mO9eNa"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                Votre Devis dans les 24h
              </button>
              <a href="#prestations" className="btn-secondary">
                Voir nos prestations
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
