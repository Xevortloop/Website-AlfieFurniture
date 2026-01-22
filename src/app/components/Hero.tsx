export function Hero() {
  const handleBrowseCatalog = () => {
    // Scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRequestQuote = () => {
    // Open WhatsApp with quote request message
    const message = `Halo ALFie Furniture,\n\nSaya tertarik untuk mendapatkan penawaran harga untuk furniture custom.\n\nMohon informasi lebih lanjut mengenai:Terima kasih!`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1683115100702-af818681184d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwd29ya3Nob3AlMjBjcmFmdHNtYW58ZW58MXx8fHwxNzY3OTk4ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Premium wood workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
            Kayu Alami Premium untuk Setiap Proyek
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Temukan koleksi kayu berkualitas tinggi kami. Dari jati yang elegan hingga oak yang klasik, setiap potongan menceritakan kisah keahlian alam.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleBrowseCatalog}
              className="bg-[#DC143C] text-white px-8 py-3 rounded-lg hover:bg-[#B01030] transition-all hover:shadow-lg hover:scale-105"
            >
              Jelajahi Katalog
            </button>
            <button
              onClick={handleRequestQuote}
              className="bg-[#D4AF37] text-white px-8 py-3 rounded-lg hover:bg-[#C9A961] transition-all hover:shadow-lg hover:scale-105"
            >
              Minta Penawaran
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
