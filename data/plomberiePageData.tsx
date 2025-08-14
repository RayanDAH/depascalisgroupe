import { Clock, Shield, Users } from 'lucide-react';

export const plomberiePageData = {
  metadata: {
    title: 'Plomberie Belfort | Dépannage & Installation | De Pascalis Groupe',
    description:
      'Plombier expert à Belfort depuis plus de 10 ans. Dépannage, installation sanitaire, rénovation salle de bain. Intervention sous 3h ou devis en 24h.',
  },

  hero: {
    backgroundImage: '/images/hero-image-plomberie.png',
    title: 'Plombier professionnel à votre écoute',
    highlightWord: 'Plombier',
    subtitle:
      "Plus de 10 ans d'expertise en plomberie et sanitaire. Dépannage d'urgence 24h/24, installation et rénovation. Intervention sous 3h ou devis en 24h garanti.",
    reassuranceItems: [
      {
        text: 'Intervention sous 3h',
        icon: <Clock className="text-gold h-5 w-5" />,
      },
      { text: 'Devis en 24h', icon: <Shield className="text-gold h-5 w-5" /> },
      {
        text: 'Disponible 24h/24',
        icon: <Users className="text-gold h-5 w-5" />,
      },
    ],
  },

  servicePresentation: {
    title: 'Plomberie Professionnelle',
    description:
      "Avec plus de 10 ans d'expérience dans le domaine de la plomberie, De Pascalis Groupe intervient pour tous vos besoins en installation, réparation et maintenance de vos équipements sanitaires.\n\nNotre équipe de plombiers qualifiés est disponible 24h/24 et 7j/7 pour vos urgences : fuites, canalisations bouchées, panne de chauffe-eau. Nous garantissons une intervention sous 3h pour les dépannages urgents.\n\nQue ce soit pour une rénovation complète de salle de bain, l'installation d'équipements sanitaires ou la détection de fuites, nous mettons notre savoir-faire à votre service avec des solutions durables et des finitions soignées.",
    image: '/images/plombier-de-pascalis-1.png',
    imageAlt: 'Intervention plomberie par De Pascalis',
    features: [
      "Dépannage d'urgence 24h/24 et 7j/7",
      'Installation et réparation sanitaires',
      'Rénovation complète salle de bain',
      'Détection et réparation de fuites',
      'Installation chauffe-eau et cumulus',
      'Débouchage et curage canalisations',
    ],
  },

  testimonials: [
    {
      name: 'Thomas Lefevre',
      location: 'Belfort',
      text: "Fuite d'urgence réparée en moins de 2h un samedi soir. Service exceptionnel et tarif correct !",
      rating: 5,
    },
    {
      name: 'Martine Dubois',
      location: 'Montbéliard',
      text: 'Rénovation complète de notre salle de bain. Travail soigné et finitions parfaites.',
      rating: 5,
    },
    {
      name: 'Philippe Garnier',
      location: 'Besançon',
      text: "Installation d'un nouveau chauffe-eau. Intervention rapide et conseils précieux sur l'entretien.",
      rating: 5,
    },
    {
      name: 'Céline Moreau',
      location: 'Dole',
      text: 'Débouchage canalisation et détection de fuite. Équipe professionnelle et équipement moderne.',
      rating: 5,
    },
    {
      name: 'Robert Faure',
      location: 'Vesoul',
      text: 'Remplacement de toute la robinetterie. Travail propre et respect des délais annoncés.',
      rating: 5,
    },
    {
      name: 'Annie Perrin',
      location: 'Lure',
      text: 'Dépannage chauffe-eau en urgence. Très réactifs et solution durable trouvée rapidement.',
      rating: 5,
    },
  ],
};
