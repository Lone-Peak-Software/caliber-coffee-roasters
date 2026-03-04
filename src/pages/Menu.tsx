import { useEffect, useRef } from 'react'
import { Coffee, Droplets, Package, ShoppingBag, Wheat } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const menuSections = [
  {
    id: 'hot',
    icon: Coffee,
    title: 'Hot Drinks',
    bg: '#2e2e2e',
    textColor: '#f0ece4',
    accentColor: '#c9a84c',
    subColor: '#8a8a8a',
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
    bg: '#6b8c6b',
    textColor: '#f0ece4',
    accentColor: '#f0ece4',
    subColor: '#c8e0c8',
    items: [
      { name: 'Cold Brew', desc: 'Steeped 18–24 hours, smooth and clean' },
      { name: 'Nitro Cold Brew', desc: 'Cold brew on nitrogen tap' },
      { name: 'Iced Americano', desc: 'Espresso over ice and cold water' },
      { name: 'Iced Latte', desc: 'Espresso, milk, and ice' },
      { name: 'Iced Macchiato', desc: 'Layered espresso over iced milk' },
      { name: 'Iced Mocha', desc: 'Espresso, chocolate sauce, milk, ice' },
      { name: 'Blended Coffee', desc: 'Blended espresso drink — ask your barista' },
      { name: 'Iced Tea', desc: 'House-brewed tea, sweetened or unsweetened' },
    ],
  },
  {
    id: 'food',
    icon: Wheat,
    title: 'Baked Goods & Food',
    bg: '#c9a84c',
    textColor: '#2e2e2e',
    accentColor: '#2e2e2e',
    subColor: '#4a3a10',
    items: [
      { name: 'Butter Croissant', desc: 'Flaky, buttery, freshly baked' },
      { name: 'Almond Croissant', desc: 'Filled with almond cream' },
      { name: 'Blueberry Muffin', desc: 'Loaded with fresh blueberries' },
      { name: 'Banana Bread', desc: 'House recipe, moist and hearty' },
      { name: 'Granola Bar', desc: 'Oat and honey, great for the trail' },
      { name: 'Grab & Go Bites', desc: 'Rotating selection, ask your barista' },
    ],
  },
  {
    id: 'beans',
    icon: Coffee,
    title: 'Whole Bean Coffee',
    bg: '#e8e2d6',
    textColor: '#2e2e2e',
    accentColor: '#6b8c6b',
    subColor: '#5a5a5a',
    items: [
      { name: 'Big Sky House Blend', desc: 'Our signature roast — balanced, approachable, Montana-born' },
      { name: 'Montana Dark', desc: 'Bold and full-bodied for the serious coffee drinker' },
      { name: 'Single Origin', desc: 'Rotating seasonal selection — ask your barista about the current origin' },
      { name: 'Decaf Select', desc: 'Swiss water process decaf — all the flavor, none of the buzz' },
    ],
  },
  {
    id: 'merch',
    icon: Package,
    title: 'Merchandise',
    bg: '#f0ece4',
    textColor: '#2e2e2e',
    accentColor: '#c9a84c',
    subColor: '#6a6a6a',
    items: [
      { name: 'Caliber Branded Mug', desc: 'Ceramic mug featuring the Caliber mountain logo' },
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
    <main className="pt-[73px] bg-[#f0ece4] min-h-screen">
      {/* Header */}
      <div ref={headerRef} className="menu-page-header px-6 md:px-16 py-16 max-w-screen-xl mx-auto">
        <span className="text-[#6b8c6b] text-xs tracking-[0.3em] uppercase block mb-4">What We Offer</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1 className="font-bold text-[#2e2e2e] text-5xl md:text-6xl leading-none">
            Our Menu
          </h1>
          <div className="max-w-md">
            <p className="text-[#5a5a5a] font-light leading-relaxed">
              Everything we serve starts with beans we roast right here in Montana.
              From espresso to whole bean to take home — it's all Caliber.
            </p>
            <a
              href="https://caliber-coffee-109908.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#2e2e2e] text-[#f0ece4] px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-[#6b8c6b] transition-colors"
            >
              <ShoppingBag size={15} />
              Order Online for Pickup
            </a>
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <div ref={sectionsRef} className="px-6 md:px-16 pb-24 space-y-4 max-w-screen-xl mx-auto">
        {menuSections.map((section) => {
          const Icon = section.icon
          return (
            <div
              key={section.id}
              className="menu-section p-8 md:p-12"
              style={{ backgroundColor: section.bg }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Icon style={{ color: section.accentColor }} size={24} strokeWidth={1.5} />
                <h2
                  className="font-semibold text-2xl tracking-tight"
                  style={{ color: section.textColor }}
                >
                  {section.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <div
                      className="font-medium text-sm tracking-wide mb-1"
                      style={{ color: section.textColor }}
                    >
                      {item.name}
                    </div>
                    <div
                      className="text-xs font-light leading-relaxed"
                      style={{ color: section.subColor }}
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
      <div className="bg-[#2e2e2e] px-6 md:px-16 py-12">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 border border-[#c9a84c] flex items-center justify-center flex-shrink-0">
            <Coffee size={20} className="text-[#c9a84c]" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-semibold text-[#f0ece4] text-lg mb-2">Seasonal Specials</h3>
            <p className="text-[#8a8a8a] font-light text-sm leading-relaxed">
              We rotate seasonal drinks and single-origin roasts throughout the year.
              Follow us on Instagram <a href="https://www.instagram.com/calibercoffeeroasters" target="_blank" rel="noopener noreferrer" className="text-[#6b8c6b] hover:text-[#8aab8a] transition-colors">@calibercoffeeroasters</a> or
              ask your barista what's fresh today.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
