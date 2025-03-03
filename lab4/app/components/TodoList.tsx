'use client'

import { useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() === '') return

    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false
    }

    setTodos([...todos, todo])
    setNewTodo('')
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='todo-list'>
      <h2>Todo List</h2>

      <div className='add-todo'>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Add a new task'
          data-testid='new-todo-input'
        />
        <button onClick={addTodo} data-testid='add-todo-button'>
          Add
        </button>
      </div>

      <ul className='todos'>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              data-testid={`todo-checkbox-${todo.id}`}
            />
            <span data-testid={`todo-text-${todo.id}`}>{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              data-testid={`todo-remove-${todo.id}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p data-testid='empty-message'>No todos yet. Add some tasks!</p>
      )}
    </div>
  )
}
