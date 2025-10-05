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
              <div className="flex items-center gap-3 justify-center">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded transform rotate-12"></div>
                <div className="w-12 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded transform -rotate-12 -ml-6"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
              Still Have
              <br />
              A Questions?
            </h2>

            {/* Social Media Links */}
            <div className="flex gap-4 mb-8 justify-center">
              {/* LinkedIn */}
              <div className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>

              {/* Facebook */}
              <div className="w-12 h-12 bg-slate-800 hover:bg-blue-800 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>

              {/* Instagram */}
              <div className="w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>

              {/* Twitter */}
              <div className="w-12 h-12 bg-slate-800 hover:bg-sky-500 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>

              {/* YouTube */}
              <div className="w-12 h-12 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>

              {/* TikTok */}
              <div className="w-12 h-12 bg-slate-800 hover:bg-black rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
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