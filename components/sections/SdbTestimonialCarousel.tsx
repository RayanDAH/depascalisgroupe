'use client';

type Props = { className?: string };

const testimonials = [
  {
    name: 'Stéphane P.',
    text: 'Deuxième fois que je fais appel à cette société ultra sérieuse et réactive. Devis reçu le lendemain et travaux démarrés rapidement.',
    date: 'Juillet 2025',
  },
  {
    name: 'Yekaterina REPINA',
    text: 'Très reconnaissante pour votre réactivité. Ouvriers polis et grands professionnels.',
    date: 'Janvier 2025',
  },
  {
    name: 'Audrey Sagnimorte',
    text: "Équipe à l'écoute, pluridisciplinaire, très professionnelle, qui s'adapte à chaque situation.",
    date: 'Mai 2025',
  },
  {
    name: 'Sandy Lallier',
    text: 'Travail exceptionnel. Professionnels et humains, je recommande à 100 %.',
    date: 'Juillet 2025',
  },
  {
    name: 'Damien fit 25',
    text: "Équipe à l'écoute, rapide et professionnelle en tout point.",
    date: 'Mai 2025',
  },
  {
    name: 'patrick thourot',
    text: 'Conseils judicieux et finitions soignées pour nos travaux extérieurs puis rénovation complète.',
    date: 'Mai 2025',
  },
  {
    name: 'Flo De Pascalis',
    text: "Tout corps d'état, devis ~2 jours, personnel sérieux au souci du détail.",
    date: 'Juillet 2025',
  },
  {
    name: 'Katharaiy ("Katha")',
    text: 'Équipe au top, idées innovantes, disponible et arrangeante.',
    date: 'Mai 2025',
  },
  {
    name: 'alexandre lanciaux',
    text: 'Qualité et professionnalisme, rien à dire.',
    date: 'Mars 2025',
  },
  {
    name: 'Clement Zumstein Rieu',
    text: 'Excellents conseils et suivi de qualité pour les travaux.',
    date: 'Avril 2025',
  },
];

export default function SdbTestimonialCarousel({ className }: Props) {
  return (
    <section className={className}>
      <h2 className="mb-6 text-center text-xl font-bold text-white sm:text-3xl">
        Ce que disent <span className="text-gold">nos clients</span>
      </h2>
      <div
        className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4"
        role="list"
        aria-label="Témoignages clients"
      >
        {testimonials.map((t) => (
          <article
            key={t.name}
            role="listitem"
            className="min-w-[86%] snap-center rounded-xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm sm:min-w-[420px]"
          >
            <p className="text-sm italic text-white/80 sm:text-base">
              "{t.text}"
            </p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <strong className="text-white">{t.name}</strong>
              <span className="text-gold">{t.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
