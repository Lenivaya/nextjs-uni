'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

  const linkClasses = (active: boolean) =>
    `px-4 py-2 rounded-md transition-colors ${
      active
        ? 'bg-zinc-800 text-white'
        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
    }`

  return (
    <nav className='bg-zinc-950 text-white shadow-md'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex h-16 items-center gap-8'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(isActive(link.href))}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
