function Loader({ label = 'Loading…' }) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 py-16 text-slate-500">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
      <p className="text-sm">{label}</p>
    </div>
  )
}

export default Loader
