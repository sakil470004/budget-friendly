'use client'

import { useState, useEffect } from 'react'

export default function Services() {
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

    const element = document.getElementById('services-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: '🎨',
      title: 'Graphic Design',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '💻',
      title: 'Web & Software Development',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-purple-400 to-blue-500',
      featured: true
    },
    {
      icon: '🎬',
      title: 'Multimedia & Video Editing',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-pink-400 to-purple-500'
    },
    {
      icon: '📢',
      title: 'Digital Marketing',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: '✍️',
      title: 'Creative Writing Solution',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🔍',
      title: 'SEO',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: '🎯',
      title: '3D Animation & Visualisation',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-teal-400 to-blue-500'
    },
    {
      icon: '🛒',
      title: 'E-Commerce Solution',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: '💰',
      title: 'Accounting',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: '⭐',
      title: 'Special Combo',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-yellow-400 to-red-500'
    },
    {
      icon: '🌟',
      title: 'Premium Website',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🌐',
      title: 'Premium Domains',
      description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is',
      color: 'from-blue-400 to-purple-500'
    }
  ]

  return (
    <section 
      id="services-section" 
      className="py-20 bg-[#1a0b2e]"
    >
      {/* Get My 15% OFF Banner */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-40">
        <div className="bg-gray-800 text-white px-4 py-2 rounded-r-lg shadow-lg">
          <span className="text-sm">Get My 15% OFF</span>
          <button className="ml-2 text-gray-400 hover:text-white">×</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enter your personal real estate sanctuary, where finding the ideal 
            home is effortless and comfortable with our assistance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`${
                service.featured 
                  ? 'bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-2 border-purple-400/50' 
                  : 'bg-slate-800/50 border border-gray-700/50'
              } backdrop-blur-sm rounded-2xl p-8 h-full hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 group`}>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Read More Link */}
                <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 transition-colors duration-300">
                  Read More 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}