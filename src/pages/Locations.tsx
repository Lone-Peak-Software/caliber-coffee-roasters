import { useEffect, useRef } from 'react'
import { MapPin, Phone, Clock, ArrowUpRight, ExternalLink } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const garamond = "'Cormorant Garamond', serif"

const locations = [
  {
    id: 'bozeman',
    name: 'Bozeman',
    tagline: 'Your neighborhood roastery',
    address: '1805 West Oak St #2',
    city: 'Bozeman, MT 59718',
    phone: '(406) 219-3159',
    hours: [
      { label: 'Monday – Saturday', time: '7:00 am – 3:00 pm' },
      { label: 'Sunday', time: '8:00 am – 3:00 pm' },
    ],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80',
    mapLink: 'https://maps.google.com/?q=1805+W+Oak+St+%232,+Bozeman,+MT+59718',
    bg: '#243b2e',
    accent: '#e8c98a',
  },
  {
    id: 'bigsky',
    name: 'Big Sky',
    tagline: 'Fuel for your mountain day',
    address: '80 Snowy Mountain Circle',
    city: 'Big Sky, MT 59716',
    phone: '(406) 219-3159',
    hours: [
      { label: 'Monday – Saturday', time: '7:00 am – 3:00 pm' },
      { label: 'Sunday', time: '7:00 am – 1:00 pm' },
    ],
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80',
    mapLink: 'https://maps.google.com/?q=80+Snowy+Mountain+Circle,+Big+Sky,+MT+59716',
    bg: '#c4622d',
    accent: '#faf5ee',
  },
]

export default function Locations() {
  const headerRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.locs-header', {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.location-card', {
        opacity: 0, y: 50, duration: 0.9, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="pt-[73px] bg-[#faf5ee] min-h-screen">
      {/* ── Header ── */}
      <section ref={headerRef} className="px-8 md:px-16 py-20 border-b border-[#e8d5bc]">
        <div className="locs-header max-w-screen-xl mx-auto">
          <span className="text-[#c4622d] text-xs tracking-[0.3em] uppercase block mb-4" style={{ fontWeight: 600 }}>Come Say Hello</span>
          <h1 className="text-[#243b2e] leading-tight" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(44px, 6vw, 80px)' }}>
            Two Locations.<br />
            <span style={{ fontStyle: 'italic', color: '#c4622d' }}>One Community.</span>
          </h1>
          <p className="text-[#5a4a3a] text-xl max-w-2xl mt-6" style={{ fontWeight: 300 }}>
            Whether you're waking up in Bozeman or hitting the slopes in Big Sky, we're right there with you — ready to make your morning.
          </p>
        </div>
      </section>

      {/* ── Location Cards ── */}
      <section ref={cardsRef} className="px-8 md:px-16 py-20">
        <div className="max-w-screen-xl mx-auto space-y-12">
          {locations.map((loc) => (
            <div key={loc.id} className="location-card grid grid-cols-1 md:grid-cols-2 overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ minHeight: '360px' }}>
                <img
                  src={loc.image}
                  alt={`Caliber Coffee ${loc.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Info panel */}
              <div className="p-10 md:p-14 flex flex-col justify-center" style={{ backgroundColor: loc.bg }}>
                <span className="text-xs tracking-[0.3em] uppercase block mb-3" style={{ color: loc.accent, fontWeight: 600 }}>
                  {loc.tagline}
                </span>
                <h2 className="mb-8" style={{ fontFamily: garamond, fontWeight: 600, color: loc.accent, fontSize: 'clamp(36px, 4vw, 60px)' }}>
                  {loc.name}
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: loc.accent }} />
                    <div className="text-sm" style={{ color: loc.accent, opacity: 0.85, fontWeight: 300 }}>
                      {loc.address}<br />{loc.city}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="flex-shrink-0" style={{ color: loc.accent }} />
                    <a
                      href="tel:4062193159"
                      className="text-sm transition-opacity hover:opacity-100"
                      style={{ color: loc.accent, opacity: 0.85, fontWeight: 300 }}
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: loc.accent }} />
                    <div className="text-sm" style={{ fontWeight: 300 }}>
                      {loc.hours.map((h) => (
                        <div key={h.label} style={{ color: loc.accent, opacity: 0.85 }}>
                          <span>{h.label}: </span>
                          <span style={{ fontWeight: 500 }}>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm transition-colors"
                    style={{
                      backgroundColor: loc.accent,
                      color: loc.bg,
                      fontWeight: 600,
                    }}
                  >
                    Get Directions <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://caliber-coffee-109908.square.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border px-6 py-3 text-sm transition-opacity hover:opacity-70"
                    style={{ borderColor: loc.accent, color: loc.accent, fontWeight: 500 }}
                  >
                    Order Ahead <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Order Ahead Banner ── */}
      <div className="bg-[#e8c98a] px-8 md:px-16 py-14">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#243b2e] text-3xl mb-2" style={{ fontFamily: garamond, fontWeight: 600 }}>
              Skip the Wait — Order Ahead
            </h3>
            <p className="text-[#5a3a20]" style={{ fontWeight: 300 }}>
              Order online through our Square store and pick up at either location.
            </p>
          </div>
          <a
            href="https://caliber-coffee-109908.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#243b2e] text-[#e8c98a] px-10 py-4 hover:bg-[#1a2e22] transition-colors whitespace-nowrap"
            style={{ fontWeight: 700 }}
          >
            Order Online <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </main>
  )
}
