
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, User, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

interface SigninFormData {
  email: string;
  password: string;
}

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const signupForm = useForm<SignupFormData>();
  const signinForm = useForm<SigninFormData>();

  const onSignupSubmit = (data: SignupFormData) => {
    console.log('Signup data:', data);
    toast({
      title: "Account created successfully!",
      description: "Welcome to ProductFlow. You can now start using our platform.",
    });
  };

  const onSigninSubmit = (data: SigninFormData) => {
    console.log('Signin data:', data);
    toast({
      title: "Welcome back!",
      description: "You have successfully signed in to ProductFlow.",
    });
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    signupForm.reset();
    signinForm.reset();
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">P</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isSignup ? 'Create your account' : 'Welcome back'}
            </h2>
            <p className="text-gray-600">
              {isSignup 
                ? 'Start your journey with ProductFlow' 
                : 'Sign in to your ProductFlow account'
              }
            </p>
          </div>

          {/* Forms */}
          {isSignup ? (
            <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                    {...signupForm.register('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                  />
                </div>
                {signupForm.formState.errors.name && (
                  <p className="text-sm text-red-600">{signupForm.formState.errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    {...signupForm.register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                </div>
                {signupForm.formState.errors.email && (
                  <p className="text-sm text-red-600">{signupForm.formState.errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="signup-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    className="pl-10 pr-10"
                    {...signupForm.register('password', { 
                      required: 'Password is required',
                      minLength: { value: 6, message: 'Password must be at least 6 characters' }
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {signupForm.formState.errors.password && (
                  <p className="text-sm text-red-600">{signupForm.formState.errors.password.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Create Account
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          ) : (
            <form onSubmit={signinForm.handleSubmit(onSigninSubmit)} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    {...signinForm.register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                </div>
                {signinForm.formState.errors.email && (
                  <p className="text-sm text-red-600">{signinForm.formState.errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="signin-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    {...signinForm.register('password', { 
                      required: 'Password is required'
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {signinForm.formState.errors.password && (
                  <p className="text-sm text-red-600">{signinForm.formState.errors.password.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button type="button" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot password?
                </button>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Sign In
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          )}

          {/* Toggle between forms */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <button 
                onClick={toggleMode}
                className="ml-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                {isSignup ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>

        {/* Back to home link */}
        <div className="text-center mt-6">
          <a 
            href="/" 
            className="text-white hover:text-gray-200 transition-colors flex items-center justify-center"
          >
            ← Back to ProductFlow
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
