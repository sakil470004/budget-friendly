'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="contact-section" 
      className="py-20 bg-[#1a0b2e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Company Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Logo */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded transform rotate-12"></div>
                <div className="w-12 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded transform -rotate-12 -ml-6"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have
              <br />
              A Questions?
            </h2>

            {/* Social Media Links */}
            <div className="flex gap-4 mb-8">
              {['linkedin', 'facebook', 'instagram', 'twitter', 'youtube', 'tiktok'].map((social) => (
                <div
                  key={social}
                  className="w-12 h-12 bg-slate-800 hover:bg-purple-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
                >
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
              ))}
            </div>

            {/* Video Section */}
            <div className="relative rounded-2xl overflow-hidden mb-8 group cursor-pointer">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-64 flex items-center justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm opacity-75 mb-1">30 Minute</div>
                <div className="font-semibold">How Brands Can Prepare for Black Friday & Christmas</div>
              </div>
            </div>

            {/* Service Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold">Cancel Anytime</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <div>
                  <div className="font-semibold">24/7 Customer Service</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold">Refers & Earn</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold">Money Back Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name..."
                      className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">WhatsApp/Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter your number..."
                      className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Which are You Looking for Support in?</label>
                    <select className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600/50 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors duration-300">
                      <option value="">Choose services</option>
                      <option value="web-development">Web Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="seo">SEO Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">How Can We Help?</label>
                  <textarea
                    rows={4}
                    placeholder="Message goes in here..."
                    className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  ✨ Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}