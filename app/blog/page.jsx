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
        <Suspense fallback={<BlogListLoading />}>
          <BlogList />
        </Suspense>
      </div>
    </section>
  );
}
