'use client'

import { useState, useEffect } from 'react'

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ clients: 0, projects: 0, teams: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Animate counters
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          clients: Math.floor(150 * progress),
          projects: Math.floor(25 * progress),
          teams: Math.floor(90 * progress)
        })

        if (step === steps) {
          clearInterval(timer)
          setCounters({ clients: 150, projects: 25, teams: 90 })
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    {
      number: counters.clients,
      suffix: '+',
      label: 'Current Clients',
      delay: 200
    },
    {
      number: counters.projects,
      suffix: 'k+',
      label: 'Completed Projects',
      delay: 400
    },
    {
      number: counters.teams,
      suffix: '+',
      label: 'Metro Solver Teams',
      delay: 600
    }
  ]

  return (
    <section 
      id="stats-section" 
      className="py-20 bg-[#1a0b2e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                transition-all duration-1000 delay-${stat.delay}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 text-center hover:border-purple-400/30 hover:from-purple-900/10 hover:to-blue-900/10 transition-all duration-300 transform hover:scale-105 group">
                
                {/* Number */}
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {stat.number}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 ml-2">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl md:text-2xl text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Decorative Line */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            These numbers represent our commitment to excellence and the trust our clients place in us. 
            Every project is a step forward in our journey to digitalize businesses worldwide.
          </p>
          
          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-400/30 rounded-full px-6 py-3">
              <span className="text-yellow-400 font-semibold">🏆 Industry Leader</span>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-400/30 rounded-full px-6 py-3">
              <span className="text-green-400 font-semibold">✅ 99% Success Rate</span>
            </div>
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full px-6 py-3">
              <span className="text-blue-400 font-semibold">⚡ Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}