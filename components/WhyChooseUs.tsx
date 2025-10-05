'use client'

import { useState, useEffect } from 'react'

export default function WhyChooseUs() {
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

    const element = document.getElementById('why-choose-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      title: 'Cancel Anytime',
      position: 'top-20 right-20',
      color: 'from-green-500 to-teal-600',
      delay: 200
    },
    {
      title: '24/7 Customer Service',
      position: 'top-40 right-80',
      color: 'from-purple-600 to-blue-600',
      delay: 400
    },
    {
      title: 'Refers & Earn',
      position: 'top-80 right-40',
      color: 'from-blue-500 to-cyan-500',
      delay: 600
    },
    {
      title: 'Money Back Guarantee',
      position: 'bottom-40 right-60',
      color: 'from-emerald-500 to-green-600',
      delay: 800
    }
  ]

  return (
    <section 
      id="why-choose-section" 
      className="relative py-20 bg-[#1a0b2e] overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Why You
              <br />
              Choose Metro
              <br />
              Solver?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
            </p>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              ✨ Book Now
            </button>
          </div>

          {/* Right Side - Floating Benefits */}
          <div className="relative h-96 lg:h-[500px]">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`
                  absolute ${benefit.position} 
                  transition-all duration-1000 delay-${benefit.delay}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  transform hover:scale-110 cursor-pointer
                `}
                style={{
                  animation: isVisible ? `float-${index} 6s ease-in-out infinite` : 'none'
                }}
              >
                <div className={`
                  bg-gradient-to-r ${benefit.color} 
                  text-white px-6 py-4 rounded-full shadow-2xl
                  backdrop-blur-sm border border-white/20
                  hover:shadow-purple-500/25 transition-all duration-300
                  whitespace-nowrap font-semibold
                `}>
                  {benefit.title}
                </div>
              </div>
            ))}

            {/* Additional decorative elements */}
            <div className={`absolute top-60 right-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            <div className={`absolute top-32 right-60 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-60' : 'opacity-0'}`}>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <div className={`absolute bottom-20 right-80 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-60' : 'opacity-0'}`}>
              <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(-1deg); }
          75% { transform: translateY(8px) rotate(1deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          40% { transform: translateY(-8px) rotate(-1deg); }
          80% { transform: translateY(6px) rotate(1deg); }
        }
      `}</style>
    </section>
  )
}