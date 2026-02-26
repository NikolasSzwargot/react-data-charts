export default function Box({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl backdrop-blur ${className}`}
    >
      {children}
    </div>
  )
}
