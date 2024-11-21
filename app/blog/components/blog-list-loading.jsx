export default function BlogListLoading() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
      {Array(3)
        .fill(0)
        .map((_el, index) => (
          <div key={index} className='animate-pulse bg-green-800 h-48'></div>
        ))}
    </div>
  );
}
