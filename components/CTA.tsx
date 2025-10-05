'use client';

import { GradientButton } from './ui/gradient-button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Transform
          <span className="block">Your Financial Future?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
          Join thousands of users who have already started their journey to financial freedom. 
          Your dreams are waiting - let&apos;s make them happen together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
            Schedule Demo
          </GradientButton>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-purple-200">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>14-Day Free Trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;