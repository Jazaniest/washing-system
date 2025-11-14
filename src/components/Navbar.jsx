import React, { useState } from 'react';
import { Sparkles, X, Mail, Lock, User, Phone, House } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard')
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <span className="text-lg sm:text-2xl font-bold bg-linear-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                AyWash
              </span>
            </div>
            <div>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="px-4 mr-5 sm:px-6 py-2 sm:py-2.5 bg-cyan-400 text-white rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 cursor-pointer">
                Login
              </button>
              <button 
                onClick={() => setShowRegisterModal(true)}
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-black rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-lg shadow-blue-600/30 cursor-pointer">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 relative">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
              <p className="text-gray-500 text-sm">Login to your AyWash account</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">Forgot password?</a>
              </div>

              <button onClick={handleLogin} className="w-full py-3 bg-cyan-400 text-white rounded-lg font-medium hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-400/30">
                Login
              </button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account? 
                <button 
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowRegisterModal(true);
                  }}
                  className="text-cyan-500 hover:text-cyan-600 font-medium ml-1">
                  Register now
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 relative">
            <button 
              onClick={() => setShowRegisterModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h2>
              <p className="text-gray-500 text-sm">Join AyWash today</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="number" 
                    placeholder="08xxxxxxx"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <div className="relative">
                  <House className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Your address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <label className="flex items-start text-sm">
                <input type="checkbox" className="w-4 h-4 mt-0.5 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400" />
                <span className="ml-2 text-gray-600">
                  I agree to the <a href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">Terms & Conditions</a> and <a href="#" className="text-cyan-500 hover:text-cyan-600 font-medium">Privacy Policy</a>
                </span>
              </label>

              <button onClick={handleLogin} className="w-full py-3 bg-cyan-400 text-white rounded-lg font-medium hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-400/30">
                Create Account
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account? 
                <button 
                  onClick={() => {
                    setShowRegisterModal(false);
                    setShowLoginModal(true);
                  }}
                  className="text-cyan-500 hover:text-cyan-600 font-medium ml-1">
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar