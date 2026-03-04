import { useEffect, useRef } from 'react'
import { Mountain, Award, Heart, Flame } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-header', {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
      })
      gsap.from('.about-image-main', {
        opacity: 0, scale: 1.05, duration: 1.2, ease: 'power3.out', delay: 0.2,
      })
      gsap.from('.about-story-block', {
        opacity: 0, y: 40, duration: 0.9, stagger: 0.15,
        scrollTrigger: { trigger: '.about-story-grid', start: 'top 75%' }
      })
      gsap.from('.about-values-item', {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.1,
        scrollTrigger: { trigger: '.about-values', start: 'top 80%' }
      })
      gsap.from('.about-awards-item', {
        opacity: 0, scale: 0.9, duration: 0.6, stagger: 0.08,
        scrollTrigger: { trigger: '.about-awards', start: 'top 80%' }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef} className="pt-[73px] bg-[#f0ece4] min-h-screen">
      {/* Header + hero image */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        <div className="about-header px-8 md:px-16 py-16 flex flex-col justify-center bg-[#f0ece4]">
          <span className="text-[#6b8c6b] text-xs tracking-[0.3em] uppercase block mb-5">Our Story</span>
          <h1 className="font-bold text-[#2e2e2e] leading-tight mb-6" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
            Rooted in<br />
            <span className="text-[#6b8c6b]">Big Sky Country</span>
          </h1>
          <p className="text-[#5a5a5a] font-light leading-relaxed max-w-lg text-lg">
            Caliber Coffee Roasters is a locally owned and operated roastery born in Big Sky, Montana —
            a community built around adventure, craft, and a deep appreciation for the simple things done well.
          </p>
        </div>
        <div className="relative overflow-hidden min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80"
            alt="Caliber Coffee shop atmosphere"
            className="about-image-main absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'saturate(0.75)' }}
          />
          <div className="absolute inset-0 bg-[#2e2e2e] opacity-10" />
        </div>
      </div>

      {/* Story grid */}
      <div className="about-story-grid bg-[#2e2e2e] grid grid-cols-1 md:grid-cols-3">
        <div className="about-story-block p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#3a3a3a]">
          <Flame size={28} className="text-[#c9a84c] mb-6" strokeWidth={1.5} />
          <h3 className="font-semibold text-[#f0ece4] text-xl mb-4">The Roast</h3>
          <p className="text-[#8a8a8a] font-light leading-relaxed text-sm">
            We source green coffee from farms around the world and roast it right here in Big Sky.
            Small-batch roasting means we control every variable — temperature, timing, airflow —
            to bring out the best in every bean.
          </p>
        </div>
        <div className="about-story-block p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#3a3a3a]">
          <Mountain size={28} className="text-[#6b8c6b] mb-6" strokeWidth={1.5} />
          <h3 className="font-semibold text-[#f0ece4] text-xl mb-4">The Place</h3>
          <p className="text-[#8a8a8a] font-light leading-relaxed text-sm">
            Big Sky is more than a backdrop — it's built into our DNA. We serve the skiers,
            hikers, locals, and visitors who make Montana what it is. Our Bozeman location
            brings that same mountain energy to the valley.
          </p>
        </div>
        <div className="about-story-block p-10 md:p-14">
          <Heart size={28} className="text-[#c9a84c] mb-6" strokeWidth={1.5} />
          <h3 className="font-semibold text-[#f0ece4] text-xl mb-4">The People</h3>
          <p className="text-[#8a8a8a] font-light leading-relaxed text-sm">
            Our team is kind, knowledgeable, and genuinely happy to be here. From the
            barista who remembers your order to the roaster obsessing over the perfect profile —
            every person at Caliber cares about what ends up in your cup.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="about-values bg-[#f0ece4] px-6 md:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[#6b8c6b] text-xs tracking-[0.3em] uppercase block mb-4">What Drives Us</span>
          <h2 className="font-bold text-[#2e2e2e] text-4xl mb-14">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#d8d2c6]">
            {[
              {
                title: 'Freshness First',
                body: 'We roast in small batches and ship fast so your coffee is at peak flavor when it reaches your hands.',
              },
              {
                title: 'Mountain-Made',
                body: 'Born in Big Sky, built for Montana. The altitude doesn\'t slow us down — it sharpens us.',
              },
              {
                title: 'No Compromise',
                body: 'Five consecutive Best Coffee awards didn\'t come from cutting corners. We obsess so you don\'t have to.',
              },
              {
                title: 'Community Rooted',
                body: 'We\'re locally owned, locally driven. Every cup you buy stays in Montana.',
              },
            ].map((v, i) => (
              <div key={i} className="about-values-item bg-[#f0ece4] p-8">
                <div className="w-8 h-0.5 bg-[#6b8c6b] mb-6" />
                <h3 className="font-semibold text-[#2e2e2e] text-lg mb-3">{v.title}</h3>
                <p className="text-[#6a6a6a] text-sm font-light leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="about-awards bg-[#6b8c6b] px-6 md:px-16 py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <Award size={40} className="text-[#f0ece4]" strokeWidth={1} />
            <div>
              <span className="text-[#c8e0c8] text-xs tracking-[0.3em] uppercase block mb-3">Recognized by the Community</span>
              <h2 className="font-bold text-[#f0ece4] text-3xl md:text-4xl">
                Best Coffee in Big Sky — Five Years Running
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {[2018, 2019, 2020, 2021, 2022].map((year) => (
              <div
                key={year}
                className="about-awards-item bg-[#5a7a5a] p-6 text-center"
              >
                <Award size={24} className="text-[#c9a84c] mx-auto mb-3" strokeWidth={1.5} />
                <div className="font-bold text-[#f0ece4] text-2xl mb-1">{year}</div>
                <div className="text-[#c8e0c8] text-xs tracking-widest uppercase">Best Coffee</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand image strip */}
      <div className="grid grid-cols-3 h-64 md:h-80 overflow-hidden">
        {[
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
          'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
          'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80',
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={src}
              alt="Caliber Coffee atmosphere"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'saturate(0.65)' }}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
