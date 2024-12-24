'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

// components
import Nav from './Nav';
import MobileNav from './MobileNav';

export default function Header() {
  const pathname = usePathname();

  const getHeaderText = () => {
    if (pathname === '/') {
      return 'λstepweaver';
    } else {
      return `λstepweaver${pathname}`;
    }
  };

  return (
    <header className='py-2 xl:py-4 text-white mb-8'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            {getHeaderText()}
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
