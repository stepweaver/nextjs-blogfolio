'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

// components
import Nav from './Nav';
import MobileNav from './MobileNav';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='py-2 xl:py-4 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            גstepweaver
            <span className='text-green-500 blink'>|</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className='hidden lg:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className='lg:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
