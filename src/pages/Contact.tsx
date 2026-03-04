import { useState, useEffect, useRef, FormEvent } from 'react'
import { Phone, MapPin, Instagram, Clock, Send, CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.contact-info-block', {
        opacity: 0, x: -40, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 75%' }
      })
      gsap.from('.contact-form-wrapper', {
        opacity: 0, x: 40, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 75%' }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In production this would POST to a form service (Formspree, Netlify Forms, etc.)
    // For now we show a success state
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main ref={pageRef} className="pt-[73px] bg-[#f0ece4] min-h-screen">
      {/* Header */}
      <div className="contact-header px-6 md:px-16 py-16 max-w-screen-xl mx-auto">
        <span className="text-[#6b8c6b] text-xs tracking-[0.3em] uppercase block mb-4">Get in Touch</span>
        <h1 className="font-bold text-[#2e2e2e] text-5xl md:text-6xl leading-none">
          Say Hello
        </h1>
      </div>

      {/* Main grid */}
      <div className="contact-grid px-6 md:px-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
        {/* Contact info */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="contact-info-block bg-[#2e2e2e] p-8">
            <Phone size={24} className="text-[#6b8c6b] mb-5" strokeWidth={1.5} />
            <h3 className="font-semibold text-[#f0ece4] text-xl mb-3">Call Us</h3>
            <a
              href="tel:4062193159"
              className="text-[#c9a84c] text-2xl font-medium hover:text-[#b8973b] transition-colors"
            >
              (406) 219-3159
            </a>
            <p className="text-[#6a6a6a] text-sm mt-3 font-light">
              Best reached during business hours. We're happy to answer questions about
              orders, roasting, catering, or wholesale inquiries.
            </p>
          </div>

          {/* Bozeman location */}
          <div className="contact-info-block bg-[#e8e2d6] p-8">
            <MapPin size={24} className="text-[#6b8c6b] mb-5" strokeWidth={1.5} />
            <h3 className="font-semibold text-[#2e2e2e] text-xl mb-3">Bozeman</h3>
            <p className="text-[#5a5a5a] text-sm mb-3">1805 W Oak St #2<br />Bozeman, MT 59718</p>
            <div className="flex items-start gap-2 text-sm">
              <Clock size={14} className="text-[#6b8c6b] flex-shrink-0 mt-0.5" />
              <div className="text-[#6a6a6a] font-light">
                <div>Mon – Sat: 7:00 am – 3:00 pm</div>
                <div>Sunday: 8:00 am – 3:00 pm</div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=1805+W+Oak+St+%232,+Bozeman,+MT+59718"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-[#6b8c6b] text-sm hover:text-[#5a7a5a] transition-colors border-b border-[#6b8c6b] pb-0.5"
            >
              Get Directions →
            </a>
          </div>

          {/* Big Sky location */}
          <div className="contact-info-block bg-[#e8e2d6] p-8">
            <MapPin size={24} className="text-[#6b8c6b] mb-5" strokeWidth={1.5} />
            <h3 className="font-semibold text-[#2e2e2e] text-xl mb-3">Big Sky</h3>
            <p className="text-[#5a5a5a] text-sm mb-3">80 Snowy Mountain Circle<br />Big Sky, MT 59716</p>
            <div className="flex items-start gap-2 text-sm">
              <Clock size={14} className="text-[#6b8c6b] flex-shrink-0 mt-0.5" />
              <div className="text-[#6a6a6a] font-light">
                <div>Mon – Sat: 7:00 am – 3:00 pm</div>
                <div>Sunday: 7:00 am – 1:00 pm</div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=80+Snowy+Mountain+Circle,+Big+Sky,+MT+59716"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-[#6b8c6b] text-sm hover:text-[#5a7a5a] transition-colors border-b border-[#6b8c6b] pb-0.5"
            >
              Get Directions →
            </a>
          </div>

          {/* Social */}
          <div className="contact-info-block bg-[#6b8c6b] p-8">
            <Instagram size={24} className="text-[#f0ece4] mb-5" strokeWidth={1.5} />
            <h3 className="font-semibold text-[#f0ece4] text-xl mb-3">Follow Along</h3>
            <a
              href="https://www.instagram.com/calibercoffeeroasters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0ece4] text-lg hover:text-[#c8e0c8] transition-colors"
            >
              @calibercoffeeroasters
            </a>
            <p className="text-[#c8e0c8] text-sm mt-3 font-light">
              Seasonal drinks, roast updates, and a look at life in Big Sky country.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="contact-form-wrapper">
          <div className="bg-[#2e2e2e] p-8 md:p-12 h-full">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <CheckCircle size={48} className="text-[#6b8c6b] mb-6" strokeWidth={1.5} />
                <h2 className="font-bold text-[#f0ece4] text-2xl mb-4">Message Received</h2>
                <p className="text-[#8a8a8a] font-light leading-relaxed max-w-sm">
                  Thanks for reaching out. We'll get back to you as soon as we can —
                  usually within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[#6b8c6b] text-sm hover:text-[#8aab8a] transition-colors border-b border-[#6b8c6b] pb-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-[#f0ece4] text-2xl mb-2">Send a Message</h2>
                <p className="text-[#8a8a8a] text-sm font-light mb-8">
                  Wholesale inquiries, catering, feedback, or just want to say hi — we read every message.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[#6a6a6a] text-xs tracking-widest uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-[#3a3a3a] border border-[#4a4a4a] text-[#f0ece4] px-4 py-3 text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#6b8c6b] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6a6a6a] text-xs tracking-widest uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-[#3a3a3a] border border-[#4a4a4a] text-[#f0ece4] px-4 py-3 text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#6b8c6b] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6a6a6a] text-xs tracking-widest uppercase mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#3a3a3a] border border-[#4a4a4a] text-[#f0ece4] px-4 py-3 text-sm focus:outline-none focus:border-[#6b8c6b] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="catering">Catering / Events</option>
                      <option value="feedback">Feedback</option>
                      <option value="order">Order Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#6a6a6a] text-xs tracking-widest uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                      className="w-full bg-[#3a3a3a] border border-[#4a4a4a] text-[#f0ece4] px-4 py-3 text-sm placeholder-[#5a5a5a] focus:outline-none focus:border-[#6b8c6b] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-[#6b8c6b] text-white px-8 py-4 font-medium tracking-wide hover:bg-[#5a7a5a] transition-colors w-full justify-center"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Online order strip */}
      <div className="bg-[#c9a84c] px-6 md:px-16 py-12">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-[#2e2e2e] text-2xl mb-2">Prefer to Order Ahead?</h3>
            <p className="text-[#4a3a10] font-light text-sm">
              Skip the line and order online through Square for pickup at either location.
            </p>
          </div>
          <a
            href="https://caliber-coffee-109908.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-[#2e2e2e] text-[#f0ece4] px-10 py-4 font-medium tracking-wide hover:bg-[#3a3a3a] transition-colors text-sm"
          >
            Order Online
          </a>
        </div>
      </div>
    </main>
  )
}
