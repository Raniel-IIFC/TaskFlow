import { Link } from 'react-router'
import StatusBadge from './StatusBadge.jsx'

function TaskCard({ todo }) {
  return (
    <li>
      <Link
        to={`/tasks/${todo.id}`}
        className="flex h-full flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
      >
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>#{todo.id}</span>
          <StatusBadge completed={todo.completed} />
        </div>
        <p className="font-medium text-slate-800 first-letter:uppercase">{todo.title}</p>
        <p className="mt-auto text-xs text-slate-500">User {todo.userId}</p>
      </Link>
    </li>
  )
}

export default TaskCard
