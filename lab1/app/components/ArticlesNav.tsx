'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/articles/favorite', label: 'Favorite Articles' },
  { href: '/articles/create', label: 'Create Article' }
]

export default function ArticlesNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const linkClasses = (active: boolean) =>
    `px-4 py-2 rounded-md transition-colors ${
      active
        ? 'bg-zinc-800 text-white'
        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
    }`

  return (
    <div className='bg-zinc-950 shadow-md'>
      <div className='max-w-7xl mx-auto px-6'>
        <nav className='flex h-14 items-center gap-4'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(isActive(link.href))}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
