import React from 'react'
import { Sparkles, Clock, Shield, Heart } from 'lucide-react';
import bubbleCover from '../assets/bubble2.jpg'

const Hero = () => {
  return (
    <section className="relative pt-16 sm:pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Background Cover Image */}
      <div className="absolute inset-0 z-0">
        {/* Uncomment dan ganti dengan path image Anda */}
        <img 
          src={bubbleCover}
          alt="FreshClean Laundry Cover" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 py-16 sm:py-2">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-10">
          {/* Badge */}
          <div className="inline-block animate-fade-in">
            <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-xs sm:text-sm font-semibold border border-white/30 shadow-xl">
              ✨ Layanan Laundry Lengkap
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight text-white drop-shadow-2xl px-2">
            Kendaraan Bersih,
            <span className="block bg-linear-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent">
              Perjalanan Nyaman
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] font-light px-4">
            Layanan cuci motor, mobil, dan karpet dengan teknologi modern untuk hasil
            yang bersih, rapi, dan tahan lama.
          </p>


          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-white text-sm sm:text-lg mb-0.5 sm:mb-1">Cepat</h3>
              <p className="text-xs sm:text-sm text-white drop-shadow-lg">24 Jam Selesai</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-white text-sm sm:text-lg mb-0.5 sm:mb-1">Aman</h3>
              <p className="text-xs sm:text-sm text-white drop-shadow-lg">Jaminan Kualitas</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-white text-sm sm:text-lg mb-0.5 sm:mb-1">Care</h3>
              <p className="text-xs sm:text-sm text-white drop-shadow-lg">Care Protection</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-white text-sm sm:text-lg mb-0.5 sm:mb-1">Bersih</h3>
              <p className="text-xs sm:text-sm text-white drop-shadow-lg">Bersih Berkualitas</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 px-4">
            <button className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-cyan-400 rounded-full font-bold text-base sm:text-lg hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/50 w-full sm:w-auto">
              Pesan Sekarang
            </button>
            <button className="px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:scale-105 shadow-2xl w-full sm:w-auto">
              Lihat Harga
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;