'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

// Components
import Nav from './Nav';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className='py-2 xl:py-4 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href='/'>
          <h1 className='text-3xl'>
            גstepweaver
            {isHome && <span className='text-green-500 blink'>|</span>}
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>
        
        {/* mobile nav */}
        <div className='xl:hidden'>mobile nav</div>
      </div>
    </header>
  );
}