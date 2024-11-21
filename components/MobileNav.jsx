'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

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

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-3xl text-green-500' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* logo */}
        <div className='mt-2 mb-5 text-2xl'>
          <h1 className='text-4xl font-semibold'>
            <Link href='/'>
              גstepweaver<span className='text-green-500 blink'>|</span>
            </Link>
          </h1>
        </div>
        {/* nav */}
        <nav className='flex flex-col gap-6 text-xl'>
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <div key={index} className='flex items-center'>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    'text-green-500'
                  } text-2xl hover:text-green-500 transition-all`}
                >
                  {link.name}
                </Link>
                {isActive && <span className='text-green-500 blink'>|</span>}
              </div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
