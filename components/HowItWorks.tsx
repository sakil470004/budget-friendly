"use client";

import { useState, useEffect } from "react";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("how-it-works-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Book a Call",
      icon: "📞",
      position: "top-0 right-0",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Requirement Analysis",
      icon: "📊",
      position: "top-1/4 right-0",
      color: "from-yellow-500 to-orange-500",
    },
    {
      number: "03",
      title: "Service Customisation",
      icon: "🎧",
      position: "bottom-1/4 right-0",
      color: "from-green-500 to-teal-500",
    },
    {
      number: "04",
      title: "Implement & Develop",
      icon: "⚙️",
      position: "bottom-0 left-0",
      color: "from-orange-500 to-red-500",
    },
    {
      number: "05",
      title: "Quality Assurance",
      icon: "📦",
      position: "top-1/4 left-0",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "06",
      title: "Delivery and Support",
      icon: "📦",
      position: "top-0 left-0",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section
      id="how-it-works-section"
      className="py-20 bg-[#1a0b2e] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
       
       
        {/* Circular Process Diagram */}
        <div className="relative flex items-center justify-center ">
          {/* Central Circle */}
          <div
            className={`absolute flex items-center justify-center transition-all duration-1000 delay-300 
             scale-75
            `}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full border-2 border-purple-400/50 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  How
                </h3>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  to Works?
                </h3>
              </div>
            </div>

            {/* Connecting Circle Line */}
            <div className="absolute w-80 h-80 md:w-96 md:h-96 border-2 border-purple-400/30 rounded-full"></div>
          </div>

          {/* Process Steps */}
          <div className="relative w-full max-w-4xl aspect-square">
            {steps.map((step, index) => {
              const angle = index * 60 - 90; // Start from top and go clockwise
              const radian = (angle * Math.PI) / 180;
              const radius = 200; // Distance from center
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;

              return (
                <div
                  key={step.number}
                  className={`absolute transition-all  duration-1000 delay-${
                    (index + 1) * 200
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  }}
                >
                  {/* Step Container */}
                  <div className="relative group cursor-pointer">
                    {/* Step Card */}
                    <div
                      className={`
                      
                    `}
                    >
                      {/* Icon Circle */}
                      <div
                        className={`
                        w-16 h-16 rounded-full bg-gradient-to-r 
                        flex items-center justify-center text-5xl mb-4 mx-auto
                        
                      `}
                      >
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {step.title}
                        </h4>
                      </div>

                      {/* Connecting Line to Center */}
                      <div
                        className="absolute w-px h-16 bg-gradient-to-b from-purple-400/50 to-transparent"
                        style={{
                          left: "50%",
                          top: "100%",
                          transform: `translateX(-50%) rotate(${
                            angle + 90
                          }deg)`,
                          transformOrigin: "top",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background Decorative Elements */}
          <div
            className={`absolute inset-0 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-30" : "opacity-0"
            }`}
          >
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div
          className={`text-center mt-16 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to start your project? Let's discuss your requirements and get
            started today.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div> */}
      </div>
    </section>
  );
}
