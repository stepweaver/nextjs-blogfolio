export default function Loading() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <h1 className='text-3xl py-10 font-semibold leading-10 tracking-tighter'>
          blog<span className='blink text-green-500'>|</span>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {Array(3).fill(0).map((_el, index) => (
            <div key={index} className='animate-pulse bg-green-800 h-48'></div>
          ))}
        </div>
      </div>
    </section>
  );
}