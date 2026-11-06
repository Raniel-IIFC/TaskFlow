import { Link, useParams } from 'react-router'
import { useTodo } from '../hooks/useTodo.js'

function TaskDetailPage() {
  const { id } = useParams()
  const { data: todo, isPending, isError, error } = useTodo(id)

  return (
    <section>
      <Link to="/tasks" className="text-sm text-indigo-600 hover:underline">
        ← Back to tasks
      </Link>

      {isPending && <p className="mt-4 text-slate-600">Loading task…</p>}
      {isError && (
        <p className="mt-4 text-red-600">
          {error.status === 404 ? `Task #${id} was not found.` : error.message}
        </p>
      )}

      {todo && (
        <>
          <h1 className="mt-4 text-2xl font-bold sm:text-3xl">{todo.title}</h1>
          <ul className="mt-4 space-y-1 text-slate-600">
            <li>Task ID: {todo.id}</li>
            <li>User ID: {todo.userId}</li>
            <li>Status: {todo.completed ? 'Completed' : 'Pending'}</li>
          </ul>
        </>
      )}
    </section>
  )
}

export default TaskDetailPage
