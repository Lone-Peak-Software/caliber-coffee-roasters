import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mountain, Award, ShoppingBag, ArrowRight, Coffee, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const awardsRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTl
        .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8 })
        .from('.hero-headline', { opacity: 0, y: 60, duration: 1.1, stagger: 0.08 }, '-=0.4')
        .from('.hero-body', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-ctas', { opacity: 0, y: 20, duration: 0.7 }, '-=0.4')
        .from('.hero-stats', { opacity: 0, y: 20, duration: 0.7, stagger: 0.1 }, '-=0.3')
        .from('.hero-image', { opacity: 0, scale: 1.05, duration: 1.2 }, '-=1.4')
        .from('.hero-award-strip', { opacity: 0, x: 40, duration: 0.8 }, '-=1')

      // Story section
      gsap.from('.story-left', {
        opacity: 0, x: -50, duration: 1,
        scrollTrigger: { trigger: storyRef.current, start: 'top 75%' }
      })
      gsap.from('.story-right', {
        opacity: 0, x: 50, duration: 1, delay: 0.2,
        scrollTrigger: { trigger: storyRef.current, start: 'top 75%' }
      })

      // Menu section
      gsap.from('.menu-header', {
        opacity: 0, y: 30, duration: 0.8,
        scrollTrigger: { trigger: menuRef.current, start: 'top 80%' }
      })
      gsap.from('.menu-card', {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: menuRef.current, start: 'top 70%' }
      })

      // Awards
      gsap.from('.award-item', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: awardsRef.current, start: 'top 80%' }
      })

      // CTA
      gsap.from('.cta-content', {
        opacity: 0, y: 40, duration: 1,
        scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main>
      {/* ── Hero ── */}
      <section ref={heroRef} className="grid grid-cols-12 min-h-screen pt-[73px]">
        {/* Text block: col 1–7 */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-between p-8 md:p-16 bg-[#f0ece4]">
          <div className="hero-eyebrow flex items-center gap-4 mt-4">
            <div className="w-2 h-2 rounded-full bg-[#6b8c6b]" />
            <span className="text-xs tracking-[0.3em] text-[#6a6a6a] uppercase">
              Locally Roasted · Big Sky & Bozeman, MT
            </span>
          </div>

          <div className="my-12 md:my-0">
            <h1
              className="font-bold text-[#2e2e2e] leading-none mb-8"
              style={{ fontSize: 'clamp(54px, 8vw, 120px)' }}
            >
              <span className="hero-headline block">We</span>
              <span className="hero-headline block">Roast.</span>
              <span className="hero-headline block text-[#6b8c6b]">You</span>
              <span className="hero-headline block text-[#6b8c6b]">Shred.</span>
            </h1>
            <p className="hero-body text-[#5a5a5a] text-lg leading-relaxed max-w-xl font-light mb-10">
              Montana's mountain roastery. Voted Best Coffee in Big Sky five years running.
              Two locations, zero compromise on craft.
            </p>
            <div className="hero-ctas flex flex-wrap gap-4">
              <a
                href="https://caliber-coffee-109908.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#6b8c6b] text-white px-8 py-4 font-medium tracking-wide hover:bg-[#5a7a5a] transition-colors"
              >
                <ShoppingBag size={16} />
                Order Your Coffee
              </a>
              <Link
                to="/locations"
                className="flex items-center gap-2 border border-[#2e2e2e] text-[#2e2e2e] px-8 py-4 font-medium tracking-wide hover:bg-[#2e2e2e] hover:text-[#f0ece4] transition-colors"
              >
                Find a Location
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { num: '5×', label: 'Best Coffee Award' },
              { num: '4.6', label: 'Google Rating' },
              { num: '2', label: 'MT Locations' },
            ].map((stat, i) => (
              <div key={i} className="hero-stats border-l-2 border-[#c9a84c] pl-4">
                <div className="font-bold text-[#2e2e2e] text-3xl">{stat.num}</div>
                <div className="text-[#6a6a6a] text-xs tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image column: col 8–10 */}
        <div className="hidden md:block md:col-span-3 relative overflow-hidden bg-[#2e2e2e]">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80"
            alt="Coffee preparation at Caliber Coffee"
            className="hero-image absolute inset-0 w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Award strip: col 11–12 */}
        <div className="hidden md:flex md:col-span-2 bg-[#6b8c6b] flex-col items-center justify-center p-6 gap-6 hero-award-strip">
          <Award className="text-[#f0ece4]" size={28} strokeWidth={1.5} />
          {[2018, 2019, 2020, 2021, 2022].map(year => (
            <div
              key={year}
              className="text-[#f0ece4] text-xs tracking-[0.25em] uppercase"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            >
              Best Coffee Big Sky {year}
            </div>
          ))}
        </div>
      </section>

      {/* ── Story ── */}
      <section ref={storyRef} className="bg-[#2e2e2e]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left: branded panel */}
          <div className="story-left col-span-1 bg-[#6b8c6b] p-12 flex flex-col justify-end min-h-[380px]">
            <div className="mt-auto">
              <span className="text-[#f0ece4] text-xs tracking-[0.3em] uppercase block mb-4">Our Origin</span>
              <h2 className="font-bold text-[#f0ece4] text-4xl leading-tight">
                Roasted<br />in Big<br />Sky.
              </h2>
            </div>
          </div>

          {/* Center: image */}
          <div className="story-left col-span-1 relative overflow-hidden min-h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800&q=80"
              alt="Coffee roasting process"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'saturate(0.6)' }}
            />
          </div>

          {/* Right: copy + quote */}
          <div className="story-right col-span-1 p-12 flex flex-col justify-center bg-[#252525]">
            <p className="text-[#8a8a8a] leading-relaxed mb-6 font-light">
              We are locally owned and operated in Big Sky, Montana. Every cup starts with beans
              we roast right here — meaning fresher coffee, more precision, more care.
            </p>
            <p className="text-[#8a8a8a] leading-relaxed mb-8 font-light">
              Fueling Big Sky adventures and Bozeman mornings since day one. Voted Best Coffee
              five consecutive years because we never stopped obsessing over the craft.
            </p>
            <div className="border border-[#4a4a4a] p-4">
              <p className="text-[#c9a84c] text-sm italic leading-relaxed">
                "Love love love this little coffee shop. Owners and staff are so kind and welcoming.
                Delicious drinks!"
              </p>
              <p className="text-[#5a5a5a] text-xs tracking-widest uppercase mt-3">— Monica Ellis</p>
            </div>
            <Link
              to="/about"
              className="mt-8 flex items-center gap-2 text-[#6b8c6b] hover:text-[#8aab8a] transition-colors text-sm tracking-widest uppercase border-b border-[#6b8c6b] w-fit pb-1"
            >
              Read Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Menu Preview ── */}
      <section ref={menuRef} className="bg-[#f0ece4] py-24 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="menu-header flex items-end justify-between mb-16">
            <div>
              <span className="text-[#6b8c6b] text-xs tracking-[0.3em] uppercase block mb-3">
                Explore Our Offerings
              </span>
              <h2 className="font-bold text-[#2e2e2e] text-5xl">The Menu</h2>
            </div>
            <Link
              to="/menu"
              className="text-sm text-[#6b8c6b] tracking-widest uppercase hover:text-[#5a7a5a] transition-colors flex items-center gap-2 border-b border-[#6b8c6b] pb-1"
            >
              View full menu
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Hot Drinks */}
            <div className="menu-card col-span-12 md:col-span-6 bg-[#2e2e2e] p-10 group hover:bg-[#333] transition-colors">
              <Coffee className="text-[#c9a84c] mb-6" size={24} strokeWidth={1.5} />
              <h3 className="font-semibold text-[#f0ece4] text-xl mb-6 tracking-tight">Hot Drinks</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {['Espresso', 'Americano', 'Latte', 'Cappuccino', 'Flat White', 'Pour Over', 'Drip Coffee', 'Macchiato'].map((item) => (
                  <span key={item} className="text-[#8a8a8a] text-sm font-light">{item}</span>
                ))}
              </div>
            </div>

            {/* Cold Drinks */}
            <div className="menu-card col-span-12 md:col-span-6 bg-[#6b8c6b] p-10 group hover:bg-[#5a7a5a] transition-colors">
              <Coffee className="text-[#f0ece4] mb-6" size={24} strokeWidth={1.5} />
              <h3 className="font-semibold text-[#f0ece4] text-xl mb-6 tracking-tight">Cold Drinks</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {['Cold Brew', 'Iced Latte', 'Iced Americano', 'Nitro Cold Brew', 'Blended Drinks', 'Iced Macchiato'].map((item) => (
                  <span key={item} className="text-[#c8e0c8] text-sm font-light">{item}</span>
                ))}
              </div>
            </div>

            {/* Baked Goods */}
            <div className="menu-card col-span-12 md:col-span-4 bg-[#c9a84c] p-8">
              <h3 className="font-semibold text-[#2e2e2e] text-lg mb-4 tracking-tight">Baked Goods</h3>
              <div className="space-y-2">
                {['Morning Pastries', 'Fresh Muffins', 'Grab & Go Bites'].map((item) => (
                  <div key={item} className="text-[#4a3a10] text-sm font-light">{item}</div>
                ))}
              </div>
            </div>

            {/* Whole Bean */}
            <div className="menu-card col-span-12 md:col-span-4 bg-[#e8e2d6] p-8">
              <h3 className="font-semibold text-[#2e2e2e] text-lg mb-4 tracking-tight">Whole Bean Coffee</h3>
              <div className="space-y-2">
                {['Big Sky House Blend', 'Single Origin', 'Montana Dark', 'Decaf Select'].map((item) => (
                  <div key={item} className="text-[#5a5a5a] text-sm font-light">{item}</div>
                ))}
              </div>
            </div>

            {/* Merchandise */}
            <div className="menu-card col-span-12 md:col-span-4 bg-[#2e2e2e] p-8">
              <h3 className="font-semibold text-[#f0ece4] text-lg mb-4 tracking-tight">Merchandise</h3>
              <div className="space-y-2">
                {['Caliber Gear', 'Branded Mugs', 'Tumblers', 'Gift Cards'].map((item) => (
                  <div key={item} className="text-[#8a8a8a] text-sm font-light">{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://caliber-coffee-109908.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2e2e2e] text-[#f0ece4] px-10 py-4 font-medium tracking-wide hover:bg-[#6b8c6b] transition-colors"
            >
              <ShoppingBag size={16} />
              Order Online for Pickup
            </a>
          </div>
        </div>
      </section>

      {/* ── Awards Banner ── */}
      <section ref={awardsRef} className="bg-[#2e2e2e] py-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Award className="text-[#c9a84c]" size={48} strokeWidth={1} />
            </div>
            <div className="flex-1">
              <span className="text-[#6b8c6b] text-xs tracking-[0.3em] uppercase block mb-3">Recognition</span>
              <h2 className="font-bold text-[#f0ece4] text-3xl md:text-4xl mb-4">
                Five-Time Best Coffee in Big Sky
              </h2>
              <p className="text-[#8a8a8a] font-light">
                Voted by the community year after year — 2018, 2019, 2020, 2021, and 2022.
                We don't take the title lightly.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {[2018, 2019, 2020, 2021, 2022].map((year) => (
                <div key={year} className="award-item text-center">
                  <div className="w-12 h-12 border border-[#c9a84c] flex items-center justify-center mb-1">
                    <Star size={16} className="text-[#c9a84c]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#5a5a5a] text-xs">{year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-[#f0ece4] py-20 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12">
            <span className="text-[#6b8c6b] text-xs tracking-[0.3em] uppercase block mb-3">Guest Words</span>
            <h2 className="font-bold text-[#2e2e2e] text-4xl">What Montanans Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Love love love this little coffee shop. Owners and staff are so kind and welcoming. Delicious drinks!",
                author: "Monica Ellis",
                stars: 5,
              },
              {
                quote: "Best coffee in Big Sky, no question. The roasts are always fresh and the baristas really know their craft.",
                author: "Jake W.",
                stars: 5,
              },
              {
                quote: "Found this gem while skiing Big Sky. The cold brew is outstanding — bought a bag of whole bean to take home.",
                author: "Sarah T.",
                stars: 5,
              },
            ].map((review, i) => (
              <div key={i} className="bg-[#e8e2d6] p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#c9a84c] fill-[#c9a84c]" />
                  ))}
                </div>
                <p className="text-[#5a5a5a] text-sm leading-relaxed italic mb-6 font-light">
                  "{review.quote}"
                </p>
                <p className="text-[#8a8a8a] text-xs tracking-widest uppercase">— {review.author}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#8a8a8a] text-sm mt-8">
            4.6 stars · 89 reviews on Google
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section ref={ctaRef} className="bg-[#6b8c6b] py-24 px-6 md:px-16">
        <div className="cta-content max-w-3xl mx-auto text-center">
          <Mountain className="text-[#f0ece4] mx-auto mb-8" size={48} strokeWidth={1} />
          <h2 className="font-bold text-[#f0ece4] text-4xl md:text-5xl mb-6 leading-tight">
            Start Your Morning<br />the Montana Way
          </h2>
          <p className="text-[#c8e0c8] text-lg font-light mb-10 max-w-lg mx-auto">
            Whether you're hitting the slopes at Big Sky or rolling into Bozeman,
            we've got a roast with your name on it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://caliber-coffee-109908.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#f0ece4] text-[#2e2e2e] px-10 py-4 font-medium tracking-wide hover:bg-[#e0dbd3] transition-colors"
            >
              <ShoppingBag size={16} />
              Order Now
            </a>
            <Link
              to="/locations"
              className="flex items-center gap-2 border border-[#f0ece4] text-[#f0ece4] px-10 py-4 font-medium tracking-wide hover:bg-[#5a7a5a] transition-colors"
            >
              Get Directions
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
