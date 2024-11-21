import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { Suspense } from 'react';

// components
import BlogList from './components/blog-list';
import BlogListLoading from './components/blog-list-loading';

export default async function BlogPage() {
  const response = await fetch('http://localhost:3001/posts', {
    cache: 'no-store',
  });
  const posts = await response.json();

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-semibold leading-10 tracking-tighter'>
          blog<span className='blink text-green-500'>|</span>
        </h1>
        <Suspense fallback={<BlogListLoading />}>
          <BlogList />
        </Suspense>
      </div>
    </section>
  );
}
