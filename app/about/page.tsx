import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { GradientButton } from '@/components/ui/gradient-button'
import BotAnimation from '@/components/animations/BotAnimation'

export default function About() {
  return (
    <main className="min-h-screen bg-[#1a0b2e]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b69] to-[#1a0b2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Metro Solver
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We believe every business deserves digital excellence. Our mission is to make 
                professional digital solutions accessible, effective, and budget-friendly for businesses of all sizes.
              </p>
              <GradientButton size="lg">
                Discover Our Story
              </GradientButton>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96">
                <BotAnimation className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To empower businesses with cutting-edge digital solutions that drive growth, 
              enhance efficiency, and deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                Cutting-edge solutions that keep your business ahead of the competition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality</h3>
              <p className="text-gray-300">
                Excellence in every project, ensuring your digital presence stands out.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Partnership</h3>
              <p className="text-gray-300">
                Building lasting relationships with our clients through trust and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#1a0b2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate team of digital experts, designers, and developers 
              committed to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", bio: "Digital marketing strategist with 12+ years experience helping businesses grow online." },
              { name: "Mike Chen", role: "Lead Developer", bio: "Full-stack developer passionate about creating scalable and user-friendly web applications." },
              { name: "Emma Davis", role: "Creative Director", bio: "Award-winning designer focused on creating stunning visual experiences that convert." }
            ].map((member) => (
              <div key={member.name} className="bg-slate-800/50 rounded-xl p-8 border border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-purple-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}