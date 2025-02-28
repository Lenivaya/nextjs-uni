export default function ArticleSkeleton() {
  return (
    <div className='p-6 bg-zinc-900 rounded-lg space-y-4'>
      <div className='space-y-2'>
        <div className='h-6 w-3/4 bg-zinc-800 rounded animate-pulse' />
        <div className='h-6 w-1/2 bg-zinc-800 rounded animate-pulse' />
      </div>
      <div className='space-y-2'>
        <div className='h-4 w-full bg-zinc-800 rounded animate-pulse' />
        <div className='h-4 w-full bg-zinc-800 rounded animate-pulse' />
        <div className='h-4 w-2/3 bg-zinc-800 rounded animate-pulse' />
      </div>
    </div>
  )
}
