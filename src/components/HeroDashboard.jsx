import React, { useState } from 'react';
import { Car, Bike, Package, ChevronDown, Receipt, CreditCard, Check } from 'lucide-react';

const HeroDashboard = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [step, setStep] = useState('form'); 
  const [formData, setFormData] = useState({
    jenisKendaraan: '',
    jenisLayanan: '',
    aroma: '',
    catatan: ''
  });

  const handleJenisChange = (jenis) => {
    setFormData({
      jenisKendaraan: jenis,
      jenisLayanan: '',
      aroma: '',
      catatan: ''
    });
  };

  const handleSubmit = () => {
    if (formData.jenisKendaraan && formData.jenisLayanan) {
      setStep('receipt');
    }
  };

  const handlePayment = () => {
    setShowPaymentModal(true);
  };

  const processPayment = () => {
    if (!selectedPaymentMethod) return;
    
    setShowPaymentModal(false);
    setStep('payment');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      jenisKendaraan: '',
      jenisLayanan: '',
      aroma: '',
      catatan: ''
    });
    setSelectedPaymentMethod('');
    setStep('form');
  };

  const getHarga = () => {
    if (formData.jenisKendaraan === 'mobil') {
      return formData.jenisLayanan === 'detailing' ? 150000 : 75000;
    } else if (formData.jenisKendaraan === 'motor') {
      return formData.jenisLayanan === 'detailing' ? 50000 : 25000;
    } else if (formData.jenisKendaraan === 'karpet') {
      return formData.jenisLayanan === 'kilat' ? 80000 : 50000;
    }
    return 0;
  };

  // Form View
  if (step === 'form') {
    return (
      <section className="relative pt-16 sm:pt-20 min-h-screen flex items-center overflow-hidden bg-linear-to-br from-cyan-500 via-blue-500 to-blue-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block animate-fade-in mb-4">
                <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-xs sm:text-sm font-semibold border border-white/30 shadow-xl">
                  ✨ Formulir Pemesanan
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                Pesan Layanan
                <span className="block text-cyan-200">Cuci Kendaraan</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 drop-shadow-lg">
                Isi formulir di bawah untuk memesan layanan cuci
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 space-y-6">
              {/* Pilih Jenis Kendaraan */}
              <div>
                <label className="block text-gray-800 font-bold text-lg mb-4">
                  Pilih Jenis Cucian
                </label>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => handleJenisChange('mobil')}
                    className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
                      formData.jenisKendaraan === 'mobil'
                        ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <Car className={`w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 ${
                      formData.jenisKendaraan === 'mobil' ? 'text-cyan-500' : 'text-gray-400'
                    }`} />
                    <span className={`block font-semibold text-sm sm:text-base ${
                      formData.jenisKendaraan === 'mobil' ? 'text-cyan-700' : 'text-gray-600'
                    }`}>Mobil</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleJenisChange('motor')}
                    className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
                      formData.jenisKendaraan === 'motor'
                        ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <Bike className={`w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 ${
                      formData.jenisKendaraan === 'motor' ? 'text-cyan-500' : 'text-gray-400'
                    }`} />
                    <span className={`block font-semibold text-sm sm:text-base ${
                      formData.jenisKendaraan === 'motor' ? 'text-cyan-700' : 'text-gray-600'
                    }`}>Motor</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleJenisChange('karpet')}
                    className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
                      formData.jenisKendaraan === 'karpet'
                        ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <Package className={`w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 ${
                      formData.jenisKendaraan === 'karpet' ? 'text-cyan-500' : 'text-gray-400'
                    }`} />
                    <span className={`block font-semibold text-sm sm:text-base ${
                      formData.jenisKendaraan === 'karpet' ? 'text-cyan-700' : 'text-gray-600'
                    }`}>Karpet</span>
                  </button>
                </div>
              </div>

              {/* Pilihan Layanan - Mobil & Motor */}
              {(formData.jenisKendaraan === 'mobil' || formData.jenisKendaraan === 'motor') && (
                <div className="animate-fade-in">
                  <label className="block text-gray-800 font-bold text-lg mb-3">
                    Jenis Layanan
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, jenisLayanan: 'detailing'})}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.jenisLayanan === 'detailing'
                          ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                          : 'border-gray-200'
                      }`}
                    >
                      <span className={`font-semibold ${
                        formData.jenisLayanan === 'detailing' ? 'text-cyan-700' : 'text-gray-700'
                      }`}>Detailing</span>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Cuci lengkap premium</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({...formData, jenisLayanan: 'biasa'})}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.jenisLayanan === 'biasa'
                          ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                          : 'border-gray-200'
                      }`}
                    >
                      <span className={`font-semibold ${
                        formData.jenisLayanan === 'biasa' ? 'text-cyan-700' : 'text-gray-700'
                      }`}>Cuci Biasa</span>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Cuci standar</p>
                    </button>
                  </div>

                  {/* Catatan */}
                  <div className="mt-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Catatan (Opsional)
                    </label>
                    <textarea
                      value={formData.catatan}
                      onChange={(e) => setFormData({...formData, catatan: e.target.value})}
                      placeholder="Tambahkan catatan khusus..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Pilihan Layanan - Karpet */}
              {formData.jenisKendaraan === 'karpet' && (
                <div className="animate-fade-in space-y-4">
                  <div>
                    <label className="block text-gray-800 font-bold text-lg mb-3">
                      Jenis Layanan
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, jenisLayanan: 'kilat'})}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.jenisLayanan === 'kilat'
                            ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                            : 'border-gray-200'
                        }`}
                      >
                        <span className={`font-semibold ${
                          formData.jenisLayanan === 'kilat' ? 'text-cyan-700' : 'text-gray-700'
                        }`}>Cuci Kilat</span>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Selesai 3 jam</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({...formData, jenisLayanan: 'biasa'})}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.jenisLayanan === 'biasa'
                            ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                            : 'border-gray-200'
                        }`}
                      >
                        <span className={`font-semibold ${
                          formData.jenisLayanan === 'biasa' ? 'text-cyan-700' : 'text-gray-700'
                        }`}>Cuci Biasa</span>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Selesai 24 jam</p>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-800 font-bold text-lg mb-3">
                      Pilih Aroma
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, aroma: 'lavender'})}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.aroma === 'lavender'
                            ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                            : 'border-gray-200 '
                        }`}
                      >
                        <span className={`font-semibold ${
                          formData.aroma === 'lavender' ? 'text-cyan-700' : 'text-gray-700'
                        }`}>🌸 Lavender</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({...formData, aroma: 'fresh'})}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.aroma === 'fresh'
                            ? 'border-cyan-500 bg-cyan-50 shadow-lg'
                            : 'border-gray-200'
                        }`}
                      >
                        <span className={`font-semibold ${
                          formData.aroma === 'fresh' ? 'text-cyan-700' : 'text-gray-700'
                        }`}>🌿 Fresh</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              {formData.jenisKendaraan && formData.jenisLayanan && (
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-5 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold text-lg  transition-all duration-300 shadow-2xl mt-6"
                >
                  Pesan Sekarang
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Receipt View
  if (step === 'receipt') {
    return (
      <>
      <section className="relative pt-16 sm:pt-20 min-h-screen flex items-center overflow-hidden bg-linear-to-br from-cyan-500 via-blue-500 to-blue-600">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <Receipt className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Struk Pemesanan</h2>
                <p className="text-gray-600">Detail pesanan Anda</p>
              </div>

              <div className="border-t-2 border-dashed border-gray-300 pt-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Jenis Cucian</span>
                  <span className="text-gray-800 font-bold capitalize">{formData.jenisKendaraan}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Jenis Layanan</span>
                  <span className="text-gray-800 font-bold capitalize">{formData.jenisLayanan}</span>
                </div>

                {formData.aroma && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Aroma</span>
                    <span className="text-gray-800 font-bold capitalize">{formData.aroma}</span>
                  </div>
                )}

                {formData.catatan && (
                  <div className="py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium block mb-2">Catatan</span>
                    <p className="text-gray-800 bg-gray-50 p-3 rounded-lg">{formData.catatan}</p>
                  </div>
                )}

                <div className="flex justify-between items-center py-4 bg-cyan-50 px-4 rounded-xl mt-6">
                  <span className="text-lg font-bold text-gray-800">Total Pembayaran</span>
                  <span className="text-2xl font-bold text-cyan-600">
                    Rp {getHarga().toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep('form')}
                  className="flex-1 px-6 py-4 bg-gray-200 text-gray-700 rounded-full font-bold transition-all duration-300"
                >
                  Kembali
                </button>
                <button
                  onClick={handlePayment}
                  className="flex-1 px-6 py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold transition-all duration-300 shadow-xl"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center mb-6">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Pilih Metode Pembayaran</h2>
            </div>

            <div className="bg-cyan-50 rounded-xl p-4 mb-6 border-2 border-cyan-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Total:</span>
                <span className="text-2xl font-bold text-cyan-600">
                  Rp {getHarga().toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {['Tunai 💵', 'QRIS 📱', 'Kartu Debit 💳', 'E-Wallet 👛'].map((method) => (
                <button
                  key={method}
                  onClick={() => setSelectedPaymentMethod(method)}
                  className={`w-full p-4 rounded-xl border-2 transition-all ${
                    selectedPaymentMethod === method
                      ? 'border-cyan-500 bg-cyan-50'
                      : 'border-gray-200 hover:border-cyan-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{method}</span>
                    {selectedPaymentMethod === method && (
                      <Check className="w-5 h-5 text-cyan-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  setSelectedPaymentMethod('');
                }}
                className="flex-1 py-3 px-6 rounded-xl font-bold bg-gray-200 text-gray-700"
              >
                Batal
              </button>
              <button
                onClick={processPayment}
                disabled={!selectedPaymentMethod}
                className={`flex-1 py-3 px-6 rounded-xl font-bold ${
                  !selectedPaymentMethod
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-linear-to-r from-cyan-500 to-blue-500 text-white'
                }`}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      )}
      </>
    );
  }

  // Payment Processing
  if (step === 'payment') {
    return (
      <section className="relative pt-16 sm:pt-20 min-h-screen flex items-center overflow-hidden bg-linear-to-br from-cyan-500 via-blue-500 to-blue-600">
        <div className="relative z-10 w-full px-4 sm:px-6 py-16">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
              <div className="animate-pulse">
                <CreditCard className="w-20 h-20 text-cyan-500 mx-auto mb-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Memproses Pembayaran</h2>
              <p className="text-gray-600">Mohon tunggu sebentar...</p>
              <div className="mt-6 flex justify-center space-x-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Success View
  if (step === 'success') {
    return (
      <section className="relative pt-16 sm:pt-20 min-h-screen flex items-center overflow-hidden bg-linear-to-br from-cyan-500 via-blue-500 to-blue-600">
        <div className="relative z-10 w-full px-4 sm:px-6 py-16">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-12 h-12 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Pembayaran Berhasil!</h2>
              <p className="text-gray-600 mb-2">Terima kasih atas pesanan Anda</p>
              <p className="text-sm text-gray-500 mb-8">Kendaraan Anda akan segera kami proses</p>
              
              <div className="bg-cyan-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600 mb-1">Total Pembayaran</p>
                <p className="text-2xl font-bold text-cyan-600">
                  Rp {getHarga().toLocaleString('id-ID')}
                </p>
              </div>

              <button
                onClick={resetForm}
                className="w-full px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold transition-all duration-300 shadow-xl"
              >
                Pesan Lagi
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default HeroDashboard;