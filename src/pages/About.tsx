import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Star, Award, Instagram, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const garamond = "'Cormorant Garamond', serif"

export default function About() {
  const headerRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const awardsRef = useRef<HTMLElement>(null)
  const reviewsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-header', {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.about-img', {
        opacity: 0, scale: 1.04, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 80%' }
      })
      gsap.from('.value-card', {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: valuesRef.current, start: 'top 75%' }
      })
      gsap.from('.award-item', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: awardsRef.current, start: 'top 80%' }
      })
      gsap.from('.review-item', {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: reviewsRef.current, start: 'top 75%' }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="pt-[73px] bg-[#faf5ee] min-h-screen">
      {/* ── Header ── */}
      <section ref={headerRef} className="px-8 md:px-16 py-20 max-w-screen-xl mx-auto">
        <div className="about-header mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Heart size={18} className="text-[#c4622d]" fill="#c4622d" />
            <span className="text-[#c4622d] text-xs tracking-[0.3em] uppercase" style={{ fontWeight: 600 }}>Our Story</span>
          </div>
          <h1 className="text-[#243b2e] leading-tight max-w-3xl" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(44px, 5vw, 80px)' }}>
            Born in the Mountains.<br />
            <span style={{ fontStyle: 'italic', color: '#c4622d' }}>Built for Your Morning.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="about-img col-span-5">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80"
              alt="Caliber Coffee interior atmosphere"
              className="w-full object-cover"
              style={{ aspectRatio: '4/5' }}
            />
          </div>
          <div className="col-span-1 hidden md:block" />
          <div className="col-span-6 pt-4">
            <p className="text-[#5a4a3a] text-xl leading-relaxed mb-6" style={{ fontWeight: 300 }}>
              Caliber Coffee Roasters was born from a simple belief: your morning cup should come from people who care — neighbors who know the mountain, know the community, and roast every batch with intention.
            </p>
            <p className="text-[#5a4a3a] text-lg leading-relaxed mb-6" style={{ fontWeight: 300 }}>
              We're locally owned and operated in Big Sky, Montana. Every batch of coffee we roast is done right here, keeping quality close and keeping us accountable to the people who drink it. No middlemen. No compromises.
            </p>
            <p className="text-[#5a4a3a] text-lg leading-relaxed mb-8" style={{ fontWeight: 300 }}>
              With two locations — one in the heart of Big Sky and one in Bozeman — we serve the adventurers, the early risers, the locals, and the visitors who've learned to make us part of their routine. We're honored to have been voted Best Coffee in Big Sky five consecutive years. We don't take that lightly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 bg-[#c4622d] text-white px-8 py-4 hover:bg-[#b45020] transition-colors"
                style={{ fontWeight: 600 }}
              >
                Visit Us <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://www.instagram.com/calibercoffeeroasters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#243b2e] text-[#243b2e] px-8 py-4 hover:bg-[#243b2e] hover:text-white transition-colors"
                style={{ fontWeight: 500 }}
              >
                <Instagram size={16} />
                Follow Along
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section ref={valuesRef} className="bg-[#243b2e] py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#e8c98a] text-xs tracking-[0.3em] uppercase block mb-4" style={{ fontWeight: 600 }}>What We Stand For</span>
            <h2 className="text-[#faf5ee]" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(36px, 4vw, 64px)' }}>
              Coffee With Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Roasted Here',
                body: "Every bean we sell is roasted locally in Big Sky. That means it's fresher, more precise, and more honest than anything shipped from a city that's never seen a Montana winter.",
                accent: '#e8c98a',
                bg: '#1e3228',
              },
              {
                title: 'Community First',
                body: "We are your neighbors. We sponsor local events, support Big Sky and Bozeman businesses, and pour every cup knowing that the money stays here and grows the community we love.",
                accent: '#c4622d',
                bg: '#c4622d',
              },
              {
                title: 'No Compromise',
                body: "Five Best of Big Sky awards don't happen by cutting corners. We obsess over roast profiles, sourcing, and every interaction — because being your favorite coffee shop is something we earn every day.",
                accent: '#e8c98a',
                bg: '#1e3228',
              },
            ].map((v, i) => (
              <div key={i} className="value-card p-10" style={{ backgroundColor: v.bg }}>
                <h3 className="mb-4" style={{ fontFamily: garamond, fontWeight: 600, color: v.accent, fontSize: '1.75rem' }}>
                  {v.title}
                </h3>
                <p className="text-[#d4c4b0] leading-relaxed" style={{ fontWeight: 300 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section ref={awardsRef} className="bg-[#faf5ee] py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <Award size={36} className="text-[#c4622d] mx-auto mb-4" />
            <span className="text-[#c4622d] text-xs tracking-[0.3em] uppercase block mb-4" style={{ fontWeight: 600 }}>Recognition</span>
            <h2 className="text-[#243b2e]" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(36px, 4vw, 60px)' }}>
              Five-Time Best Coffee in Big Sky
            </h2>
            <p className="text-[#8a6a50] mt-4 max-w-xl mx-auto" style={{ fontWeight: 300 }}>
              Voted by the Big Sky community year after year. We don't take these titles lightly — they push us to keep getting better.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[2018, 2019, 2020, 2021, 2022].map((year) => (
              <div
                key={year}
                className="award-item border-2 border-[#e8c98a] bg-white p-8 text-center hover:bg-[#e8c98a] group transition-colors"
              >
                <Star size={28} className="text-[#c4622d] mx-auto mb-3 group-hover:fill-[#c4622d]" />
                <div className="text-[#243b2e] text-2xl" style={{ fontFamily: garamond, fontWeight: 700 }}>{year}</div>
                <div className="text-[#8a6a50] text-xs tracking-widest uppercase mt-1" style={{ fontWeight: 300 }}>Best Coffee</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section ref={reviewsRef} className="bg-[#c4622d] py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(36px, 4vw, 60px)' }}>
              Straight From the Community
            </h2>
            <p className="text-[#f4d9c0] mt-4" style={{ fontWeight: 300 }}>4.6 stars · 89 reviews on Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Love love love this little coffee shop. Owners and staff are so kind and welcoming. Great food for a quick grab and go in the morning and delicious drinks!",
                author: "Monica Ellis",
              },
              {
                quote: "Best coffee before the slopes. Warm, cozy vibe and the staff knows your order by your second visit. This is what local coffee should feel like.",
                author: "James T.",
              },
              {
                quote: "Nothing beats grabbing a Caliber latte before a powder day. They're fast, friendly, and the coffee is genuinely excellent. Five stars, every time.",
                author: "Sarah M.",
              },
            ].map((r, i) => (
              <div key={i} className="review-item bg-[#b45020] p-8">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={j} size={14} fill="#e8c98a" stroke="none" />)}
                </div>
                <p className="text-[#faf5ee] text-lg italic leading-relaxed mb-6" style={{ fontFamily: garamond }}>
                  "{r.quote}"
                </p>
                <p className="text-[#f4d9c0] text-xs tracking-widest uppercase" style={{ fontWeight: 600 }}>— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
