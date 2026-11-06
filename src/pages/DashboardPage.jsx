import { Link } from 'react-router'
import ProgressBar from '../components/dashboard/ProgressBar.jsx'
import StatCard from '../components/dashboard/StatCard.jsx'
import TaskList from '../components/tasks/TaskList.jsx'
import EmptyState from '../components/ui/EmptyState.jsx'
import ErrorMessage from '../components/ui/ErrorMessage.jsx'
import Loader from '../components/ui/Loader.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { useTodos } from '../hooks/useTodos.js'
import { getTaskStats } from '../utils/taskStats.js'

const UP_NEXT_COUNT = 6

function DashboardPage() {
  const { data: todos, isPending, isError, error, refetch } = useTodos()

  if (isPending) return <Loader label="Loading dashboard…" />
  if (isError) {
    return <ErrorMessage title="Could not load your tasks" message={error.message} onRetry={refetch} />
  }

  const stats = getTaskStats(todos)
  const upNext = todos.filter((todo) => !todo.completed).slice(0, UP_NEXT_COUNT)

  return (
    <section>
      <PageHeader title="Dashboard" description="A quick overview of your tasks." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total tasks" value={stats.total} />
        <StatCard label="Completed" value={stats.completed} accent="emerald" />
        <StatCard label="Pending" value={stats.pending} accent="amber" />
        <StatCard label="Completion rate" value={`${stats.completionRate}%`} accent="indigo" />
      </div>

      <div className="mt-4">
        <ProgressBar percent={stats.completionRate} />
      </div>

      <div className="mt-10 mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Up next</h2>
        <Link to="/tasks" className="text-sm font-medium text-indigo-600 hover:underline">
          View all tasks →
        </Link>
      </div>

      {upNext.length > 0 ? (
        <TaskList todos={upNext} />
      ) : (
        <EmptyState title="All caught up!" message="You have no pending tasks." />
      )}
    </section>
  )
}

export default DashboardPage
