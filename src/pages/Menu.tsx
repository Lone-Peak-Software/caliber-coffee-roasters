import { useEffect, useRef } from 'react'
import { Coffee, Droplets, Package, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const garamond = "'Cormorant Garamond', serif"

const menuSections = [
  {
    id: 'hot',
    icon: Coffee,
    title: 'Hot Drinks',
    bg: '#243b2e',
    textColor: '#faf5ee',
    accentColor: '#e8c98a',
    subColor: '#7aaa7a',
    items: [
      { name: 'Drip Coffee', desc: 'Freshly brewed house blend, single serve' },
      { name: 'Espresso', desc: 'Double shot, pulled to order' },
      { name: 'Americano', desc: 'Espresso over hot water' },
      { name: 'Cappuccino', desc: 'Espresso, steamed milk, thick foam' },
      { name: 'Latte', desc: 'Espresso with steamed whole milk' },
      { name: 'Flat White', desc: 'Ristretto shots, microfoam milk' },
      { name: 'Macchiato', desc: 'Espresso marked with foam' },
      { name: 'Pour Over', desc: 'Single-origin, hand-poured' },
      { name: 'Cortado', desc: 'Equal parts espresso and steamed milk' },
      { name: 'Mocha', desc: 'Espresso, chocolate, steamed milk' },
    ],
  },
  {
    id: 'cold',
    icon: Droplets,
    title: 'Cold Drinks',
    bg: '#c4622d',
    textColor: '#faf5ee',
    accentColor: '#faf5ee',
    subColor: '#f4d9c0',
    items: [
      { name: 'Cold Brew', desc: 'Steeped 18–24 hours, smooth and clean' },
      { name: 'Nitro Cold Brew', desc: 'Cold brew on nitrogen tap' },
      { name: 'Iced Americano', desc: 'Espresso over ice and cold water' },
      { name: 'Iced Latte', desc: 'Espresso, milk, and ice' },
      { name: 'Iced Macchiato', desc: 'Layered espresso over iced milk' },
      { name: 'Iced Mocha', desc: 'Espresso, chocolate, milk, ice' },
      { name: 'Blended Coffee', desc: 'Blended espresso drink — ask your barista' },
      { name: 'Iced Tea', desc: 'House-brewed, sweetened or unsweetened' },
    ],
  },
  {
    id: 'food',
    icon: Coffee,
    title: 'Baked Goods & Food',
    bg: '#e8c98a',
    textColor: '#243b2e',
    accentColor: '#243b2e',
    subColor: '#5a3a20',
    items: [
      { name: 'Butter Croissant', desc: 'Flaky, buttery, freshly baked' },
      { name: 'Almond Croissant', desc: 'Filled with rich almond cream' },
      { name: 'Blueberry Muffin', desc: 'Loaded with fresh blueberries' },
      { name: 'Banana Bread', desc: 'House recipe, moist and hearty' },
      { name: 'Granola Bar', desc: 'Oat and honey, great for the trail' },
      { name: 'Breakfast Burrito', desc: 'Grab & go, ask about today\'s build' },
    ],
  },
  {
    id: 'beans',
    icon: Package,
    title: 'Whole Bean Coffee',
    bg: '#faf5ee',
    textColor: '#243b2e',
    accentColor: '#c4622d',
    subColor: '#5a4a3a',
    items: [
      { name: 'Big Sky House Blend', desc: 'Our signature roast — balanced, approachable, Montana-born' },
      { name: 'Montana Dark', desc: 'Bold and full-bodied for the serious coffee drinker' },
      { name: 'Single Origin', desc: 'Rotating seasonal selection — ask about the current origin' },
      { name: 'Decaf Select', desc: 'Swiss water process decaf — all the flavor, none of the buzz' },
    ],
  },
  {
    id: 'merch',
    icon: Package,
    title: 'Merchandise & Gift Cards',
    bg: '#1e3228',
    textColor: '#faf5ee',
    accentColor: '#e8c98a',
    subColor: '#7aaa7a',
    items: [
      { name: 'Caliber Branded Mug', desc: 'Ceramic mug featuring the Caliber mountain design' },
      { name: 'Caliber Tumbler', desc: 'Double-wall insulated, mountain-ready' },
      { name: 'Caliber Tee', desc: 'Soft-washed cotton, limited colorways' },
      { name: 'Gift Cards', desc: 'Available in any amount — perfect for the coffee lover in your life' },
    ],
  },
]

export default function Menu() {
  const headerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.menu-page-header', {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.menu-section', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionsRef.current, start: 'top 80%' }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="pt-[73px] bg-[#faf5ee] min-h-screen">
      {/* Header */}
      <div ref={headerRef} className="menu-page-header px-6 md:px-16 py-16 max-w-screen-xl mx-auto border-b border-[#e8d5bc]">
        <span className="text-[#c4622d] text-xs tracking-[0.3em] uppercase block mb-4" style={{ fontWeight: 600 }}>What We Offer</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1 className="text-[#243b2e] leading-none" style={{ fontFamily: garamond, fontWeight: 600, fontSize: 'clamp(44px, 6vw, 80px)' }}>
            Our Menu
          </h1>
          <div className="max-w-md">
            <p className="text-[#5a4a3a] leading-relaxed mb-5" style={{ fontWeight: 300 }}>
              Everything we serve starts with beans we roast right here in Montana.
              From espresso to whole bean to take home — it's all Caliber.
            </p>
            <a
              href="https://caliber-coffee-109908.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c4622d] text-white px-8 py-3.5 text-sm hover:bg-[#b45020] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Order Online for Pickup <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <div ref={sectionsRef} className="px-6 md:px-16 py-16 space-y-4 max-w-screen-xl mx-auto">
        {menuSections.map((section) => {
          const Icon = section.icon
          return (
            <div
              key={section.id}
              className="menu-section p-8 md:p-12"
              style={{ backgroundColor: section.bg }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Icon style={{ color: section.accentColor }} size={24} />
                <h2
                  className="text-2xl"
                  style={{ fontFamily: garamond, fontWeight: 600, color: section.textColor, fontSize: '1.75rem' }}
                >
                  {section.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <div
                      className="text-sm tracking-wide mb-1"
                      style={{ color: section.textColor, fontWeight: 600 }}
                    >
                      {item.name}
                    </div>
                    <div
                      className="text-xs leading-relaxed"
                      style={{ color: section.subColor, fontWeight: 300 }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Seasonal note */}
      <div className="bg-[#243b2e] px-6 md:px-16 py-12">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 border border-[#e8c98a] flex items-center justify-center flex-shrink-0">
            <Coffee size={20} className="text-[#e8c98a]" />
          </div>
          <div>
            <h3 className="text-[#faf5ee] text-xl mb-2" style={{ fontFamily: garamond, fontWeight: 600 }}>Seasonal Specials</h3>
            <p className="text-[#7aaa7a] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              We rotate seasonal drinks and single-origin roasts throughout the year.
              Follow us on Instagram{' '}
              <a href="https://www.instagram.com/calibercoffeeroasters" target="_blank" rel="noopener noreferrer" className="text-[#e8c98a] hover:text-white transition-colors">
                @calibercoffeeroasters
              </a>{' '}
              or ask your barista what's fresh today.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
