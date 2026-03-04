import { Link } from 'react-router-dom'
import { Mountain, Instagram, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2e2e2e] text-[#f0ece4]">
      {/* Main footer grid */}
      <div className="px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Mountain className="text-[#6b8c6b]" size={22} strokeWidth={1.5} />
            <div>
              <span className="font-semibold tracking-tight text-[#f0ece4]">Caliber Coffee</span>
              <span className="block text-[10px] tracking-[0.2em] text-[#6a6a6a] uppercase">Roasters</span>
            </div>
          </div>
          <p className="text-[#8a8a8a] text-sm leading-relaxed font-light">
            Locally roasted in Big Sky, Montana. Two locations, zero compromise on craft.
          </p>
          <a
            href="https://www.instagram.com/calibercoffeeroasters"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#8a8a8a] hover:text-[#6b8c6b] transition-colors text-sm mt-5"
          >
            <Instagram size={15} />
            @calibercoffeeroasters
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-[#6b8c6b] mb-6">Navigate</h4>
          <div className="flex flex-col gap-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/menu', label: 'Menu' },
              { to: '/about', label: 'About' },
              { to: '/locations', label: 'Locations' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-[#8a8a8a] hover:text-[#f0ece4] transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bozeman Location */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-[#6b8c6b] mb-6">Bozeman</h4>
          <div className="flex items-start gap-2 text-[#8a8a8a] text-sm mb-4">
            <MapPin size={14} className="text-[#6b8c6b] mt-0.5 flex-shrink-0" />
            <span>1805 W Oak St #2<br />Bozeman, MT 59718</span>
          </div>
          <div className="text-[#8a8a8a] text-sm space-y-1">
            <p>Mon–Sat: 7:00 am – 3:00 pm</p>
            <p>Sunday: 8:00 am – 3:00 pm</p>
          </div>
        </div>

        {/* Big Sky Location */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-[#6b8c6b] mb-6">Big Sky</h4>
          <div className="flex items-start gap-2 text-[#8a8a8a] text-sm mb-4">
            <MapPin size={14} className="text-[#6b8c6b] mt-0.5 flex-shrink-0" />
            <span>80 Snowy Mountain Circle<br />Big Sky, MT 59716</span>
          </div>
          <div className="text-[#8a8a8a] text-sm space-y-1">
            <p>Mon–Sat: 7:00 am – 3:00 pm</p>
            <p>Sunday: 7:00 am – 1:00 pm</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3a3a3a] px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4 text-[#5a5a5a] text-xs">
          <span>© {currentYear} Caliber Coffee Roasters</span>
          <span>·</span>
          <span>Bozeman & Big Sky, Montana</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:4062193159" className="flex items-center gap-1.5 text-[#5a5a5a] hover:text-[#6b8c6b] transition-colors text-xs">
            <Phone size={12} />
            (406) 219-3159
          </a>
          <span className="text-[#3a3a3a]">·</span>
          <a
            href="https://www.lonepeakdesigns.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5a5a5a] hover:text-[#c9a84c] transition-colors text-xs"
          >
            Built by Lone Peak Designs
          </a>
        </div>
      </div>
    </footer>
  )
}
