import { Suspense } from 'react'
import FavoriteArticle from '@/app/components/FavoriteArticle'
import ArticleSkeleton from '@/app/components/ArticleSkeleton'

export default function FavoriteArticlesPage() {
  const favoriteIds = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold mb-4'>Favorite Articles</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {favoriteIds.map((id) => (
          <Suspense key={id} fallback={<ArticleSkeleton />}>
            <FavoriteArticle id={id} />
          </Suspense>
        ))}
      </div>
    </div>
  )
}
