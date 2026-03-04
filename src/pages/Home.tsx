import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart, Star, Coffee, Sun, MapPin, Phone } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const garamond = "'Cormorant Garamond', serif"

const reviews = [
  {
    text: "Love love love this little coffee shop. Owners and staff are so kind and welcoming. Great food for a quick grab and go in the morning and delicious drinks!",
    author: "Monica Ellis",
    stars: 5,
  },
  {
    text: "Best coffee in Big Sky, no question. The roasts are always fresh and the baristas really know their craft. Nothing beats grabbing a Caliber latte before a powder day.",
    author: "James T.",
    stars: 5,
  },
  {
    text: "Found this gem while skiing Big Sky. The cold brew is outstanding — bought a bag of whole bean to take home. Five stars, every time.",
    author: "Sarah M.",
    stars: 5,
  },
]

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const reviewRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const [activeReview, setActiveReview] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTl
        .from('.hero-badge', { opacity: 0, y: 20, duration: 0.8 })
        .from('.hero-headline', { opacity: 0, y: 60, duration: 1.1, stagger: 0.1 }, '-=0.4')
        .from('.hero-body', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-ctas', { opacity: 0, y: 20, duration: 0.7 }, '-=0.4')
        .from('.hero-phone', { opacity: 0, x: 30, duration: 0.8 }, '-=1')

      // Story section
      gsap.from('.story-img', {
        opacity: 0, x: -50, duration: 1,
        scrollTrigger: { trigger: storyRef.current, start: 'top 75%' }
      })
      gsap.from('.story-text', {
        opacity: 0, x: 50, duration: 1, delay: 0.15,
        scrollTrigger: { trigger: storyRef.current, start: 'top 75%' }
      })

      // Menu tiles
      gsap.from('.menu-tile', {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: menuRef.current, start: 'top 70%' }
      })

      // Reviews
      gsap.from('.review-card', {
        opacity: 0, y: 30, duration: 0.9,
        scrollTrigger: { trigger: reviewRef.current, start: 'top 80%' }
      })

      // CTA
      gsap.from('.cta-content', {
        opacity: 0, y: 40, duration: 1,
        scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' }
      })
    })

    return () => ctx.revert()
  }, [])

  // Auto-rotate reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview(r => (r + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80"
          alt="Cozy coffee shop interior"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.85) brightness(0.55)' }}
        />
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(36,59,46,0.75) 0%, rgba(196,98,45,0.3) 100%)' }}
        />

        <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 pb-20 pt-32 min-h-[90vh]">
          <div className="max-w-5xl">
            {/* Award badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-[#e8c98a] text-[#243b2e] px-4 py-2 mb-8 text-xs tracking-widest uppercase" style={{ fontWeight: 700 }}>
              <Star size={12} fill="#c4622d" stroke="none" />
              Voted Best Coffee in Big Sky — 5 Years Running
              <Star size={12} fill="#c4622d" stroke="none" />
            </div>

            <h1 className="text-white leading-none mb-6" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(52px, 7vw, 96px)' }}>
              <span className="hero-headline block">Your Mountain.</span>
              <span className="hero-headline block" style={{ fontStyle: 'italic', color: '#e8c98a' }}>Your Morning.</span>
              <span className="hero-headline block">Your Caliber.</span>
            </h1>

            <p className="hero-body text-[#d4c4b0] text-xl leading-relaxed max-w-xl mb-10" style={{ fontWeight: 300 }}>
              Locally owned and roasted in Big Sky, Montana. We fuel your adventures with coffee crafted by neighbors who care about every cup. Two locations, one community.
            </p>

            <div className="hero-ctas flex flex-wrap gap-4">
              <a
                href="https://caliber-coffee-109908.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#c4622d] text-white px-10 py-4 hover:bg-[#b45020] transition-colors"
                style={{ fontWeight: 600 }}
              >
                Order Online <ArrowUpRight size={18} />
              </a>
              <Link
                to="/locations"
                className="border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-[#243b2e] transition-colors"
                style={{ fontWeight: 500 }}
              >
                Find Us
              </Link>
            </div>
          </div>
        </div>

        {/* Phone callout — floating card */}
        <div className="hero-phone absolute bottom-20 right-8 md:right-16 z-10 bg-[#faf5ee] p-6 max-w-[220px] hidden md:block">
          <div className="text-[#c4622d] text-xs tracking-widest uppercase mb-2" style={{ fontWeight: 600 }}>Call Ahead</div>
          <a
            href="tel:4062193159"
            className="text-[#243b2e] text-2xl hover:text-[#c4622d] transition-colors block"
            style={{ fontFamily: garamond, fontWeight: 600 }}
          >
            (406) 219-3159
          </a>
          <div className="text-[#8a6a50] text-xs mt-1" style={{ fontWeight: 300 }}>Both locations</div>
        </div>
      </section>

      {/* ── Story ── */}
      <section ref={storyRef} className="py-24 px-8 md:px-16 bg-[#faf5ee]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="story-img col-span-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80"
                alt="Inside Caliber Coffee"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
              />
              <div className="absolute -bottom-5 -right-5 bg-[#c4622d] p-6 text-white text-center">
                <div className="text-5xl leading-none" style={{ fontFamily: garamond, fontWeight: 700 }}>5×</div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ fontWeight: 500 }}>Best Coffee</div>
                <div className="text-xs tracking-widest uppercase" style={{ fontWeight: 300 }}>Big Sky</div>
              </div>
            </div>
          </div>

          <div className="col-span-1 hidden md:block" />

          <div className="story-text col-span-6 md:pt-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart size={18} className="text-[#c4622d]" fill="#c4622d" />
              <span className="text-[#c4622d] text-xs tracking-[0.3em] uppercase" style={{ fontWeight: 600 }}>Our Story</span>
            </div>
            <h2 className="text-[#243b2e] text-5xl leading-tight mb-8" style={{ fontFamily: garamond, fontWeight: 600 }}>
              We're Your Neighbors.<br />
              <span style={{ fontStyle: 'italic', color: '#c4622d' }}>We Roast Your Coffee.</span>
            </h2>
            <p className="text-[#5a4a3a] leading-relaxed mb-6 text-lg" style={{ fontWeight: 300 }}>
              Caliber Coffee was born in Big Sky, Montana — built from a love for mountains, community, and exceptional coffee. We roast every batch locally, keeping quality close and waste low. Every cup you drink here stays in the community.
            </p>
            <p className="text-[#5a4a3a] leading-relaxed mb-8 text-lg" style={{ fontWeight: 300 }}>
              Locally owned and operated, we wake up every morning to make yours better. Five Best of Big Sky awards tell us we're doing something right.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#243b2e] border-b border-[#243b2e] hover:text-[#c4622d] hover:border-[#c4622d] transition-colors text-sm tracking-widest uppercase pb-1"
              style={{ fontWeight: 600 }}
            >
              Read Our Full Story <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Menu Preview ── */}
      <section ref={menuRef} className="bg-[#243b2e] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[#e8c98a] text-xs tracking-[0.3em] uppercase block mb-4" style={{ fontWeight: 600 }}>What's Brewing</span>
              <h2 className="text-[#faf5ee] text-6xl" style={{ fontFamily: garamond, fontWeight: 600 }}>Our Menu</h2>
            </div>
            <Link
              to="/menu"
              className="border border-[#e8c98a] text-[#e8c98a] px-6 py-3 text-sm hover:bg-[#e8c98a] hover:text-[#243b2e] transition-colors flex items-center gap-2"
              style={{ fontWeight: 500 }}
            >
              Full Menu <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hot & Cold tile */}
            <div className="menu-tile p-10" style={{ backgroundColor: '#1e3228' }}>
              <Sun size={28} className="text-[#e8c98a] mb-4" />
              <h3 className="text-[#e8c98a] text-3xl mb-1" style={{ fontFamily: garamond, fontWeight: 600 }}>Morning Starters</h3>
              <p className="text-[#e8c98a] text-xs tracking-widest uppercase mb-6 opacity-60" style={{ fontWeight: 300 }}>Hot & Cold Drinks</p>
              <div className="grid grid-cols-2 gap-y-3">
                {['Drip Coffee', 'Espresso', 'Latte', 'Cappuccino', 'Flat White', 'Cold Brew', 'Iced Latte', 'Blended Drinks'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#e8c98a] opacity-50" />
                    <span className="text-sm text-[#e8c98a] opacity-80" style={{ fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Food tile */}
            <div className="menu-tile p-10" style={{ backgroundColor: '#c4622d' }}>
              <Coffee size={28} className="text-[#faf5ee] mb-4" />
              <h3 className="text-[#faf5ee] text-3xl mb-1" style={{ fontFamily: garamond, fontWeight: 600 }}>Baked Fresh Daily</h3>
              <p className="text-[#faf5ee] text-xs tracking-widest uppercase mb-6 opacity-60" style={{ fontWeight: 300 }}>Food & Pastries</p>
              <div className="grid grid-cols-2 gap-y-3">
                {['Morning Pastries', 'Fresh Muffins', 'Butter Croissant', 'Banana Bread', 'Granola Bars', 'Grab & Go Bites'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#faf5ee] opacity-50" />
                    <span className="text-sm text-[#faf5ee] opacity-80" style={{ fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Wide bottom tile */}
            <div className="menu-tile col-span-1 md:col-span-2 bg-[#e8c98a] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-[#243b2e] text-3xl mb-2" style={{ fontFamily: garamond, fontWeight: 600 }}>Take the Mountain Home</h3>
                <p className="text-[#5a3a20]" style={{ fontWeight: 300 }}>
                  Whole Bean Coffee & Merchandise — Big Sky House Blend, Single Origin seasonal roasts, Caliber gear & gift cards
                </p>
              </div>
              <a
                href="https://caliber-coffee-109908.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#243b2e] text-[#e8c98a] px-8 py-4 hover:bg-[#1a2e22] transition-colors whitespace-nowrap"
                style={{ fontWeight: 600 }}
              >
                Shop Now <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section ref={reviewRef} className="bg-[#faf5ee] py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Heart size={28} className="text-[#c4622d] mx-auto mb-4" fill="#c4622d" />
          <h2 className="text-[#243b2e] text-5xl mb-4" style={{ fontFamily: garamond, fontWeight: 600 }}>Our Community Speaks</h2>
          <p className="text-[#8a6a50] mb-12" style={{ fontWeight: 300 }}>4.6 stars · 89 Google Reviews</p>

          <div className="review-card bg-white border border-[#e8d5bc] p-10 mb-6">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={20} fill="#c4622d" stroke="none" />
              ))}
            </div>
            <p className="text-[#243b2e] text-2xl italic leading-relaxed mb-6" style={{ fontFamily: garamond }}>
              "{reviews[activeReview].text}"
            </p>
            <p className="text-[#c4622d] text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
              — {reviews[activeReview].author}
            </p>
          </div>

          <div className="flex justify-center gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReview(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === activeReview ? 'bg-[#c4622d]' : 'bg-[#d8c8b4]'}`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations Banner ── */}
      <section ref={ctaRef} className="bg-[#c4622d] py-24 px-8 md:px-16">
        <div className="cta-content max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#e8c98a] text-xs tracking-[0.3em] uppercase block mb-4" style={{ fontWeight: 600 }}>Come Say Hello</span>
            <h2 className="text-white" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(40px, 5vw, 72px)' }}>
              We Can't Wait<br /><span style={{ fontStyle: 'italic' }}>to Meet You</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: 'Bozeman',
                address: '1805 West Oak St #2',
                city: 'Bozeman, MT 59718',
                weekday: 'Mon–Sat: 7:00am – 3:00pm',
                sunday: 'Sunday: 8:00am – 3:00pm',
              },
              {
                name: 'Big Sky',
                address: '80 Snowy Mountain Circle',
                city: 'Big Sky, MT 59716',
                weekday: 'Mon–Sat: 7:00am – 3:00pm',
                sunday: 'Sunday: 7:00am – 1:00pm',
              },
            ].map((loc) => (
              <div key={loc.name} className="bg-[#b45020] p-10 hover:bg-[#a84018] transition-colors">
                <h3 className="text-white text-3xl mb-6" style={{ fontFamily: garamond, fontWeight: 600 }}>{loc.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#e8c98a] mt-0.5 flex-shrink-0" />
                    <div className="text-[#f4d9c0] text-sm" style={{ fontWeight: 300 }}>
                      {loc.address}<br />{loc.city}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#e8c98a]" />
                    <a href="tel:4062193159" className="text-[#f4d9c0] text-sm hover:text-white transition-colors" style={{ fontWeight: 300 }}>
                      (406) 219-3159
                    </a>
                  </div>
                  <div className="text-[#f4d9c0] text-sm pl-6" style={{ fontWeight: 300 }}>
                    <div>{loc.weekday}</div>
                    <div>{loc.sunday}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://caliber-coffee-109908.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#faf5ee] text-[#c4622d] px-12 py-5 text-lg hover:bg-white transition-colors"
              style={{ fontWeight: 700 }}
            >
              Order Ahead for Pickup <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
