'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a0b2e] text-white">
      {/* FAQ Section */}
    
      {/* Links Section */}
      <div className="border-b border-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <div className="space-y-3">
                <Link href="/">Home</Link>
                <Link href="/about">About us</Link>
                <Link href="/team">Our Team</Link>
                <Link href="/profile">User Profile</Link>
                <Link href="#">White Labelling</Link>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h4 className="font-semibold text-lg mb-6">About Us</h4>
              <div className="space-y-3">
                <Link href="/stories">Our Stories</Link>
                <Link href="/career">Career</Link>
                <Link href="/message">Send Message</Link>
                <Link href="/blog">Blog</Link>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Support</h4>
              <div className="space-y-3">
                <Link href="/help">Help Center</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms and Conditions</Link>
                <Link href="/earning">Start Earning</Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Services</h4>
              <div className="space-y-3">
                <Link href="/digital-marketing">Digital Marketing</Link>
                <Link href="/creative-writing">Creative Writing Solution</Link>
                <Link href="/web-development">Web & Software Development</Link>
                <Link href="/ecommerce">E-Commerce Solution</Link>
                <Link href="/graphic-design">Graphic Design</Link>
                <Link href="/multimedia">Multimedia & Video Editing</Link>
                <Link href="/merchandise">Merchandise</Link>
                <Link href="/premium-website">Premium Website</Link>
                <Link href="/premium-domains">Premium Domains</Link>
                <Link href="/special-combo">Special Combo</Link>
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
