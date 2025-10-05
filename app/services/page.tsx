import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GradientButton } from '@/components/ui/gradient-button';

export default function Services() {
  const services = [
    {
      title: 'Personal Budget Planning',
      description: 'Get personalized budget recommendations based on your income, expenses, and financial goals. Our AI analyzes your spending patterns to create a budget that actually works.',
      features: ['AI-powered budget creation', 'Expense categorization', 'Spending insights', 'Goal-based planning'],
      price: '$9.99/month',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Business Financial Management',
      description: 'Comprehensive financial tools for small businesses and entrepreneurs. Track revenue, manage expenses, and plan for growth with professional-grade features.',
      features: ['Revenue tracking', 'Expense management', 'Tax preparation', 'Financial reporting'],
      price: '$29.99/month',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Investment Advisory',
      description: 'Get expert investment guidance tailored to your risk tolerance and financial objectives. Build a diversified portfolio that grows with your goals.',
      features: ['Portfolio analysis', 'Risk assessment', 'Investment recommendations', 'Market insights'],
      price: '$49.99/month',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: 'Debt Management',
      description: 'Strategic debt payoff plans that save you money and reduce stress. Our algorithms find the fastest and most cost-effective way to become debt-free.',
      features: ['Debt consolidation analysis', 'Payoff strategies', 'Interest savings calculator', 'Progress tracking'],
      price: '$19.99/month',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: 'Financial Coaching',
      description: 'One-on-one sessions with certified financial advisors. Get personalized guidance and accountability to achieve your biggest financial goals.',
      features: ['1-on-1 coaching sessions', 'Goal setting workshops', 'Financial health assessments', 'Action plan development'],
      price: '$99.99/month',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Enterprise Solutions',
      description: 'Custom financial management solutions for large organizations. Scalable tools with enterprise-grade security and dedicated support.',
      features: ['Custom integrations', 'Advanced analytics', 'Team collaboration tools', 'Dedicated support'],
      price: 'Contact us',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive financial solutions designed to meet you wherever you are on your journey 
            to financial freedom. From personal budgeting to enterprise solutions.
          </p>
          <GradientButton size="lg">
            Get Started Today
          </GradientButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl border border-purple-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                <div className="p-8">
                  <div className="text-purple-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Choose the service that best fits your needs, or contact us for a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-50"
            >
              Start Free Trial
            </GradientButton>
            <GradientButton 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600"
            >
              Contact Sales
            </GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}