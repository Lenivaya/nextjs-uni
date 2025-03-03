import { Post } from '@/app/types/post'
import Article from './Article'

async function getArticle(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch article')
  }

  return res.json()
}

export default async function FavoriteArticle({ id }: { id: number }) {
  const article = await getArticle(id)
  return <Article post={article} />
}
