import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Mountain, ShoppingBag, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/locations', label: 'Locations' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-[#d8d2c6] shadow-sm' : 'border-b border-[#d8d2c6]'
        } bg-[#f0ece4]`}
      >
        <div className="px-6 md:px-12 py-4 grid grid-cols-3 items-center max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Mountain
              className="text-[#6b8c6b] transition-transform group-hover:scale-110"
              size={22}
              strokeWidth={1.5}
            />
            <div>
              <span className="font-semibold text-[#2e2e2e] tracking-tight text-sm">Caliber Coffee</span>
              <span className="hidden md:block text-[10px] tracking-[0.2em] text-[#8a8a8a] uppercase">Roasters</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center justify-center gap-8 text-sm text-[#6a6a6a] tracking-wide">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `hover:text-[#6b8c6b] transition-colors relative ${
                    isActive ? 'text-[#6b8c6b] font-medium' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#6b8c6b]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center justify-end gap-4">
            <a
              href="https://caliber-coffee-109908.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#2e2e2e] text-[#f0ece4] px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-[#6b8c6b] transition-colors"
            >
              <ShoppingBag size={14} />
              Order Online
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#2e2e2e] p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#f0ece4] flex flex-col pt-20 px-8 transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 mt-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-2xl font-medium tracking-tight transition-colors ${
                  isActive ? 'text-[#6b8c6b]' : 'text-[#2e2e2e] hover:text-[#6b8c6b]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://caliber-coffee-109908.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2e2e2e] text-[#f0ece4] px-6 py-4 text-sm font-medium tracking-wide hover:bg-[#6b8c6b] transition-colors mt-4 w-fit"
          >
            <ShoppingBag size={16} />
            Order Online
          </a>
        </div>
        <div className="mt-auto pb-8 text-sm text-[#8a8a8a]">
          <p className="mb-1">Bozeman · 1805 W Oak St #2</p>
          <p className="mb-3">Big Sky · 80 Snowy Mountain Circle</p>
          <a href="tel:4062193159" className="text-[#6b8c6b]">(406) 219-3159</a>
        </div>
      </div>
    </>
  )
}
