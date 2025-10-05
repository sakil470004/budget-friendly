'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Testimonials() {
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

    const element = document.getElementById('testimonials-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: 'Katie Johnson',
      role: 'Founder of Strava',
      content: 'Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&h=1287&q=80',
      rating: 5,
      platform: 'Google',
      platformColor: 'text-yellow-400'
    },
    {
      name: 'Wade Warren',
      role: 'Founder of Strava',
      content: 'Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1170&q=80',
      rating: 5,
      platform: 'Trustpilot',
      platformColor: 'text-green-400',
      featured: true
    },
    {
      name: 'Jenny Wilson',
      role: 'Founder of Strava',
      content: 'Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1170&q=80',
      rating: 5,
      platform: 'Google',
      platformColor: 'text-yellow-400'
    }
  ]

  return (
    <section 
      id="testimonials-section" 
      className="py-20 bg-gradient-to-b from-slate-900 to-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What People Say
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Based on the description of Metro Solver and the image provided, here is a 
            6-step process that Metro Solver uses to scale a customer&apos;s business
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`${
                testimonial.featured 
                  ? 'bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-2 border-purple-400/50 scale-105' 
                  : 'bg-slate-800/50 border border-gray-700/50'
              } backdrop-blur-sm rounded-2xl p-8 h-full hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105`}>
                
                {/* Author Info */}
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-purple-400/30">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-purple-300 text-sm">{testimonial.role}</div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${testimonial.platformColor} fill-current`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-300 text-lg mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Platform Badge */}
                <div className="flex items-center">
                  <span className={`${testimonial.platformColor} text-2xl mr-2`}>
                    {testimonial.platform === 'Google' ? '⭐' : '✅'}
                  </span>
                  <div>
                    <div className={`font-semibold ${testimonial.platformColor}`}>{testimonial.platform}</div>
                    <div className="text-gray-400 text-sm">Review by {testimonial.platform.toLowerCase()}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-12 gap-4">
          <button className="w-12 h-12 bg-slate-700 hover:bg-purple-600 rounded-full flex items-center justify-center text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}