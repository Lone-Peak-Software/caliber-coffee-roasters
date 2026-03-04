import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react'

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
    { to: '/about', label: 'Our Story' },
    { to: '/locations', label: 'Locations' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        } bg-[#faf5ee] border-b border-[#e8d5bc]`}
      >
        <div className="px-6 md:px-10 py-4 flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <span
              className="text-[#243b2e] text-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Caliber Coffee
            </span>
            <span
              className="text-[#c4622d] text-lg ml-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
            >
              Roasters
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-[#5a4a3a]" style={{ fontWeight: 500 }}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `hover:text-[#c4622d] transition-colors ${isActive ? 'text-[#c4622d]' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:4062193159"
              className="hidden md:flex items-center gap-2 border border-[#c4622d] text-[#c4622d] px-4 py-2 text-sm hover:bg-[#c4622d] hover:text-white transition-colors"
              style={{ fontWeight: 500 }}
            >
              <Phone size={13} />
              Call Us
            </a>
            <a
              href="https://caliber-coffee-109908.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#c4622d] text-white px-5 py-2 text-sm hover:bg-[#b45020] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Order Online <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#243b2e] p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#faf5ee] flex flex-col pt-20 px-8 transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 mt-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-2xl transition-colors ${
                  isActive ? 'text-[#c4622d]' : 'text-[#243b2e] hover:text-[#c4622d]'
                }`
              }
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://caliber-coffee-109908.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#c4622d] text-white px-6 py-4 text-sm hover:bg-[#b45020] transition-colors mt-4 w-fit"
            style={{ fontWeight: 600 }}
          >
            Order Online <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="mt-auto pb-8 text-sm text-[#8a6a50]" style={{ fontWeight: 300 }}>
          <p className="mb-1">Bozeman · 1805 W Oak St #2</p>
          <p className="mb-3">Big Sky · 80 Snowy Mountain Circle</p>
          <a href="tel:4062193159" className="text-[#c4622d]">(406) 219-3159</a>
        </div>
      </div>
    </>
  )
}
