export default function BlogListLoading() {
  return (
    <div className='gap-[60px]'>
      {Array(6)
        .fill(0)
        .map((_el, index) => (
          <div key={index} className='flex-1 flex flex-col justify-center gap-6 animate-pulse'>
            {/* top */}
            <div className='w-full flex justify-between items-center'>
              <div className='bg-gray-600 h-6 w-1/4'></div>
              <div className='bg-gray-600 h-10 w-10'></div>
            </div>
            {/* title */}
            <div className='bg-gray-600 h-10 w-3/4'></div>
            {/* description */}
            <div className='bg-gray-600 h-4 w-full'></div>
            <div className='bg-gray-600 h-4 w-5/6'></div>
            <div className='bg-gray-600 h-4 w-2/3'></div>
            {/* border */}
            <div className='border-b border-gray-500 w-full'></div>
          </div>
        ))}
    </div>
  );
}