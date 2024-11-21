'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'blog',
    path: '/blog',
  },
  {
    name: 'resume',
    path: '/resume',
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className='flex gap-8 text-xl'>
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <div key={index} className='flex items-center'>
            <Link
              href={link.path}
              className={`${
                link.path === pathname && 'text-green-500'
              } hover:text-green-500 p-1 text-2xl transition-all`}
            >
              {link.name}
            </Link>
            {isActive && <span className='text-green-500 blink'>|</span>}
          </div>
        );
      })}
    </nav>
  );
}
