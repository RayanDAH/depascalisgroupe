'use client';

import Link from 'next/link';

export interface PrestationItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt?: string;
  isComingSoon?: boolean;
}

export interface PrestationsProps {
  title?: string;
  description?: string;
  items?: PrestationItem[];
}

const prestationsData = [
  {
    id: 'chauffage',
    title: 'Chauffage',
    description:
      'Installation et maintenance de systèmes de chauffage performants et économiques pour votre confort optimal.',
    href: '/chauffage',
    image:
      'https://images.pexels.com/photos/6530542/pexels-photo-6530542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      'Technicien De Pascalis installant un système de chauffage moderne dans une maison résidentielle',
  },
  {
    id: 'maconnerie',
    title: 'Maçonnerie',
    description:
      'Travaux de maçonnerie traditionnelle et moderne, construction et rénovation de murs, fondations et ouvrages.',
    href: '#maconnerie',
    image:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      'Maçon De Pascalis construisant un mur en briques avec des outils professionnels',
  },
  {
    id: 'cuisine',
    title: 'Cuisine',
    description:
      'Conception et réalisation de cuisines sur mesure, alliant fonctionnalité et esthétisme pour votre espace de vie.',
    href: '#cuisine',
    image:
      'https://images.pexels.com/photos/6489127/pexels-photo-6489127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      'Cuisine moderne rénovée par De Pascalis avec îlot central et finitions haut de gamme',
  },
  {
    id: 'electricite',
    title: 'Électricité',
    description:
      'Installation électrique complète, mise aux normes et dépannage par des électriciens qualifiés.',
    href: '/electricite',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      'Électricien De Pascalis travaillant sur un tableau électrique avec équipements de sécurité',
  },
  {
    id: 'salle-de-bain',
    title: 'Salle de Bain',
    description:
      "Rénovation complète de salles de bain, création d'espaces wellness personnalisés et fonctionnels.",
    href: '#salle-de-bain',
    image:
      'https://images.pexels.com/photos/7614405/pexels-photo-7614405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      "Salle de bain moderne rénovée par De Pascalis avec douche à l'italienne et carrelage contemporain",
  },
  {
    id: 'renovation-globale',
    title: 'Rénovation Globale',
    description:
      'Rénovation complète de votre habitat, de la conception à la finition, pour transformer votre espace.',
    href: '#renovation-globale',
    image:
      'https://images.pexels.com/photos/3562689/pexels-photo-3562689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      "Chantier de rénovation globale De Pascalis montrant la transformation complète d'un intérieur",
  },
  {
    id: 'plomberie',
    title: 'Plomberie',
    description:
      'Installation et réparation de systèmes de plomberie, sanitaires et équipements hydrauliques.',
    href: '/plomberie',
    image:
      'https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      'Plombier De Pascalis réparant une canalisation avec outils professionnels',
  },
  {
    id: 'pompe-a-chaleur',
    title: 'Pompe à Chaleur',
    description:
      'Solutions écologiques et économiques pour votre chauffage. Installation et maintenance de pompes à chaleur performantes.',
    href: '/pompe-a-chaleur',
    image: '/images/pac-de-pascalis.png',
    imageAlt:
      'Unité extérieure de pompe à chaleur installée par De Pascalis dans un jardin résidentiel',
  },
  {
    id: 'isolation',
    title: 'Isolation',
    description:
      "Solutions d'isolation thermique et acoustique pour améliorer le confort et réduire les consommations.",
    href: '#isolation',
    image:
      'https://images.pexels.com/photos/6567807/pexels-photo-6567807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      "Technicien De Pascalis installant de l'isolation thermique dans les combles d'une maison",
  },
  {
    id: 'signature',
    title: 'De Pascalis SIGNATURE',
    description:
      'Notre nouvelle gamme de prestations haut de gamme arrive bientôt. Restez connectés !',
    href: '#signature',
    image:
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      'Intérieur luxueux représentant la gamme De Pascalis SIGNATURE avec finitions premium',
    isComingSoon: true,
  },
  {
    id: 'mobilier',
    title: 'De Pascalis Mobilier',
    description:
      'Notre gamme mobilier sur mesure pour compléter vos aménagements. Bientôt disponible !',
    href: '#mobilier',
    image:
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      'Mobilier sur mesure De Pascalis dans un salon moderne avec design contemporain',
    isComingSoon: true,
  },
];

export function NosPrestations({
  title = 'Nos Prestations',
  description = "Découvrez l'ensemble de nos services professionnels pour tous vos projets de construction, rénovation et aménagement. Notre expertise à votre service.",
  items = prestationsData,
}: PrestationsProps) {
  return (
    <section className="py-32" id="prestations">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {title.includes('autres') ? (
              <>
                {title.split(' ').map((word, index) => (
                  <span key={index} className={index === 1 ? 'text-gold' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </>
            ) : (
              <>
                <span className="text-gold">Nos</span> Prestations
              </>
            )}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id}>
              <Link
                href={item.href}
                className="group block"
                {...(item.isComingSoon && {
                  onClick: (e) => e.preventDefault(),
                })}
              >
                <div className="relative h-[400px] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className={`absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 ${
                      item.isComingSoon ? 'grayscale filter' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                  {item.isComingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-lg bg-black/70 px-6 py-3 text-lg font-semibold text-white">
                        Bientôt
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-white/80">
                      {item.description}
                    </p>
                    {!item.isComingSoon && (
                      <span className="group-hover:text-gold inline-flex items-center text-sm text-white transition-colors">
                        En savoir plus →
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
