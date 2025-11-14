import { Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-lg sm:text-xl font-bold text-white">AyWash</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400">
              Solusi cucian terpercaya untuk hasil bersih dan kinclong setiap hari.
            </p>
          </div>

          {/* Layanan */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Layanan</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cuci Mobil</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cuci Motor</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cuci Laundry</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cuci Karpet</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Kontak</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>Email: info@aywash.com</li>
              <li>Phone: +62 812-3456-7890</li>
              <li>WhatsApp: +62 812-3456-7890</li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Jam Operasional</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>Senin - Jumat: 08:00 - 20:00</li>
              <li>Sabtu: 08:00 - 18:00</li>
              <li>Minggu: 09:00 - 15:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © 2025 AyWash. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;