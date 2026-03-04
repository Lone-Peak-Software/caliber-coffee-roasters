import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Instagram, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const garamond = "'Cormorant Garamond', serif"

export default function Contact() {
  const headerRef = useRef<HTMLElement>(null)
  const infoRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.contact-block', {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: infoRef.current, start: 'top 80%' }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="pt-[73px] bg-[#faf5ee] min-h-screen">
      {/* ── Header ── */}
      <section ref={headerRef} className="px-8 md:px-16 py-20 border-b border-[#e8d5bc]">
        <div className="contact-header max-w-screen-xl mx-auto">
          <span className="text-[#c4622d] text-xs tracking-[0.3em] uppercase block mb-4" style={{ fontWeight: 600 }}>Reach Out</span>
          <h1 className="text-[#243b2e] leading-tight" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(44px, 6vw, 80px)' }}>
            We'd Love to<br />
            <span style={{ fontStyle: 'italic', color: '#c4622d' }}>Hear From You.</span>
          </h1>
          <p className="text-[#5a4a3a] text-xl max-w-2xl mt-6" style={{ fontWeight: 300 }}>
            Questions about our coffee, locations, events, or wholesale? Drop us a line — we're friendly, we promise.
          </p>
        </div>
      </section>

      {/* ── Contact Info ── */}
      <section ref={infoRef} className="px-8 md:px-16 py-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="contact-block bg-[#243b2e] p-10">
            <Phone size={28} className="text-[#e8c98a] mb-5" />
            <h3 className="text-[#faf5ee] text-2xl mb-3" style={{ fontFamily: garamond, fontWeight: 600 }}>Call Us</h3>
            <p className="text-[#7aaa7a] mb-5 text-sm" style={{ fontWeight: 300 }}>
              The same number reaches both locations. Give us a ring any time we're open.
            </p>
            <a
              href="tel:4062193159"
              className="text-[#e8c98a] text-2xl hover:text-white transition-colors block"
              style={{ fontFamily: garamond, fontWeight: 600 }}
            >
              (406) 219-3159
            </a>
          </div>

          {/* Email */}
          <div className="contact-block bg-[#c4622d] p-10">
            <Mail size={28} className="text-[#faf5ee] mb-5" />
            <h3 className="text-[#faf5ee] text-2xl mb-3" style={{ fontFamily: garamond, fontWeight: 600 }}>Email Us</h3>
            <p className="text-[#f4d9c0] mb-5 text-sm" style={{ fontWeight: 300 }}>
              For wholesale inquiries, events, or general questions — we check our inbox daily.
            </p>
            <a
              href="mailto:calibercoffeemt@icloud.com"
              className="text-[#faf5ee] text-lg hover:text-white transition-colors break-all"
              style={{ fontFamily: garamond, fontWeight: 600 }}
            >
              calibercoffeemt@icloud.com
            </a>
          </div>

          {/* Instagram */}
          <div className="contact-block bg-[#e8c98a] p-10">
            <Instagram size={28} className="text-[#243b2e] mb-5" />
            <h3 className="text-[#243b2e] text-2xl mb-3" style={{ fontFamily: garamond, fontWeight: 600 }}>Follow Along</h3>
            <p className="text-[#5a3a20] mb-5 text-sm" style={{ fontWeight: 300 }}>
              See what's brewing, catch seasonal specials, and meet the faces behind your cup.
            </p>
            <a
              href="https://www.instagram.com/calibercoffeeroasters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#243b2e] text-xl hover:text-[#c4622d] transition-colors"
              style={{ fontFamily: garamond, fontWeight: 600 }}
            >
              @calibercoffeeroasters
            </a>
          </div>
        </div>
      </section>

      {/* ── Locations Summary ── */}
      <section className="bg-[#243b2e] px-8 md:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#e8c98a] text-xs tracking-[0.3em] uppercase block mb-4" style={{ fontWeight: 600 }}>Where to Find Us</span>
            <h2 className="text-[#faf5ee]" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(36px, 4vw, 60px)' }}>
              Two Ways to Get Your Fix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Bozeman',
                address: '1805 West Oak St #2',
                city: 'Bozeman, MT 59718',
                hours: ['Mon–Sat: 7:00 am – 3:00 pm', 'Sunday: 8:00 am – 3:00 pm'],
                mapLink: 'https://maps.google.com/?q=1805+W+Oak+St+%232,+Bozeman,+MT+59718',
              },
              {
                name: 'Big Sky',
                address: '80 Snowy Mountain Circle',
                city: 'Big Sky, MT 59716',
                hours: ['Mon–Sat: 7:00 am – 3:00 pm', 'Sunday: 7:00 am – 1:00 pm'],
                mapLink: 'https://maps.google.com/?q=80+Snowy+Mountain+Circle,+Big+Sky,+MT+59716',
              },
            ].map((loc) => (
              <div key={loc.name} className="bg-[#1e3228] p-10">
                <h3 className="text-[#e8c98a] text-3xl mb-6" style={{ fontFamily: garamond, fontWeight: 600 }}>{loc.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-[#e8c98a] mt-0.5 flex-shrink-0" />
                    <div className="text-[#7aaa7a] text-sm" style={{ fontWeight: 300 }}>
                      {loc.address}<br />{loc.city}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={15} className="text-[#e8c98a] mt-0.5 flex-shrink-0" />
                    <div className="text-[#7aaa7a] text-sm" style={{ fontWeight: 300 }}>
                      {loc.hours.map((h) => <div key={h}>{h}</div>)}
                    </div>
                  </div>
                </div>
                <a
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-[#e8c98a] border-b border-[#e8c98a] hover:text-white hover:border-white transition-colors text-sm"
                  style={{ fontWeight: 500 }}
                >
                  Get Directions <ArrowUpRight size={13} />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 bg-[#c4622d] text-white px-10 py-4 hover:bg-[#b45020] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Full Location Details <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Order CTA ── */}
      <div className="bg-[#e8c98a] px-8 md:px-16 py-14">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#243b2e] text-3xl mb-2" style={{ fontFamily: garamond, fontWeight: 600 }}>
              Ready to Order?
            </h3>
            <p className="text-[#5a3a20]" style={{ fontWeight: 300 }}>
              Order ahead online — skip the line and pick up at either location.
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
