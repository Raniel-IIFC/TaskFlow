import { Link } from 'react-router'
import { useTodos } from '../hooks/useTodos.js'

function TasksPage() {
  const { data: todos, isPending, isError, error } = useTodos()

  return (
    <section>
      <h1 className="text-2xl font-bold sm:text-3xl">Tasks</h1>

      {isPending && <p className="mt-4 text-slate-600">Loading tasks…</p>}
      {isError && <p className="mt-4 text-red-600">{error.message}</p>}

      {todos && (
        <>
          <p className="mt-2 text-slate-600">{todos.length} tasks loaded.</p>
          <ul className="mt-4 space-y-2">
            {todos.slice(0, 10).map((todo) => (
              <li key={todo.id}>
                <Link to={`/tasks/${todo.id}`} className="text-indigo-600 hover:underline">
                  #{todo.id} {todo.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default TasksPage
