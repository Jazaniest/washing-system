import { Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">FreshClean</span>
            </div>
            <p className="text-sm text-gray-400">
              Solusi laundry terpercaya untuk pakaian bersih dan wangi setiap hari.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-semibold text-white mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cuci Kering</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cuci Setrika</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Setrika Saja</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Dry Clean</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@freshclean.com</li>
              <li>Phone: +62 812-3456-7890</li>
              <li>WhatsApp: +62 812-3456-7890</li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div>
            <h3 className="font-semibold text-white mb-4">Jam Operasional</h3>
            <ul className="space-y-2 text-sm">
              <li>Senin - Jumat: 08:00 - 20:00</li>
              <li>Sabtu: 08:00 - 18:00</li>
              <li>Minggu: 09:00 - 15:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 FreshClean Laundry. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
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