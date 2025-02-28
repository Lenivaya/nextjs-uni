import Link from 'next/link'
import { Post } from '@/app/types/post'

export default function Article({ post }: { post: Post }) {
  return (
    <Link
      href={`/articles/${post.id}`}
      className='block p-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors h-full'
    >
      <h2 className='text-xl font-semibold mb-2 line-clamp-2'>{post.title}</h2>
      <p className='text-zinc-400 line-clamp-3'>{post.body}</p>
    </Link>
  )
}
