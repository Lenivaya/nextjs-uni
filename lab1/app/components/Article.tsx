import Link from 'next/link'
import { Post } from '@/app/types/post'
import styles from './Article.module.scss'

export default function Article({ post }: { post: Post }) {
  return (
    <Link href={`/articles/${post.id}`} className={styles.article}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
    </Link>
  )
}
