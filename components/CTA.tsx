'use client'

import { useState, useEffect } from 'react'
import { GradientButton } from './ui/gradient-button'
import BotAnimation from './animations/BotAnimation'

export default function CTA() {
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

    const element = document.getElementById('cta-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="cta-section" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-3xl" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Bot Animation */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32">
              <BotAnimation />
            </div>
          </div>

          {/* Main CTA Content */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Financial
            <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Dreams into Success Stories
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join thousands of entrepreneurs and dreamers who have unlocked their financial potential. 
            From business growth to personal success - start your journey today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <GradientButton size="lg" className="min-w-[250px] text-lg">
              Begin Your Success Story
            </GradientButton>
            <button className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 min-w-[250px] backdrop-blur-sm">
              Explore Business Features
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Business Success Stories', value: '5,000+', icon: '🏆' },
              { label: 'Dreams Turned Reality', value: '$10M+', icon: '💰' },
              { label: 'Average Growth Rate', value: '300%', icon: '📈' },
              { label: 'Potential Unlocked', value: '98%', icon: '⚡' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className={`mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              🎯 <strong>Ready to unlock your potential?</strong> Start with our free plan and upgrade as your business grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}