import Counter from './counter'
import TodoList from './components/TodoList'
import Toggle from './components/Toggle'
import { formatDate, formatCurrency } from './utils/formatters'

export const metadata = {
  title: 'Next.js with Vitest'
}

export default function Page() {
  const today = new Date()
  const sampleAmount = 1299.99

  return (
    <div className='container'>
      <h1>Next.js with Vitest</h1>

      <section className='section'>
        <h2>Counter Component</h2>
        <div className='component-demo'>
          <Counter />
        </div>
      </section>

      <section className='section'>
        <h2>Toggle Component</h2>
        <div className='component-demo'>
          <Toggle title='Click to expand'>
            <p>This content can be toggled on and off.</p>
            <p>It demonstrates conditional rendering with tests.</p>
          </Toggle>
        </div>
      </section>

      <section className='section'>
        <h2>Todo List Component</h2>
        <div className='component-demo'>
          <TodoList />
        </div>
      </section>

      <section className='section'>
        <h2>Utility Functions</h2>
        <div className='component-demo'>
          <p>
            <strong>Formatted Date:</strong> {formatDate(today)}
          </p>
          <p>
            <strong>Formatted Currency:</strong> {formatCurrency(sampleAmount)}
          </p>
        </div>
      </section>
    </div>
  )
}
