'use client'

import { useState, useEffect } from 'react'
import { GradientButton } from './ui/gradient-button'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-3xl" />
      
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" className="w-full h-full">
          <path d="M200 400 L400 200 L600 400 L800 200 L1000 400" stroke="url(#gradient)" strokeWidth="2" fill="none" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Top Banner */}
        <div className="mb-8 flex flex-wrap gap-4 text-sm text-gray-300">
          <span className="px-3 py-1 bg-purple-800/20 rounded-full">Budget Friendly</span>
          <span className="px-3 py-1 bg-purple-800/20 rounded-full">No. 1 in Europe</span>
          <span className="px-3 py-1 bg-red-600 rounded-full text-white">30% OFF</span>
          <span className="px-3 py-1 bg-purple-800/20 rounded-full">For all products buy now get the offer</span>
          <span className="px-3 py-1 bg-purple-800/20 rounded-full">User Friendly</span>
          <span className="px-3 py-1 bg-purple-800/20 rounded-full">24/7 Service</span>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight max-w-4xl">
            Expert to
            <br />
            Digitalise Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            We are constantly growing or learning and improving. Enter your personal real estate sanctuary, 
            where finding the ideal home is effortless and comfortable with our assistance.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <GradientButton size="lg" className="text-lg px-8 py-4">
              ✨ Explore Now
            </GradientButton>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap items-center gap-8 opacity-60">
            <div className="text-white text-lg font-medium">luminus</div>
            <div className="text-white text-lg font-medium">brembo</div>
            <div className="text-white text-lg font-medium">motorola</div>
            <div className="text-white text-lg font-medium">luminus</div>
            <div className="text-white text-lg font-medium">brembo</div>
          </div>
        </div>

        {/* Chat Bot */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="bg-purple-600 hover:bg-purple-700 transition-colors w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}