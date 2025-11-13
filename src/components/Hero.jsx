import React from 'react'
import { Sparkles, Clock, Shield, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-linear-to-br from-blue-50 via-white to-cyan-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                ✨ Layanan Laundry Premium
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Cucian Bersih,
              <span className="block bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Hati Tenang
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Nikmati layanan laundry profesional dengan teknologi modern dan 
              perawatan maksimal untuk setiap pakaian Anda. Kami hadir untuk 
              memberikan kemudahan dan kualitas terbaik.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cepat & Tepat</h3>
                  <p className="text-sm text-gray-600">Selesai 24 jam</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Shield className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Aman Terpercaya</h3>
                  <p className="text-sm text-gray-600">Jaminan kualitas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Heart className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Perawatan Lembut</h3>
                  <p className="text-sm text-gray-600">Bahan premium</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Sparkles className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Harum & Wangi</h3>
                  <p className="text-sm text-gray-600">Parfum berkualitas</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-600/30">
                Pesan Sekarang
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200">
                Lihat Harga
              </button>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-blue-200 to-cyan-200">
              {/* Placeholder untuk cover image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Sparkles className="w-20 h-20 mx-auto text-white opacity-50" />
                  <p className="text-white text-lg font-medium opacity-75">
                    Tempatkan foto cover Anda di sini
                  </p>
                  <p className="text-white text-sm opacity-60">
                    Rekomendasi: 800x800px, format JPG/PNG
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-400 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;