function StatusBadge({ completed }) {
  return completed ? (
    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
      Completed
    </span>
  ) : (
    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
      Pending
    </span>
  )
}

export default StatusBadge
