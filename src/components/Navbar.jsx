import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'

const navItems = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/team', label: 'Team' },
  { to: '/partners', label: 'Partners' },
  { to: '/about', label: 'About' },
]

const mobileNavItems = [{ to: '/', label: 'Home' }, ...navItems]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY.current
      setVisible(!scrollingDown || currentY < 80)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-transform duration-300 ${
        visible || mobileOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex items-center justify-between border-b border-slate-200 bg-blue/90 px-6 py-3 backdrop-blur-md sm:px-10 lg:px-16">
        <div className="flex items-center gap-8">
          <NavLink to="/">
            <img src="/logo-icon.png" alt="Novique" className="h-10 w-10 object-contain" />
          </NavLink>

          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition hover:text-[#C89B3C] ${isActive ? 'text-[#C89B3C]' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <NavLink
          to="/get-started"
          className="hidden items-center gap-2 rounded-xl bg-[#C89B3C] px-4 py-2 text-sm font-bold text-white transition hover:scale-[1.03] hover:shadow-[0_0_0_1px_rgba(200,155,60,0.35),0_12px_40px_rgba(200,155,60,0.22)] lg:inline-flex"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </NavLink>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="rounded-lg border border-slate-200 p-2 text-slate-600 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <img src="/logo-icon.png" alt="Novique" className="h-10 w-10 object-contain" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-10 flex-1">
            {mobileNavItems.map((item) => (
              <li key={item.to} className="border-b border-slate-100">
                <NavLink
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-4 text-3xl font-bold transition ${isActive ? 'text-[#C89B3C]' : 'text-slate-900'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/get-started"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-[#C89B3C] py-4 text-sm font-bold text-white transition hover:scale-[1.01]"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>
      )}
    </header>
  )
}
