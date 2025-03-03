import { expect, test, describe } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import Toggle from './Toggle'

describe('Toggle Component', () => {
  test('renders with closed state by default', () => {
    const { container } = render(
      <Toggle title='Test Toggle'>
        <p>Toggle content</p>
      </Toggle>
    )

    // Use within to scope queries to this specific toggle instance
    const toggleContainer = within(container.firstChild as HTMLElement)

    // Check if the toggle button is rendered
    const toggleButton = toggleContainer.getByTestId('toggle-button')
    expect(toggleButton).toBeDefined()
    expect(toggleButton.textContent).toContain('Test Toggle')

    // Check if the toggle icon shows closed state
    expect(toggleButton.textContent).toContain('►')

    // Check if content is not visible
    expect(toggleContainer.queryByTestId('toggle-content')).toBeNull()
    expect(toggleContainer.queryByText('Toggle content')).toBeNull()
  })

  test('opens when clicked', () => {
    const { container } = render(
      <Toggle title='Click Me'>
        <p>Hidden content</p>
      </Toggle>
    )

    // Use within to scope queries to this specific toggle instance
    const toggleContainer = within(container.firstChild as HTMLElement)

    // Click the toggle button
    const toggleButton = toggleContainer.getByTestId('toggle-button')
    fireEvent.click(toggleButton)

    // Check if the toggle icon shows open state
    expect(toggleButton.textContent).toContain('▼')

    // Check if content is now visible
    const content = toggleContainer.getByTestId('toggle-content')
    expect(content).toBeDefined()
    expect(toggleContainer.getByText('Hidden content')).toBeDefined()
  })

  test('closes when clicked again', () => {
    const { container } = render(
      <Toggle title='Toggle Me'>
        <p>Now you see me</p>
      </Toggle>
    )

    // Use within to scope queries to this specific toggle instance
    const toggleContainer = within(container.firstChild as HTMLElement)

    // Open the toggle
    const toggleButton = toggleContainer.getByTestId('toggle-button')
    fireEvent.click(toggleButton)

    // Verify it's open
    expect(toggleContainer.getByText('Now you see me')).toBeDefined()

    // Close the toggle
    fireEvent.click(toggleButton)

    // Verify it's closed
    expect(toggleContainer.queryByText('Now you see me')).toBeNull()
    expect(toggleContainer.queryByTestId('toggle-content')).toBeNull()
  })

  test('respects defaultOpen prop', () => {
    const { container } = render(
      <Toggle title='Open by Default' defaultOpen={true}>
        <p>Initially visible content</p>
      </Toggle>
    )

    // Use within to scope queries to this specific toggle instance
    const toggleContainer = within(container.firstChild as HTMLElement)

    // Check if the toggle is open by default
    const toggleButton = toggleContainer.getByTestId('toggle-button')
    expect(toggleButton.textContent).toContain('▼')

    // Check if content is visible
    expect(toggleContainer.getByTestId('toggle-content')).toBeDefined()
    expect(toggleContainer.getByText('Initially visible content')).toBeDefined()
  })

  test('has correct accessibility attributes', () => {
    const { container } = render(
      <Toggle title='Accessible Toggle'>
        <p>Accessible content</p>
      </Toggle>
    )

    // Use within to scope queries to this specific toggle instance
    const toggleContainer = within(container.firstChild as HTMLElement)

    const toggleButton = toggleContainer.getByTestId('toggle-button')

    // Check initial aria-expanded state
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false')

    // Open the toggle
    fireEvent.click(toggleButton)

    // Check updated aria-expanded state
    expect(toggleButton.getAttribute('aria-expanded')).toBe('true')
  })
})
