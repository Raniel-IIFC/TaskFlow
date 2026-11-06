const ACCENT_CLASSES = {
  indigo: 'text-indigo-600',
  emerald: 'text-emerald-600',
  amber: 'text-amber-600',
  slate: 'text-slate-900',
}

function StatCard({ label, value, accent = 'slate' }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${ACCENT_CLASSES[accent]}`}>{value}</p>
    </div>
  )
}

export default StatCard
