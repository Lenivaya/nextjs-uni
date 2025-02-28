import { Post } from '@/app/types/post'

interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

async function getArticle(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) throw new Error('Failed to fetch article')
  return res.json()
}

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  )
  if (!res.ok) throw new Error('Failed to fetch comments')
  return res.json()
}

export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1)
  }))
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [article, comments] = await Promise.all([
    getArticle(id),
    getComments(id)
  ])

  return (
    <div className='space-y-8'>
      <article className='prose prose-invert max-w-none'>
        <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
        <p className='text-zinc-300'>{article.body}</p>
      </article>

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold'>Comments</h2>
        <div className='grid gap-4'>
          {comments.map((comment) => (
            <div key={comment.id} className='p-4 bg-zinc-900 rounded-lg'>
              <div className='flex items-center gap-2 mb-2'>
                <h3 className='font-semibold'>{comment.name}</h3>
                <span className='text-zinc-500'>•</span>
                <span className='text-zinc-500'>{comment.email}</span>
              </div>
              <p className='text-zinc-300'>{comment.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
