'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Portfolio() {
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

    const element = document.getElementById('portfolio-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const portfolioItems = [
    {
      id: 1,
      title: 'BUILD YOUR OWN GIFT PACK',
      category: 'E-commerce',
      description: '2M+ People trust our product users',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'large',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      category: 'Design',
      description: 'User interface design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-purple-500 to-blue-600',
      stats: {
        customers: '5M+',
        campaigns: '450M+',
        rating: '22%',
        interest: '8.03%'
      }
    },
    {
      id: 3,
      title: 'TRACTRONMEETS INNOVATION',
      category: 'Web Development',
      description: 'LEADING BLADETEC ADVANCE',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'CLOUD DATA PARTNER',
      category: 'Cloud Solutions',
      description: 'YOUR SECURITY',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 5,
      title: 'THE PERFECT HOME',
      category: 'Real Estate',
      description: 'Better starts',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-gray-500 to-gray-700'
    },
    {
      id: 6,
      title: 'Cybertruck Design',
      category: 'Automotive',
      description: 'Future Vehicle Design',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-yellow-600 to-orange-700'
    },
    {
      id: 7,
      title: 'AI Sports Analytics',
      category: 'AI/ML',
      description: 'The AI That Turns Sports Bettors Into Winners',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 8,
      title: 'Healthcare Transformation',
      category: 'Healthcare',
      description: 'Healthcare unleashed',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-teal-500 to-blue-600'
    },
    {
      id: 9,
      title: 'Finance Tech Platform',
      category: 'FinTech',
      description: 'Hire top finance tech experts now',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'large',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 10,
      title: 'Basketball League Platform',
      category: 'Sports',
      description: 'MEDIA BASKETBALL LEAGUE',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 11,
      title: 'Crypto Investment Platform',
      category: 'Cryptocurrency',
      description: 'Best crypto investing platform for your future',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 12,
      title: 'Digital Art NFTs',
      category: 'NFT/Blockchain',
      description: 'Explore & Collect Digital Art NFTs',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-yellow-400 to-green-500',
      stats: {
        total: '78k+',
        items: '27k+',
        artists: '44k+'
      }
    },
    {
      id: 13,
      title: 'Agency Portfolio',
      category: 'Creative Agency',
      description: 'Creative colorful skull art with statistics',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'large',
      color: 'from-pink-500 to-purple-600',
      stats: {
        projects: '240+',
        satisfaction: '92%'
      }
    },
    {
      id: 14,
      title: 'Ethereum Trading',
      category: 'DeFi',
      description: 'Hot Trending On This Week',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium',
      color: 'from-blue-600 to-purple-600',
      stats: {
        eth: '27k+',
        users: '25k+',
        volume: '12k+'
      }
    }
  ]

  return (
    <section 
      id="portfolio-section" 
      className="py-20 bg-[#1a0b2e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex items-start justify-between mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Latest Works
            </h2>
          </div>
          
          <div className="text-right max-w-md">
            <p className="text-lg text-gray-300 mb-4">
              Based on the description of Metro Solver and the image provided, here is a
            </p>
            <p className="text-lg text-gray-300">
              6-step process that Metro Solver uses to scale a customer&apos;s business
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 auto-rows-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                transition-all duration-700 delay-${index * 100} group cursor-pointer
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${item.size === 'medium' ? 'md:col-span-1' : ''}
              `}
            >
              <div className={`
                relative overflow-hidden rounded-2xl h-64 
                ${item.size === 'large' ? 'md:h-96' : ''}
                bg-gradient-to-br ${item.color}
                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                group-hover:shadow-purple-500/25
              `}>
                
                {/* Background Image */}
                <div className="absolute inset-0 bg-black/40" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover mix-blend-overlay opacity-80"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                      {item.category}
                    </span>
                    
                    {/* Navigation Arrows for some cards */}
                    {index < 2 && (
                      <div className="flex gap-2">
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm opacity-80">
                      {item.description}
                    </p>

                    {/* Statistics for certain cards */}
                    {item.stats && (
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(item.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-white font-bold text-lg">{value}</div>
                            <div className="text-gray-300 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Learn More Button (appears on hover) */}
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-2 px-4 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  )
}