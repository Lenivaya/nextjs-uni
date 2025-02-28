export default function Loading() {
  return (
    <div className='space-y-8 animate-pulse'>
      <div className='space-y-4'>
        <div className='h-8 w-3/4 bg-zinc-800 rounded' />
        <div className='space-y-2'>
          <div className='h-4 w-full bg-zinc-800 rounded' />
          <div className='h-4 w-full bg-zinc-800 rounded' />
          <div className='h-4 w-2/3 bg-zinc-800 rounded' />
        </div>
      </div>

      <div className='space-y-4'>
        <div className='h-6 w-32 bg-zinc-800 rounded' />
        <div className='space-y-4'>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className='p-4 bg-zinc-900 rounded-lg space-y-3'>
              <div className='h-4 w-1/3 bg-zinc-800 rounded' />
              <div className='space-y-2'>
                <div className='h-3 w-full bg-zinc-800 rounded' />
                <div className='h-3 w-4/5 bg-zinc-800 rounded' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
