export default function Container({ children, className = '' }) {
  return (
    <main className={`mx-auto min-h-screen max-w-350 px-8 py-8 ${className}`}>
      {children}
    </main>
  )
}
