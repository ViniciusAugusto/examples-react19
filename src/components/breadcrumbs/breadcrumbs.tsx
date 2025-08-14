'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = [
    { name: 'Home', href: '/' },
    ...segments.map((seg, idx) => ({
      name: seg.charAt(0).toUpperCase() + seg.slice(1),
      href: '/' + segments.slice(0, idx + 1).join('/'),
    })),
  ];

  return (
    <nav className="w-full py-4 px-6 bg-nosferatu border-b border-gray-200">
      <ol className="flex items-center justify-center space-x-2 text-sm">
        {crumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center text-dracula">
            <Link href={crumb.href} className="hover:text-dracula-600 transition-colors">
              {crumb.name}
            </Link>
            {idx < crumbs.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
