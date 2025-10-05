'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-purple-900 to-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Side - Logo and Text */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded transform rotate-12"></div>
                  <div className="w-10 h-7 bg-gradient-to-r from-purple-600 to-blue-500 rounded transform -rotate-12 -ml-5"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold">METRO SOLVER</div>
                  <div className="text-sm text-gray-400">your it partner</div>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300">
                Join the 25000+ client, in our company
              </p>
            </div>

            {/* Right Side - Newsletter Form */}
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-r-full font-semibold transition-all duration-300 flex items-center gap-2">
                ✨ Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="border-b border-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Contact Info */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Got Questions?
                <br />
                Call us !
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 text-purple-400 mt-1">📍</div>
                  <div>
                    <div className="font-semibold mb-1">Head office: Metro Solver Limited</div>
                    <div className="text-gray-300">Grantham Road, London E12</div>
                    <div className="text-gray-300">5LX, United Kingdom</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 text-purple-400">📞</div>
                  <div className="text-gray-300">+447936 455446</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 text-purple-400">✉️</div>
                  <div className="text-gray-300">official@metrosolver.com</div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">Country Currency</h4>
                <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3 max-w-xs">
                  <Image
                    src="https://flagcdn.com/w20/gb.png"
                    alt="UK Flag"
                    width={20}
                    height={15}
                    className="object-cover"
                  />
                  <span>GBP - British Pound</span>
                  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - FAQ */}
            <div>
              <div className="space-y-6">
                {/* Service Categories */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="service" id="digital-marketing" className="text-purple-600" defaultChecked />
                    <label htmlFor="digital-marketing" className="text-lg font-semibold">Digital Marketing</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="service" id="web-dev" className="text-purple-600" />
                    <label htmlFor="web-dev" className="text-gray-300">Web & Software Development</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="service" id="graphic-design" className="text-purple-600" />
                    <label htmlFor="graphic-design" className="text-gray-300">Graphic Design & Logo</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="service" id="multimedia" className="text-purple-600" />
                    <label htmlFor="multimedia" className="text-gray-300">Multimedia & Video Editing</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="service" id="creative-writing" className="text-purple-600" />
                    <label htmlFor="creative-writing" className="text-gray-300">Creative Writing Solutions</label>
                  </div>
                </div>

                {/* FAQ Dropdown */}
                <div className="space-y-4 mt-8">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">What services do you offer in digital marketing?</h4>
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300 mt-3 text-sm">
                      We provide SEO, social media management, email marketing, content 
                      marketing, PPC campaigns, and more.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">How can digital marketing help my business?</h4>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">How do you measure campaign success?</h4>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-b border-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <div className="space-y-3">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-300">About us</Link>
                <Link href="/team" className="block text-gray-300 hover:text-white transition-colors duration-300">Our Team</Link>
                <Link href="/profile" className="block text-gray-300 hover:text-white transition-colors duration-300">User Profile</Link>
                <Link href="/white-label" className="block text-gray-300 hover:text-white transition-colors duration-300">White Labelling</Link>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h4 className="font-semibold text-lg mb-6">About Us</h4>
              <div className="space-y-3">
                <Link href="/stories" className="block text-gray-300 hover:text-white transition-colors duration-300">Our Stories</Link>
                <Link href="/career" className="block text-gray-300 hover:text-white transition-colors duration-300">Career</Link>
                <Link href="/message" className="block text-gray-300 hover:text-white transition-colors duration-300">Send Message</Link>
                <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors duration-300">Blog</Link>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Support</h4>
              <div className="space-y-3">
                <Link href="/help" className="block text-gray-300 hover:text-white transition-colors duration-300">Help Center</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-300">Contact Us</Link>
                <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</Link>
                <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors duration-300">Terms and Conditions</Link>
                <Link href="/earning" className="block text-gray-300 hover:text-white transition-colors duration-300">Start Earning</Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Services</h4>
              <div className="space-y-3">
                <Link href="/digital-marketing" className="block text-gray-300 hover:text-white transition-colors duration-300">Digital Marketing</Link>
                <Link href="/creative-writing" className="block text-gray-300 hover:text-white transition-colors duration-300">Creative Writing Solution</Link>
                <Link href="/web-development" className="block text-gray-300 hover:text-white transition-colors duration-300">Web & Software Development</Link>
                <Link href="/ecommerce" className="block text-gray-300 hover:text-white transition-colors duration-300">E-Commerce Solution</Link>
                <Link href="/graphic-design" className="block text-gray-300 hover:text-white transition-colors duration-300">Graphic Design</Link>
                <Link href="/multimedia" className="block text-gray-300 hover:text-white transition-colors duration-300">Multimedia & Video Editing</Link>
                <Link href="/merchandise" className="block text-gray-300 hover:text-white transition-colors duration-300">Merchandise</Link>
                <Link href="/premium-website" className="block text-gray-300 hover:text-white transition-colors duration-300">Premium Website</Link>
                <Link href="/premium-domains" className="block text-gray-300 hover:text-white transition-colors duration-300">Premium Domains</Link>
                <Link href="/special-combo" className="block text-gray-300 hover:text-white transition-colors duration-300">Special Combo</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-b border-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-lg font-semibold mb-8 text-center">Our Future Partners</h4>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
              <span className="font-semibold">Meta</span>
              <span className="text-sm text-gray-400">Business Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              <span className="font-semibold">Google Marketing Platform</span>
              <span className="text-sm text-gray-400">Sales Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
              <span className="font-semibold">Microsoft</span>
              <span className="text-sm text-gray-400">Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <span className="font-semibold">AWS</span>
              <span className="text-sm text-gray-400">Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded"></div>
              <span className="font-semibold">Google</span>
              <span className="text-sm text-gray-400">Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-500 rounded"></div>
              <span className="font-semibold">amazon spn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded"></div>
              <span className="font-semibold">TikTok</span>
              <span className="text-sm text-gray-400">Marketing Partners</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>© Metro Solver. All Rights Reserved {currentYear}</div>
            <div>Metro Solver Ltd incorporated in England & Wales Registration No:15792819</div>
          </div>
        </div>
      </div>
    </footer>
  )
}