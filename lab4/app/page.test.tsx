import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'

// Mock the client components
vi.mock('./counter', () => ({
  default: () => <div data-testid='mock-counter'>Counter Component</div>
}))

vi.mock('./components/TodoList', () => ({
  default: () => <div data-testid='mock-todo-list'>Todo List Component</div>
}))

vi.mock('./components/Toggle', () => ({
  default: ({
    title,
    children
  }: {
    title: string
    children: React.ReactNode
  }) => (
    <div data-testid='mock-toggle'>
      <div data-testid='mock-toggle-title'>{title}</div>
      <div data-testid='mock-toggle-content'>{children}</div>
    </div>
  )
}))

// Mock the utility functions
vi.mock('./utils/formatters', () => ({
  formatDate: () => 'Mocked Date',
  formatCurrency: () => 'Mocked Currency'
}))

test('Page renders all components correctly', () => {
  render(<Page />)

  // Check page title
  expect(
    screen.getByRole('heading', { level: 1, name: 'Next.js with Vitest' })
  ).toBeDefined()

  // Check if all section headings are present
  expect(
    screen.getByRole('heading', { level: 2, name: 'Counter Component' })
  ).toBeDefined()
  expect(
    screen.getByRole('heading', { level: 2, name: 'Toggle Component' })
  ).toBeDefined()
  expect(
    screen.getByRole('heading', { level: 2, name: 'Todo List Component' })
  ).toBeDefined()
  expect(
    screen.getByRole('heading', { level: 2, name: 'Utility Functions' })
  ).toBeDefined()

  // Check if mocked components are rendered using testids
  expect(screen.getByTestId('mock-counter')).toBeDefined()
  expect(screen.getByTestId('mock-todo-list')).toBeDefined()
  expect(screen.getByTestId('mock-toggle')).toBeDefined()

  // Check if toggle has correct title
  expect(screen.getByTestId('mock-toggle-title').textContent).toBe(
    'Click to expand'
  )

  // Check if formatted values are displayed
  expect(screen.getByText('Mocked Date')).toBeDefined()
  expect(screen.getByText('Mocked Currency')).toBeDefined()
})
