import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// components
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';

export default function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-2xl'>Full-Stack Web Developer</span>
            <h1 className='h1 mb-6 text-green-500'>
              <span className='text-green-500'>Stephen Weaver</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I&apos;m passionate about building modern web applications and
              solving tough problems. I thrive on learning new things and
              leveling up my skills. Whether it&apos;s crafting sleek,
              responsive designs or engineering solid back-end solutions,
              I&apos;m always excited to take on new challenges.
            </p>
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl ml-2' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-green-500 flex justify-center items-center text-green-500 text-base hover:bg-green-500 hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
