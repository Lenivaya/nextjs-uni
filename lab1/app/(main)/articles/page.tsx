import { Post } from '@/app/types/post'
import Article from '@/app/components/Article'
import styles from '@/app/styles/components/articles.module.scss'

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
      <div className={styles.header}>
        <h1>Articles</h1>
      </div>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
