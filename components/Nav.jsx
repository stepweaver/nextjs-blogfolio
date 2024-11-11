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
    path: '/resume'
  }
];

export default function Nav() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <div key={index} className='flex items-center'>
            <Link
              href={link.path}
              className={`${
                isActive ? 'text-green-500' : ''
              } font-medium hover:text-green-500 transition-all`}
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
