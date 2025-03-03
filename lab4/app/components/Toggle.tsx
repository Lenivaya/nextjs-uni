'use client'

import { useState, ReactNode } from 'react'

interface ToggleProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export default function Toggle({
  title,
  children,
  defaultOpen = false
}: ToggleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className='toggle-container' data-testid='toggle-container'>
      <button
        className='toggle-button'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        data-testid='toggle-button'
      >
        <span>{title}</span>
        <span className='toggle-icon'>{isOpen ? '▼' : '►'}</span>
      </button>

      {isOpen && (
        <div className='toggle-content' data-testid='toggle-content'>
          {children}
        </div>
      )}
    </div>
  )
}
