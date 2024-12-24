// components
import BlogCard from '@/components/BlogCard';

export default async function BlogList() {
  const response = await fetch('http://localhost:3001/posts', {
    cache: 'no-store',
  });
  const posts = await response.json();

  return (
    <div>
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
}
