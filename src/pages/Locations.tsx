import { useState, useEffect, useRef } from 'react'
import { MapPin, Clock, Phone, ExternalLink, ShoppingBag } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const locations = [
  {
    id: 'bozeman',
    city: 'Bozeman',
    tagline: 'The Valley Roost',
    address: '1805 W Oak St #2',
    cityState: 'Bozeman, MT 59718',
    phone: '(406) 219-3159',
    hours: {
      'Mon – Sat': '7:00 am – 3:00 pm',
      'Sunday': '8:00 am – 3:00 pm',
    },
    mapsUrl: 'https://maps.google.com/?q=1805+W+Oak+St+%232,+Bozeman,+MT+59718',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80',
    desc: 'Our Bozeman location brings Big Sky energy to the valley. Whether you\'re heading to Montana State or exploring downtown, we\'re your first cup of the morning.',
    note: 'Pickup available via Square — order ahead and skip the wait.',
  },
  {
    id: 'bigsky',
    city: 'Big Sky',
    tagline: 'The Mountain Original',
    address: '80 Snowy Mountain Circle',
    cityState: 'Big Sky, MT 59716',
    phone: '(406) 219-3159',
    hours: {
      'Mon – Sat': '7:00 am – 3:00 pm',
      'Sunday': '7:00 am – 1:00 pm',
    },
    mapsUrl: 'https://maps.google.com/?q=80+Snowy+Mountain+Circle,+Big+Sky,+MT+59716',
    image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1200&q=80',
    desc: 'Where it all started. Fuel up before a powder day, warm up after a long ski, or grab a bag of whole bean to take home from the mountain.',
    note: 'Closes at 1:00 pm on Sundays — plan your morning accordingly.',
  },
]

export default function Locations() {
  const [activeDay, setActiveDay] = useState<'weekday' | 'sunday'>('weekday')
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.locations-header', {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.location-card', {
        opacity: 0, y: 50, duration: 0.9, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.locations-grid', start: 'top 75%' }
      })
      gsap.from('.hours-section', {
        opacity: 0, y: 30, duration: 0.8,
        scrollTrigger: { trigger: '.hours-section', start: 'top 80%' }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef} className="pt-[73px] bg-[#f0ece4] min-h-screen">
      {/* Header */}
      <div className="locations-header px-6 md:px-16 py-16 max-w-screen-xl mx-auto">
        <span className="text-[#6b8c6b] text-xs tracking-[0.3em] uppercase block mb-4">Find Us</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1 className="font-bold text-[#2e2e2e] text-5xl md:text-6xl leading-none">
            Two Locations.<br />
            <span className="text-[#6b8c6b]">One Standard.</span>
          </h1>
          <p className="text-[#5a5a5a] font-light leading-relaxed max-w-sm">
            Whether you're in Bozeman or Big Sky, you'll find the same fresh roast and
            the same warm welcome.
          </p>
        </div>
      </div>

      {/* Location cards */}
      <div className="locations-grid px-6 md:px-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
        {locations.map((loc) => (
          <div key={loc.id} className="location-card bg-[#2e2e2e] overflow-hidden">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={loc.image}
                alt={`Caliber Coffee ${loc.city}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ filter: 'saturate(0.6)' }}
              />
              <div className="absolute top-6 left-6">
                <span className="bg-[#6b8c6b] text-[#f0ece4] text-xs tracking-[0.2em] uppercase px-4 py-2">
                  {loc.tagline}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <h2 className="font-bold text-[#f0ece4] text-3xl mb-2">{loc.city}</h2>
              <p className="text-[#8a8a8a] font-light text-sm leading-relaxed mb-8">
                {loc.desc}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#6b8c6b] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#f0ece4] text-sm">{loc.address}</div>
                    <div className="text-[#8a8a8a] text-sm">{loc.cityState}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#6b8c6b] flex-shrink-0" />
                  <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-[#f0ece4] text-sm hover:text-[#6b8c6b] transition-colors">
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#6b8c6b] flex-shrink-0 mt-0.5" />
                  <div>
                    {Object.entries(loc.hours).map(([day, time]) => (
                      <div key={day} className="flex gap-4 text-sm mb-1">
                        <span className="text-[#6a6a6a] w-20 flex-shrink-0">{day}</span>
                        <span className="text-[#c9a84c] font-medium">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {loc.note && (
                <p className="text-[#6a6a6a] text-xs italic mb-8 border-l-2 border-[#6b8c6b] pl-3">
                  {loc.note}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#4a4a4a] text-[#f0ece4] px-5 py-2.5 text-sm hover:border-[#6b8c6b] hover:text-[#6b8c6b] transition-colors"
                >
                  <ExternalLink size={13} />
                  Get Directions
                </a>
                <a
                  href="tel:4062193159"
                  className="flex items-center gap-2 border border-[#4a4a4a] text-[#f0ece4] px-5 py-2.5 text-sm hover:border-[#6b8c6b] hover:text-[#6b8c6b] transition-colors"
                >
                  <Phone size={13} />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Consolidated hours section */}
      <section className="hours-section bg-[#2e2e2e] py-20 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[#6b8c6b] text-xs tracking-[0.3em] uppercase block mb-4">Hours at a Glance</span>
          <h2 className="font-bold text-[#f0ece4] text-4xl mb-10">When We're Open</h2>

          <div className="flex gap-px mb-10">
            {(['weekday', 'sunday'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-8 py-3 text-sm font-medium tracking-wider transition-colors ${
                  activeDay === day
                    ? 'bg-[#6b8c6b] text-[#f0ece4]'
                    : 'bg-[#3a3a3a] text-[#8a8a8a] hover:bg-[#424242]'
                }`}
              >
                {day === 'weekday' ? 'Mon – Sat' : 'Sunday'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc) => {
              const hoursEntry = Object.entries(loc.hours)
              const selectedHours = activeDay === 'weekday' ? hoursEntry[0][1] : hoursEntry[1][1]
              return (
                <div key={loc.id} className="bg-[#252525] p-8">
                  <h3 className="font-semibold text-[#f0ece4] text-xl mb-3">{loc.city}</h3>
                  <div className="flex items-center gap-2 text-[#6a6a6a] text-sm mb-4">
                    <MapPin size={14} className="text-[#6b8c6b]" />
                    {loc.address}, {loc.cityState}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#6b8c6b]" />
                    <span className="text-[#c9a84c] font-medium text-lg">{selectedHours}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 flex items-center gap-6">
            <a href="tel:4062193159" className="flex items-center gap-2 text-[#6b8c6b] hover:text-[#8aab8a] transition-colors text-sm">
              <Phone size={16} />
              (406) 219-3159
            </a>
            <span className="text-[#3a3a3a]">|</span>
            <a
              href="https://caliber-coffee-109908.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#c9a84c] text-[#2e2e2e] px-8 py-3 font-medium tracking-wide hover:bg-[#b8973b] transition-colors text-sm"
            >
              <ShoppingBag size={14} />
              Order Online for Pickup
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
