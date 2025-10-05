'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AboutVideo() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-video-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <section 
      id="about-video-section" 
      className=" bg-[#1a0b2e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {/* <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See How We Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our collaborative approach and modern workspace where innovation meets execution. 
            Watch how our team brings your digital dreams to life.
          </p>
        </div> */}

        {/* Video/Image Container */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group">
            
            {/* Background Image */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Metro Solver Team Collaboration"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
              
              {/* Play Button */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-2xl group/play"
                  >
                    <svg 
                      className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 group-hover/play:scale-110 transition-transform duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              )}

              {/* Video Player (when playing) */}
              {isPlaying && (
                <div className="absolute inset-0 bg-black">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/video/metro-solver-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-400/50 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400/50 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/50 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-400/50 rounded-br-lg"></div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        {/* <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25k+</div>
            <div className="text-gray-300">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">90+</div>
            <div className="text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div> */}

        {/* Key Features */}
        {/* <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-gray-300">Skilled professionals with years of industry experience</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
            <p className="text-gray-300">Quick turnaround times without compromising quality</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quality Assured</h3>
            <p className="text-gray-300">Rigorous testing and quality control processes</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}