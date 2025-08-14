import { Clock, Shield, Users } from 'lucide-react';

export const pompeAChaleurPageData = {
  metadata: {
    title:
      'Pompe à Chaleur Belfort | Installation & Maintenance | De Pascalis Groupe',
    description:
      'Spécialiste pompe à chaleur à Belfort depuis plus de 10 ans. Installation air-air, air-eau, géothermie. Intervention sous 3h ou devis en 24h.',
  },

  hero: {
    backgroundImage: '/images/hero-image-pac.png',
    title: 'Spécialiste pompe à chaleur de confiance',
    highlightWord: 'pompe à chaleur',
    subtitle:
      "Plus de 10 ans d'expertise en installation et maintenance de pompes à chaleur. Solutions écologiques et économiques. Intervention sous 3h ou devis en 24h.",
    reassuranceItems: [
      {
        text: 'Intervention sous 3h',
        icon: <Clock className="text-gold h-5 w-5" />,
      },
      { text: 'Devis en 24h', icon: <Shield className="text-gold h-5 w-5" /> },
      {
        text: 'Équipe certifiée',
        icon: <Users className="text-gold h-5 w-5" />,
      },
    ],
  },

  servicePresentation: {
    title: 'Pompe à Chaleur Expert',
    description:
      "Fort de plus de 10 ans d'expérience dans les énergies renouvelables, De Pascalis Groupe est votre partenaire de confiance pour l'installation et la maintenance de pompes à chaleur.\n\nNous maîtrisons tous les types de systèmes : pompes à chaleur air-air, air-eau, géothermiques et aquathermiques. Notre expertise nous permet de vous proposer la solution la plus adaptée à votre habitation et à vos besoins énergétiques.\n\nNos techniciens certifiés garantissent une installation conforme aux normes en vigueur et un service après-vente réactif. Nous nous engageons à intervenir sous 3h pour les urgences et à vous fournir un devis détaillé en 24h maximum.",
    image: '/images/pompe-a-chaleur-1.png',
    imageAlt: 'Installation de pompe à chaleur par De Pascalis',
    features: [
      'Installation pompes à chaleur air-air et air-eau',
      'Systèmes géothermiques et aquathermiques',
      'Maintenance préventive et curative',
      "Dépannage d'urgence toute l'année",
      'Étude thermique personnalisée',
      'Optimisation des performances énergétiques',
    ],
  },

  testimonials: [
    {
      name: 'Laurent Petit',
      location: 'Belfort',
      text: "Installation d'une pompe à chaleur air-eau. Économies d'énergie impressionnantes dès le premier mois !",
      rating: 5,
    },
    {
      name: 'Isabelle Girard',
      location: 'Montbéliard',
      text: 'Remplacement de notre ancienne chaudière par une PAC. Travail impeccable et équipe très professionnelle.',
      rating: 5,
    },
    {
      name: 'François Durand',
      location: 'Besançon',
      text: 'Maintenance annuelle de notre pompe à chaleur. Service rigoureux et conseils précieux.',
      rating: 5,
    },
    {
      name: 'Nathalie Bernard',
      location: 'Dole',
      text: "Installation rapide et soignée. Explications détaillées du fonctionnement et de l'entretien.",
      rating: 5,
    },
    {
      name: 'Alain Mercier',
      location: 'Vesoul',
      text: 'Dépannage urgent de notre PAC en hiver. Intervention dans les 2h, très réactifs !',
      rating: 5,
    },
    {
      name: 'Sylvie Roux',
      location: 'Lure',
      text: 'Étude thermique complète avant installation. Approche professionnelle et résultats excellents.',
      rating: 5,
    },
  ],
};
