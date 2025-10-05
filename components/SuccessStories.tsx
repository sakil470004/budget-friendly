'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState('Success Stories')
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

    const element = document.getElementById('success-stories-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const tabs = ['Success Stories', 'Case Studies', 'Blog and News']

  const stories = [
    {
      title: 'The Future of Metro Systems by Company',
      description: 'Provide a quick introduction to your metro solver company. Highlight your mission, core expertise',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80',
      category: 'Technology',
      readTime: '5 min read',
      date: 'Nov 15, 2024'
    },
    {
      title: 'The Future of Metro Systems by Company',
      description: 'Provide a quick introduction to your metro solver company. Highlight your mission, core expertise',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80',
      category: 'Business',
      readTime: '7 min read',
      date: 'Nov 12, 2024'
    },
    {
      title: 'The Future of Metro Systems by Company',
      description: 'Provide a quick introduction to your metro solver company. Highlight your mission, core expertise',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80',
      category: 'Innovation',
      readTime: '6 min read',
      date: 'Nov 10, 2024'
    }
  ]

  return (
    <section 
      id="success-stories-section" 
      className="py-20 bg-[#1a0b2e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Success Stories,
            <br />
            Case Studies & Blog
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Based on the description of Metro Solver and the image provided, here is a 
            6-step process that Metro Solver uses to scale a customer&apos;s business
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-purple-600/20 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {story.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{story.readTime}</span>
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}