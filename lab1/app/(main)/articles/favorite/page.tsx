import ArticleSkeleton from '@/app/components/ArticleSkeleton'
import FavoriteArticle from '@/app/components/FavoriteArticle'
import { SimpleGrid } from '@chakra-ui/react'
import { Suspense } from 'react'

export default function FavoriteArticlesPage() {
  const favoriteIds = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold mb-4'>Favorite Articles</h1>
      <SimpleGrid columns={3} gap={6}>
        {favoriteIds.map((id) => (
          <Suspense fallback={<ArticleSkeleton />} key={id}>
            <FavoriteArticle key={id} id={id} />
          </Suspense>
        ))}
      </SimpleGrid>
    </div>
  )
}
