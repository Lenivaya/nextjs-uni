'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './MainNav.module.scss'

const links = [
  { href: '/articles', label: 'Articles' },
  { href: '/profile/settings', label: 'Settings' },
  { href: '/profile/security', label: 'Security' }
]

export default function MainNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname?.startsWith(path)
  }

  return (
    <nav className={styles.nav}>
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
