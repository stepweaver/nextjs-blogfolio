import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

export default async function BlogPage() {
  const response = await fetch('http://localhost:3001/posts');
  const posts = await response.json();

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {posts.map((post, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'
              >
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-xl group-hover:text-outline-hover transition-all duration-500'>
                    {post.date}
                  </div>
                  <Link
                    href='/'
                    className='w-[50px] h-[50px] bg-white group-hover:bg-green-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                {/* title */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-green-500 transition-all duration-500'>
                  {post.title}
                </h2>
                {/* description */}
                <p className='text-white/60'>{post.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
