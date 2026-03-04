import { Link } from 'react-router-dom'
import { Instagram, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#243b2e]">
      {/* Main footer grid */}
      <div className="px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <span
              className="text-[#faf5ee] text-2xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Caliber Coffee
            </span>
            <span
              className="text-[#e8c98a] text-xl ml-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
            >
              Roasters
            </span>
          </div>
          <p className="text-[#5a8a5a] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
            Locally owned and roasted in Big Sky, Montana. Two locations, one community.
          </p>
          <a
            href="https://www.instagram.com/calibercoffeeroasters"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#5a8a5a] hover:text-[#e8c98a] transition-colors text-sm mt-5"
            style={{ fontWeight: 300 }}
          >
            <Instagram size={15} />
            @calibercoffeeroasters
          </a>
          <a
            href="tel:4062193159"
            className="flex items-center gap-2 text-[#5a8a5a] hover:text-[#e8c98a] transition-colors text-sm mt-3"
            style={{ fontWeight: 300 }}
          >
            <Phone size={15} />
            (406) 219-3159
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="text-[#e8c98a] text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontWeight: 600 }}
          >
            Navigate
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/menu', label: 'Menu' },
              { to: '/about', label: 'Our Story' },
              { to: '/locations', label: 'Locations' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-[#5a8a5a] hover:text-[#faf5ee] transition-colors text-sm"
                style={{ fontWeight: 300 }}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://caliber-coffee-109908.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a8a5a] hover:text-[#e8c98a] transition-colors text-sm"
              style={{ fontWeight: 300 }}
            >
              Order Online ↗
            </a>
          </div>
        </div>

        {/* Bozeman Location */}
        <div>
          <h4
            className="text-[#e8c98a] text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontWeight: 600 }}
          >
            Bozeman
          </h4>
          <div className="flex items-start gap-2 text-[#5a8a5a] text-sm mb-4" style={{ fontWeight: 300 }}>
            <MapPin size={14} className="text-[#e8c98a] mt-0.5 flex-shrink-0" />
            <span>1805 W Oak St #2<br />Bozeman, MT 59718</span>
          </div>
          <div className="flex items-start gap-2 text-[#5a8a5a] text-sm" style={{ fontWeight: 300 }}>
            <Clock size={14} className="text-[#e8c98a] mt-0.5 flex-shrink-0" />
            <div>
              <p>Mon–Sat: 7:00 am – 3:00 pm</p>
              <p>Sunday: 8:00 am – 3:00 pm</p>
            </div>
          </div>
        </div>

        {/* Big Sky Location */}
        <div>
          <h4
            className="text-[#e8c98a] text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontWeight: 600 }}
          >
            Big Sky
          </h4>
          <div className="flex items-start gap-2 text-[#5a8a5a] text-sm mb-4" style={{ fontWeight: 300 }}>
            <MapPin size={14} className="text-[#e8c98a] mt-0.5 flex-shrink-0" />
            <span>80 Snowy Mountain Circle<br />Big Sky, MT 59716</span>
          </div>
          <div className="flex items-start gap-2 text-[#5a8a5a] text-sm" style={{ fontWeight: 300 }}>
            <Clock size={14} className="text-[#e8c98a] mt-0.5 flex-shrink-0" />
            <div>
              <p>Mon–Sat: 7:00 am – 3:00 pm</p>
              <p>Sunday: 7:00 am – 1:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1e3228] px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-screen-2xl mx-auto">
        <p className="text-[#3a5a3a] text-xs" style={{ fontWeight: 300 }}>
          © {currentYear} Caliber Coffee Roasters · Bozeman & Big Sky, Montana
        </p>
        <a
          href="https://www.lonepeakdesigns.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3a5a3a] hover:text-[#e8c98a] transition-colors text-xs"
          style={{ fontWeight: 300 }}
        >
          Built by Lone Peak Designs
        </a>
      </div>
    </footer>
  )
}
