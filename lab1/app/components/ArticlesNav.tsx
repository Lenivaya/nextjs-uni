'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './MainNav.module.scss'

const links = [
  { href: '/articles/favorite', label: 'Favorite Articles' },
  { href: '/articles/create', label: 'Create Article' }
]

export default function ArticlesNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className={styles.navSecondary}>
      <div className={styles.container}>
        <div className={styles.list}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive(link.href) ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
