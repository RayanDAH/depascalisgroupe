import { Clock, Shield, Users } from 'lucide-react';

export const sdbPageData = {
  metadata: {
    title:
      'Salle de Bain Belfort | Rénovation & Aménagement | De Pascalis Groupe',
    description:
      'Spécialiste rénovation salle de bain à Belfort depuis plus de 10 ans. Douche italienne, baignoire, carrelage. Intervention sous 3h ou devis en 24h.',
  },

  hero: {
    backgroundImage: '/H1-SDB-Landing-PAGE.png',
    title:
      'Le spécialiste salle de bain qui respecte vos envies et votre budget',
    highlightWord: 'salle de bain',
    subtitle:
      "Plus de 10 ans d'expertise en rénovation et aménagement de salles de bain. Douche italienne, baignoire, carrelage moderne. Intervention sous 3h ou devis en 24h garanti.",
    reassuranceItems: [
      {
        text: 'Besançon et alentours',
        icon: <Clock className="text-gold h-5 w-5" />,
      },
      { text: 'Devis en 24h', icon: <Shield className="text-gold h-5 w-5" /> },
      { text: 'Équipe locale', icon: <Users className="text-gold h-5 w-5" /> },
    ],
  },

  servicePresentation: {
    title: 'Salle de Bain Professionnelle',
    description:
      "Avec plus de 10 ans d'expérience dans la rénovation de salles de bain, De Pascalis Groupe transforme votre espace en un véritable havre de bien-être.\n\nNotre équipe d'experts maîtrise tous les aspects de la rénovation : plomberie, carrelage, électricité, étanchéité. Nous créons des espaces fonctionnels et esthétiques adaptés à vos besoins et votre budget.\n\nQue vous souhaitiez une douche à l'italienne moderne, une baignoire relaxante ou un aménagement complet, nous vous accompagnons de la conception à la finition avec des matériaux de qualité et un savoir-faire reconnu.",
    image: '/SDB-1 .jpeg',
    imageAlt: 'Rénovation salle de bain par De Pascalis',
    features: [
      'Rénovation complète salle de bain',
      "Installation douche à l'italienne",
      'Pose de carrelage et faïence',
      'Plomberie et évacuation',
      'Éclairage et ventilation',
      'Aménagement sur mesure',
    ],
  },

  testimonials: [
    {
      name: 'Marie Dubois',
      location: 'Belfort',
      text: 'Rénovation complète de notre salle de bain. Travail impeccable et finitions parfaites. Très satisfaite !',
      rating: 5,
    },
    {
      name: 'Jean-Pierre Martin',
      location: 'Besançon',
      text: "Installation d'une douche italienne magnifique. Équipe professionnelle et délais respectés.",
      rating: 5,
    },
    {
      name: 'Sophie Leroy',
      location: 'Montbéliard',
      text: 'Transformation totale de notre salle de bain. Résultat au-delà de nos espérances !',
      rating: 5,
    },
    {
      name: 'Michel Rousseau',
      location: 'Dole',
      text: 'Carrelage et plomberie refaits à neuf. Travail soigné et conseils précieux.',
      rating: 5,
    },
    {
      name: 'Catherine Blanc',
      location: 'Vesoul',
      text: 'Aménagement sur mesure parfaitement adapté à notre espace. Très professionnel.',
      rating: 5,
    },
    {
      name: 'Pierre Moreau',
      location: 'Lure',
      text: "Rénovation rapide et propre. Équipe à l'écoute et résultat magnifique.",
      rating: 5,
    },
  ],
};
