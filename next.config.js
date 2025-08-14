/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // site statique => dossier /out
  images: {
    unoptimized: true, // pas d'Image Optimization côté Netlify
    remotePatterns: [], // Autorise les images externes si nécessaire
  },
  reactStrictMode: true,
  eslint: {
    // On NE bloque PAS le build si des règles ESLint échouent.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // On NE bloque PAS le build si des erreurs TypeScript
    ignoreBuildErrors: false,
  },
  // Optimisation pour les sites statiques
  trailingSlash: false,
  // Configuration pour Netlify
  distDir: 'out',
};

module.exports = nextConfig;
