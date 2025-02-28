import { Post } from '@/app/types/post'
import Article from '@/app/components/Article'

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
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold mb-4'>Articles</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
