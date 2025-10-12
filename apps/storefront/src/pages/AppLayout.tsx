import { Link, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="max-w-6xl mx-auto p-4 flex items-center gap-6">
          <Link to="/" className="font-bold text-lg">Storefront</Link>
          <nav className="text-sm flex gap-4">
            <Link to="/">Catalog</Link>
            <Link to="/cart">Cart</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-4">
        <Outlet />
      </main>
      <footer className="border-t text-xs opacity-70">
        <div className="max-w-6xl mx-auto p-4">Week 4 • Starter</div>
      </footer>
    </div>
  )
}
