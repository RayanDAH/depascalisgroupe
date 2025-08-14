'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Bâtiment', href: '#batiment' },
  { name: 'Immobilier', href: '#immobilier' },
  { name: 'Salle de Bain', href: '/sdb' },
  { name: 'Nos Valeurs', href: '#valeurs' },
  { name: 'Réalisations', href: '#realisations' },
  { name: 'Témoignages', href: '#temoignages' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isSdbPage = pathname === '/sdb';

  // Items to hide on SDB page
  const hiddenOnSdb = [
    'Bâtiment',
    'Immobilier',
    'Nos Valeurs',
    'Réalisations',
    'Témoignages',
  ];

  const visibleItems = isSdbPage
    ? menuItems.filter((item) => !hiddenOnSdb.includes(item.name))
    : menuItems;

  return (
    <nav className="hidden items-center space-x-8 md:flex">
      {visibleItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="hover:text-gold text-white transition-colors duration-300"
          style={{ fontSize: '14px' }}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
