export default function Text({ children, className = "" }) {
  return <p className={`text-slate-400 ${className}`}>{children}</p>;
}
