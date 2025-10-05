'use client';

import { GradientButton } from './ui/gradient-button';
import BotAnimation from './animations/BotAnimation';
import TextAnimation from './animations/TextAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Turn Your
                <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
                  Dreams
                </span>
                Into Reality
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Smart budgeting tools that grow with your ambitions. From planning your first business 
                to achieving financial freedom - we&apos;re here for every step of your journey.
              </p>
            </div>

            {/* Animated text section */}
            <div className="mb-8 h-20 flex items-center justify-center lg:justify-start">
              <TextAnimation className="w-80 h-full" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GradientButton size="lg" className="px-8 py-4">
                Start Your Journey
              </GradientButton>
              <GradientButton variant="secondary" size="lg" className="px-8 py-4">
                Watch Demo
              </GradientButton>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-purple-600">10K+</div>
                <div className="text-gray-600">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">$2M+</div>
                <div className="text-gray-600">Money Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Goals Achieved</div>
              </div>
            </div>
          </div>

          {/* Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 lg:w-[500px] lg:h-[500px]">
                <BotAnimation className="w-full h-full" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute top-12 -right-6 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 left-12 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;