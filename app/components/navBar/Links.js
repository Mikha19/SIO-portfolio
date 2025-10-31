'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
const links = [
  { name: 'Accueil', href: '/', },
  { name: 'Présentation', href: '/presentation', },
  { name: 'Compétences', href: '/competences', },
  { name: 'Projets', href: '/projets', },
  { name: 'Veille Informatique', href: '/veille', },
  { name: 'Fiches E5 et E6', href: '/fiches', },
  { name: 'Contact', href: '/contact', },
];

export default function NavLinks({ horizontal = false }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const baseClass = horizontal
          ? 'inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-base font-medium whitespace-nowrap bg-gray-50 hover:bg-sky-100 hover:text-blue-600'
          : 'flex h-[72px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-5 text-lg font-medium hover:bg-sky-100 hover:text-blue-600';

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              baseClass,
              { 'bg-sky-100 text-blue-600': pathname === link.href },
            )}>
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}