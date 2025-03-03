import Article from '@/app/components/Article'
import { Post } from '@/app/types/post'
import { SimpleGrid } from '@chakra-ui/react'

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json()
}

export default async function ArticlesPage() {
  const posts = await getPosts()

  return (
    <div>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold relative inline-block after:content-[""] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-[2em] after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-400 after:rounded-sm'>
          Articles
        </h1>
      </div>
      <SimpleGrid columns={3} gap={6}>
        {posts.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </div>
  )
}
