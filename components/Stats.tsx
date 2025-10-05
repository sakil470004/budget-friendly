'use client'

import { useState, useEffect } from 'react'

export default function Stats() {
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

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      number: '150',
      suffix: '+',
      label: 'Current Clients',
      icon: '👥'
    },
    {
      number: '25k',
      suffix: '+',
      label: 'Completed Projects',
      icon: '📋'
    },
    {
      number: '90',
      suffix: '+',
      label: 'Metro Solver Teams',
      icon: '👨‍💼'
    }
  ]

  return (
    <section 
      id="stats-section" 
      className="py-20 bg-[#1a0b2e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
                <span className="text-yellow-400">{stat.suffix}</span>
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Process Diagram */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How to Works?
            </h3>
          </div>

          {/* Circular Process */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Process Steps */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  01
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-xs text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <h4 className="text-white font-semibold mb-2">Book a Call</h4>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  02
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-xs text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="text-white font-semibold mb-2">Requirement Analysis</h4>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  03
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-xs text-center">
                  <div className="text-2xl mb-2">🎧</div>
                  <h4 className="text-white font-semibold mb-2">Service Customisation</h4>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  04
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-xs text-center">
                  <div className="text-2xl mb-2">⚙️</div>
                  <h4 className="text-white font-semibold mb-2">Implement & Develop</h4>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  05
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-xs text-center">
                  <div className="text-2xl mb-2">✅</div>
                  <h4 className="text-white font-semibold mb-2">Quality Assurance</h4>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  06
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-xs text-center">
                  <div className="text-2xl mb-2">📦</div>
                  <h4 className="text-white font-semibold mb-2">Delivery and Support</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}