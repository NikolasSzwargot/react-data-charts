export default function Header({ as: Tag = "h2", children, className = "" }) {
  return (
    <Tag className={`font-semibold text-slate-50 ${className}`}>{children}</Tag>
  );
}
