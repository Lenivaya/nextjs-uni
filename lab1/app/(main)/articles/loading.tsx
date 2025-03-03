import ArticleSkeleton from '@/app/components/ArticleSkeleton'
import { Grid } from '@chakra-ui/react'

export default function Loading() {
  return (
    <div className='space-y-6'>
      <div className='h-8 w-48 bg-zinc-800 rounded animate-pulse' />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gap={6}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <ArticleSkeleton key={i} />
        ))}
      </Grid>
    </div>
  )
}
