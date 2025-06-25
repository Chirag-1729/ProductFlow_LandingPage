
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Email submitted:', email);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
              <Check size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Thank you for signing up!</h2>
            <p className="text-xl opacity-90 mb-8">
              We've sent you an email with next steps to get started with ProductFlow.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Sign up another email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of teams already using ProductFlow to boost their productivity.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center group whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Start your free 14-day trial. No credit card required.
            </p>
          </form>

          {/* Features list */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white border-opacity-20">
            <div className="flex items-center justify-center">
              <Check className="mr-2" size={20} />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center justify-center">
              <Check className="mr-2" size={20} />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center justify-center">
              <Check className="mr-2" size={20} />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
