import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import { GradientButton } from '@/components/ui/gradient-button'

export default function ServicesPage() {
  const servicesList = [
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
      features: ['SEO Optimization', 'Social Media Management', 'Content Marketing', 'PPC Campaigns'],
      price: 'From £99/month',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Web & Software Development',
      description: 'Custom web applications and software solutions tailored to your business needs.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'API Development', 'Mobile Apps'],
      price: 'From £199/month',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Graphic Design & Logo',
      description: 'Professional graphic design services to create stunning visuals that represent your brand.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics'],
      price: 'From £79/project',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v12a4 4 0 01-4 4H9" />
        </svg>
      )
    },
    {
      title: 'Multimedia & Video Editing',
      description: 'Professional video production and editing services for marketing, training, and promotional content.',
      features: ['Video Production', 'Motion Graphics', 'Audio Editing', 'Animation'],
      price: 'From £149/project',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Creative Writing Solutions',
      description: 'Professional content creation and copywriting services to engage your audience effectively.',
      features: ['Content Strategy', 'Blog Writing', 'Copywriting', 'Technical Writing'],
      price: 'From £59/article',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#1a0b2e]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b69] to-[#1a0b2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions designed to elevate your business and drive growth. 
            From digital marketing to custom development.
          </p>
          <GradientButton size="lg">
            Get Started Today
          </GradientButton>
        </div>
      </section>

      {/* Services Component */}
      <Services />
      
      {/* Services Grid */}
      <section className="py-20 bg-[#1a0b2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Detailed Service Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div key={service.title} className="bg-slate-800/50 rounded-xl border border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm">
                <div className="p-8">
                  <div className="text-purple-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-purple-400/30 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <GradientButton size="sm">
                        Get Started
                      </GradientButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Choose the service that best fits your needs, or contact us for a custom solution tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-50"
            >
              Get Free Consultation
            </GradientButton>
            <GradientButton 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600"
            >
              View Portfolio
            </GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}