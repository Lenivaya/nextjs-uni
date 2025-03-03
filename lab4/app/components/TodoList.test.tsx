import { expect, test, describe } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import TodoList from './TodoList'

describe('TodoList Component', () => {
  test('renders empty state correctly', () => {
    const { container } = render(<TodoList />)

    // Use within to scope queries to this specific TodoList instance
    const todoListContainer = within(container.firstChild as HTMLElement)

    // Check if the component renders
    expect(todoListContainer.getByText('Todo List')).toBeDefined()

    // Check if empty message is displayed
    expect(todoListContainer.getByTestId('empty-message')).toBeDefined()
    expect(
      todoListContainer.getByText('No todos yet. Add some tasks!')
    ).toBeDefined()
  })

  test('can add a new todo', () => {
    const { container } = render(<TodoList />)

    // Use within to scope queries to this specific TodoList instance
    const todoListContainer = within(container.firstChild as HTMLElement)

    // Add a new todo
    const input = todoListContainer.getByTestId('new-todo-input')
    fireEvent.change(input, { target: { value: 'Test todo item' } })

    const addButton = todoListContainer.getByTestId('add-todo-button')
    fireEvent.click(addButton)

    // Check if todo was added
    expect(todoListContainer.getByText('Test todo item')).toBeDefined()

    // Check if input was cleared
    expect((input as HTMLInputElement).value).toBe('')

    // Check if empty message is no longer displayed
    expect(todoListContainer.queryByTestId('empty-message')).toBeNull()
  })

  test('can toggle todo completion status', () => {
    const { container } = render(<TodoList />)

    // Use within to scope queries to this specific TodoList instance
    const todoListContainer = within(container.firstChild as HTMLElement)

    // Add a new todo
    const input = todoListContainer.getByTestId('new-todo-input')
    fireEvent.change(input, { target: { value: 'Toggle test' } })

    const addButton = todoListContainer.getByTestId('add-todo-button')
    fireEvent.click(addButton)

    // Get the todo item and checkbox
    const todoText = todoListContainer.getByText('Toggle test')

    // Find the checkbox by its testid pattern (we need to extract the ID)
    const todoId = todoText.parentElement
      ?.querySelector('input[type="checkbox"]')
      ?.getAttribute('data-testid')
      ?.split('-')
      .pop()

    const checkbox = todoListContainer.getByTestId(
      `todo-checkbox-${todoId}`
    ) as HTMLInputElement

    // Initially, the checkbox should be unchecked
    expect(checkbox.checked).toBe(false)

    // Toggle the todo
    fireEvent.click(checkbox)

    // Now the checkbox should be checked
    expect(checkbox.checked).toBe(true)
  })

  test('can remove a todo', () => {
    const { container } = render(<TodoList />)

    // Use within to scope queries to this specific TodoList instance
    const todoListContainer = within(container.firstChild as HTMLElement)

    // Add a new todo
    const input = todoListContainer.getByTestId('new-todo-input')
    fireEvent.change(input, { target: { value: 'Item to remove' } })

    const addButton = todoListContainer.getByTestId('add-todo-button')
    fireEvent.click(addButton)

    // Verify todo was added
    const todoText = todoListContainer.getByText('Item to remove')
    expect(todoText).toBeDefined()

    // Find the remove button
    const todoId = todoText.parentElement
      ?.querySelector('button')
      ?.getAttribute('data-testid')
      ?.split('-')
      .pop()

    const removeButton = todoListContainer.getByTestId(`todo-remove-${todoId}`)

    // Remove the todo
    fireEvent.click(removeButton)

    // Verify todo was removed
    expect(todoListContainer.queryByText('Item to remove')).toBeNull()

    // Empty message should be displayed again
    expect(todoListContainer.getByTestId('empty-message')).toBeDefined()
  })

  test('does not add empty todos', () => {
    const { container } = render(<TodoList />)

    // Use within to scope queries to this specific TodoList instance
    const todoListContainer = within(container.firstChild as HTMLElement)

    // Try to add an empty todo
    const input = todoListContainer.getByTestId('new-todo-input')
    fireEvent.change(input, { target: { value: '' } })

    const addButton = todoListContainer.getByTestId('add-todo-button')
    fireEvent.click(addButton)

    // Empty message should still be displayed
    expect(todoListContainer.getByTestId('empty-message')).toBeDefined()
  })
})
