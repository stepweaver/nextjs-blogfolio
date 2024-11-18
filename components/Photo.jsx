'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Photo() {
  return (
    <div className='w-full h-full flex items-center justify-center relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
        className='relative'
      >
        <div className='relative w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] flex items-center justify-center'>
          {/* circle */}
          <motion.svg
            className='absolute w-full h-full'
            fill='transparent'
            viewBox='0 0 506 506'
            xmlns='http://www.w3.or/2000/svg'
          >
            <motion.circle
              cx='253'
              cy='253'
              r='228'
              stroke='#22c55e'
              strokeWidth='4'
              strokeLinejoin='round'
              initial={{ strokeDasharray: '24 10 0 0' }}
              animate={{
                strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.svg>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
            }}
            className='mix-blend-lighten'
          >
            <Image
              src='/assets/anon.png'
              priority
              quality={100}
              width={450}
              height={450}
              alt=''
              className='object-contain rounded-full shadow-glow'
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
