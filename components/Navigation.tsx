'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a0b2e]/95 backdrop-blur-md border-b border-purple-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="w-8 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded transform rotate-12"></div>
              <div className="w-8 h-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded transform -rotate-12 -ml-4"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="px-4 py-2 text-white bg-purple-600/20 border border-purple-400/30 rounded-full hover:bg-purple-600/30 transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About us
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#2a1a4e] border border-purple-600/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-300">
                  All Services
                </Link>
                <Link href="/services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-300">
                  Web Development
                </Link>
                <Link href="/services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-300">
                  Digital Marketing
                </Link>
              </div>
            </div>
            <Link 
              href="/white-label" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              White label
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact us
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart */}
            <button className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6-5V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                7
              </span>
            </button>

            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-400/30">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=1170&q=80"
                    alt="User"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50 py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-white bg-purple-600/20 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/white-label" 
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                White label
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}