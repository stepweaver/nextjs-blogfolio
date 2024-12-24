  import Link from 'next/link';
  import { BsArrowDownRight } from 'react-icons/bs';

  export default function BlogCard({ post }) {
    return (
      <Link
        href='/'
        className='my-1 flex-1 flex flex-col justify-center gap-6 group transition-transform duration-500 hover:scale-105'
      >
        {/* top */}
        <div className='w-full flex justify-between items-center'>
          <div className='text-xl group-hover:text-outline-hover transition-all duration-500'>
            {post.date}
          </div>
          {/* <div className='w-[40px] h-[40px] bg-white group-hover:bg-green-500 transition-all duration-500 flex justify-center items-center'>
            <BsArrowDownRight className='text-primary text-2xl group-hover:-rotate-45 transition-transform duration-500' />
          </div> */}
        </div>
        {/* title */}
        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-green-500 transition-all duration-500'>
          {post.title}
        </h2>
        {/* description */}
        <p className='text-white/60'>{post.description}</p>
        {/* border */}
        <div className='border-b border-white/20 w-full'></div>
      </Link>
    );
  }