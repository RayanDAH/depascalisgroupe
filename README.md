# Site Web De Pascalis

Site web professionnel pour De Pascalis - Services de plomberie, chauffage, électricité et pompe à chaleur.

## Technologies utilisées

- **Next.js 15** - Framework React pour le développement web
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Radix UI** - Composants UI accessibles
- **Framer Motion** - Animations
- **React Hook Form** - Gestion des formulaires
- **Lucide React** - Icônes

## Pré-requis

- **Node.js** 18+ (recommandé: 20.18.0)
- **npm** ou **yarn**

## Installation

1. Clonez le repository :

```bash
git clone <repository-url>
cd project
```

2. Installez les dépendances :

```bash
npm install
```

## Scripts disponibles

### Développement

```bash
npm run dev
```

Lance le serveur de développement sur http://localhost:3000

### Build de production

```bash
npm run build
```

Génère une version optimisée pour la production

### Export statique

```bash
npm run export
```

Génère un site statique dans le dossier `out/`

### Linting et formatage

```bash
npm run lint        # Vérifie les erreurs ESLint
npm run lint:fix    # Corrige automatiquement les erreurs ESLint
npm run format      # Formate le code avec Prettier
npm run format:check # Vérifie le formatage sans modifier
```

### Vérification de types

```bash
npm run type-check
```

Vérifie les erreurs TypeScript sans compiler

### Nettoyage

```bash
npm run clean
```

Supprime les dossiers de cache et de build

### Prebuild (recommandé avant deploy)

```bash
npm run prebuild
```

Exécute automatiquement lint:fix, format et type-check

## Structure du projet

```
project/
├── app/                    # Pages Next.js (App Router)
├── components/             # Composants React réutilisables
│   ├── layout/            # Composants de mise en page
│   ├── sections/          # Sections de pages
│   └── ui/                # Composants UI (shadcn/ui)
├── data/                  # Données statiques
├── hooks/                 # Hooks React personnalisés
├── lib/                   # Utilitaires et configuration
├── public/                # Assets statiques
└── utils/                 # Fonctions utilitaires
```

## Configuration

Le projet est configuré pour :

- Export statique via `next export`
- Déploiement sur Netlify
- Images non optimisées (compatible avec les sites statiques)
- ESLint et Prettier pour la qualité de code
- TypeScript pour le typage

## Déploiement

Le site est configuré pour être déployé comme un site statique. Après `npm run export`, le dossier `out/` contient tous les fichiers nécessaires pour le déploiement.

### Netlify

Le fichier `netlify.toml` configure automatiquement le déploiement sur Netlify.

## Développement

1. Démarrez le serveur de développement : `npm run dev`
2. Ouvrez http://localhost:3000 dans votre navigateur
3. Modifiez les fichiers - le rechargement automatique est activé

## Support

Pour toute question concernant le développement ou la maintenance de ce site, contactez l'équipe de développement.
