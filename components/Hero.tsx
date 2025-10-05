'use client'

import { useState, useEffect } from 'react'
import { GradientButton } from './ui/gradient-button'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0b2e]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
      
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" className="w-full h-full">
          {/* Wave-like pattern similar to the screenshot */}
          <path 
            d="M0 400 Q300 200 600 400 T1200 400 L1200 800 L0 800 Z" 
            fill="url(#waveGradient)" 
            opacity="0.3"
          />
          <path 
            d="M0 350 Q300 150 600 350 T1200 350 L1200 800 L0 800 Z" 
            fill="url(#waveGradient2)" 
            opacity="0.2"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Top Banner */}
        <div className="mb-8 flex flex-wrap gap-4 text-sm text-gray-300">
          <span className="px-3 py-1 bg-purple-900/30 rounded-full">Budget friendly</span>
          <span className="px-3 py-1 bg-purple-900/30 rounded-full">No. 1 in Europe</span>
          <span className="px-3 py-1 bg-red-500 rounded-full text-white">30% OFF</span>
          <span className="px-3 py-1 bg-purple-900/30 rounded-full">For all products buy now get the offer</span>
          <span className="px-3 py-1 bg-purple-900/30 rounded-full">User Friendly</span>
          <span className="px-3 py-1 bg-purple-900/30 rounded-full">24/7 Service</span>
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
            We are constantly growing or learning and improving. Enter your the personal real estate sanctuary, where finding the ideal home is
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <GradientButton size="lg" className="text-lg px-8 py-4">
              ✨ Explore Now
            </GradientButton>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap items-center gap-6 opacity-80">
            {/* Luminus Logo Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">luminus</span>
              </div>
            </div>

            {/* Brembo Logo Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">brembo</span>
              </div>
            </div>

            {/* Motorola Logo Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <span className="text-white text-lg font-medium">motorola</span>
              </div>
            </div>

            {/* Luminus Logo Card (Second) */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">luminus</span>
              </div>
            </div>

            {/* Brembo Logo Card (Second) */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">brembo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Geometric M Logo */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-20">
            <path 
              d="M40 40 L40 160 L80 120 L120 160 L160 160 L160 40 L120 40 L100 60 L80 40 Z" 
              fill="url(#logoGradient)" 
            />
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
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