import { Clock, Shield, Users } from 'lucide-react';

export const chauffagePageData = {
  metadata: {
    title: 'Chauffage Belfort | Installation & Réparation | De Pascalis Groupe',
    description:
      'Expert en chauffage à Belfort depuis plus de 10 ans. Installation, réparation et maintenance. Intervention sous 3h ou devis en 24h. Équipe locale et réactive.',
  },

  hero: {
    backgroundImage: '/images/hero-image-chauffage.png',
    title: 'Expert chauffage à votre service',
    highlightWord: 'chauffage',
    subtitle:
      "Plus de 10 ans d'expertise en installation et réparation de systèmes de chauffage. Intervention sous 3h ou devis en 24h garanti.",
    reassuranceItems: [
      {
        text: 'Intervention sous 3h',
        icon: <Clock className="text-gold h-5 w-5" />,
      },
      { text: 'Devis en 24h', icon: <Shield className="text-gold h-5 w-5" /> },
      { text: 'Équipe locale', icon: <Users className="text-gold h-5 w-5" /> },
    ],
  },

  servicePresentation: {
    title: 'Chauffage Professionnel',
    description:
      "Avec plus de 10 ans d'expérience dans le domaine du chauffage, De Pascalis Groupe vous accompagne pour tous vos projets d'installation, de réparation et de maintenance de systèmes de chauffage.\n\nNotre équipe d'experts intervient rapidement sur tous types d'installations : chaudières gaz, fioul, électriques, radiateurs, thermostats connectés et bien plus encore. Nous garantissons une intervention sous 3h pour les urgences et un devis détaillé en 24h maximum.\n\nLa satisfaction de nos clients est notre priorité absolue. Nous mettons un point d'honneur à respecter les délais, à maintenir la propreté des chantiers et à vous fournir des conseils personnalisés pour optimiser votre confort thermique.",
    image: '/images/chauffage-de-pascalis-1.png',
    imageAlt: 'Installation de chauffage par De Pascalis',
    features: [
      'Installation de chaudières gaz, fioul et électriques',
      'Remplacement et réparation de radiateurs',
      'Maintenance et entretien annuel',
      "Dépannage d'urgence 24h/24",
      'Installation de thermostats connectés',
      'Mise en conformité des installations',
    ],
  },

  testimonials: [
    {
      name: 'Marie Dubois',
      location: 'Belfort',
      text: 'Installation de notre nouvelle chaudière réalisée en une journée. Équipe professionnelle et très propre dans leur travail.',
      rating: 5,
    },
    {
      name: 'Jean-Pierre Martin',
      location: 'Besançon',
      text: "Dépannage urgent un dimanche matin, ils sont venus dans l'heure. Service exceptionnel !",
      rating: 5,
    },
    {
      name: 'Sophie Leroy',
      location: 'Montbéliard',
      text: 'Remplacement de radiateurs dans toute la maison. Travail soigné et respect des délais.',
      rating: 5,
    },
    {
      name: 'Michel Rousseau',
      location: 'Dole',
      text: "Maintenance annuelle de notre système de chauffage. Toujours à l'heure et très compétents.",
      rating: 5,
    },
    {
      name: 'Catherine Blanc',
      location: 'Vesoul',
      text: "Installation d'un thermostat connecté. Explications claires et formation à l'utilisation.",
      rating: 5,
    },
    {
      name: 'Pierre Moreau',
      location: 'Lure',
      text: "Réparation d'urgence en plein hiver. Intervention rapide et tarif honnête.",
      rating: 5,
    },
  ],
};
