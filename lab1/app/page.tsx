import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Our App</h1>
        <div className={styles.actions}>
          <Link href='/articles' className={styles.buttonPrimary}>
            Go to Articles
          </Link>
          <Link href='/profile/settings' className={styles.buttonSecondary}>
            Go to Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
