
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              New: AI-powered workflows
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Streamline Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Workflow</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Boost your team's productivity with our all-in-one project management platform. 
              Collaborate seamlessly, track progress, and deliver results faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center">
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start text-sm text-gray-500">
              <span>✓ Free 14-day trial</span>
              <span className="mx-4">✓ No credit card required</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-t-lg mb-4"></div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-32"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-28"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
              <span className="text-sm font-semibold">+24% productivity</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-lg shadow-lg" style={{ animationDelay: '1s' }}>
              <span className="text-sm font-semibold">Tasks completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
