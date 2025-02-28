import ArticleSkeleton from '@/app/components/ArticleSkeleton'

export default function Loading() {
  return (
    <div className='space-y-6'>
      <div className='h-8 w-48 bg-zinc-800 rounded animate-pulse' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Array.from({ length: 6 }).map((_, i) => (
          <ArticleSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
