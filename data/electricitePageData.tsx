import { Clock, Shield, Users } from 'lucide-react';

export const electricitePageData = {
  metadata: {
    title:
      'Électricité Belfort | Installation & Dépannage | De Pascalis Groupe',
    description:
      'Électricien expert à Belfort depuis plus de 10 ans. Installation électrique, mise aux normes, dépannage. Intervention sous 3h ou devis en 24h.',
  },

  hero: {
    backgroundImage: '/images/hero-image-elec.png',
    title: 'Électricien qualifié pour vos projets',
    highlightWord: 'Électricien',
    subtitle:
      "Plus de 10 ans d'expertise en installation électrique et domotique. Mise aux normes, dépannage et modernisation. Intervention sous 3h ou devis en 24h.",
    reassuranceItems: [
      {
        text: 'Intervention sous 3h',
        icon: <Clock className="text-gold h-5 w-5" />,
      },
      { text: 'Devis en 24h', icon: <Shield className="text-gold h-5 w-5" /> },
      {
        text: 'Normes respectées',
        icon: <Users className="text-gold h-5 w-5" />,
      },
    ],
  },

  servicePresentation: {
    title: 'Électricité Professionnelle',
    description:
      "Fort de plus de 10 ans d'expérience dans le domaine de l'électricité, De Pascalis Groupe vous accompagne pour tous vos projets d'installation, de rénovation et de modernisation électrique.\n\nNos électriciens qualifiés maîtrisent les dernières technologies : domotique, éclairage connecté, bornes de recharge pour véhicules électriques. Nous garantissons des installations conformes aux normes en vigueur et sécurisées.\n\nDisponibles pour les dépannages d'urgence, nous nous engageons à intervenir sous 3h et à vous fournir un devis détaillé en 24h maximum. La sécurité de vos installations électriques est notre priorité absolue.",
    image: '/images/electricien-de-pascalis-1.png',
    imageAlt: 'Installation électrique par De Pascalis',
    features: [
      'Installation électrique complète',
      'Mise aux normes et rénovation',
      "Dépannage d'urgence 24h/24",
      'Installation domotique et connectée',
      'Éclairage intérieur et extérieur',
      'Bornes de recharge véhicules électriques',
    ],
  },

  testimonials: [
    {
      name: 'David Lemoine',
      location: 'Belfort',
      text: 'Rénovation électrique complète de notre maison. Travail aux normes et très professionnel.',
      rating: 5,
    },
    {
      name: 'Valérie Cousin',
      location: 'Montbéliard',
      text: 'Dépannage électrique en urgence. Intervention rapide et problème résolu définitivement.',
      rating: 5,
    },
    {
      name: 'Gérard Fontaine',
      location: 'Besançon',
      text: 'Installation de prises et éclairages dans notre extension. Conseils avisés et finitions parfaites.',
      rating: 5,
    },
    {
      name: 'Sandrine Muller',
      location: 'Dole',
      text: 'Mise aux normes de notre tableau électrique. Explications claires et travail soigné.',
      rating: 5,
    },
    {
      name: 'Jean-Claude Roy',
      location: 'Vesoul',
      text: 'Installation borne de recharge véhicule électrique. Service complet et très professionnel.',
      rating: 5,
    },
    {
      name: 'Brigitte Simon',
      location: 'Lure',
      text: "Domotique et éclairage connecté installés. Équipe compétente et à l'écoute de nos besoins.",
      rating: 5,
    },
  ],
};
