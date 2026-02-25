export default function App() {
  return (
    <main className="mx-auto min-h-screen max-w-350 px-8 py-8">
      <header className="mb-8">
        <p className="text-sm text-slate-400">E-commerce analytics</p>
        <h1 className="mt-1 text-4xl font-semibold">Sales dashboard</h1>
      </header>

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl backdrop-blur">
          <h2 className="text-xl font-semibold">Revenue trend</h2>
          <p className="mt-1 text-sm text-slate-400">Main visualization</p>
          <div className="mt-6 h-95 rounded-2xl border border-dashed border-slate-700" />
        </div>
      </section>
    </main>
  );
}
