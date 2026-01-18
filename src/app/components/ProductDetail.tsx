import { X, ShoppingCart, Ruler, Package, Tag, MessageCircle } from 'lucide-react';
import { Product } from './ProductCard';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

export function ProductDetail({ product, onClose, onAddToCart }: ProductDetailProps) {
  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan produk:\n\n*${product.name}*\nKategori: ${product.category}\nUkuran: ${product.size}\nFinishing: ${product.finish}\nHarga: Rp ${product.price.toLocaleString('id-ID')} / ${product.unit}\nStatus: ${product.inStock ? 'Tersedia' : 'Stok Habis'}\n\nBisakah saya mendapatkan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E8E3DC] p-6 flex items-center justify-between">
          <h2 className="text-2xl text-[#2D2A26]">Detail Produk</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F5F1EB] rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-[#2D2A26]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden bg-[#F5F1EB]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-[#D4AF37] font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
              </div>
              <h3 className="text-3xl text-[#2D2A26] mb-4">{product.name}</h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-[#2D2A26]">Rp {product.price.toLocaleString('id-ID')}</span>
                <span className="text-lg text-[#706C66]">/ {product.unit}</span>
              </div>

              {/* Availability */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-[#DC143C]">
                    <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                    <span>Tersedia</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-[#706C66]">
                    <div className="w-2 h-2 bg-[#706C66] rounded-full"></div>
                    <span>Stok Habis</span>
                  </div>
                )}
              </div>

              {/* Specifications */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg text-[#2D2A26]">Spesifikasi</h4>

                <div className="flex items-center gap-3 p-3 bg-[#F5F1EB] rounded-lg">
                  <Ruler className="w-5 h-5 text-[#DC143C]" />
                  <div>
                    <div className="text-xs text-[#706C66]">Ukuran</div>
                    <div className="text-sm text-[#2D2A26]">{product.size}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#F5F1EB] rounded-lg">
                  <Tag className="w-5 h-5 text-[#DC143C]" />
                  <div>
                    <div className="text-xs text-[#706C66]">Finishing</div>
                    <div className="text-sm text-[#2D2A26]">{product.finish}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#F5F1EB] rounded-lg">
                  <Package className="w-5 h-5 text-[#DC143C]" />
                  <div>
                    <div className="text-xs text-[#706C66]">Kategori</div>
                    <div className="text-sm text-[#2D2A26]">{product.category}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Tanya via WhatsApp
                </button>
                <button
                  onClick={onAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all ${product.inStock
                    ? 'bg-[#DC143C] text-white hover:bg-[#B01030] hover:shadow-lg'
                    : 'bg-[#E8E3DC] text-[#C4BBAE] cursor-not-allowed'
                    }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Tambah ke Keranjang
                </button>
              </div>

              {/* Description */}
              <div className="mt-8 pt-8 border-t border-[#E8E3DC]">
                <h4 className="text-lg text-[#2D2A26] mb-3">Tentang Produk Ini</h4>
                <p className="text-[#706C66] leading-relaxed">
                  {product.name} adalah produk furniture berkualitas premium dari kategori {product.category}.
                  Dibuat dengan finishing {product.finish} untuk daya tahan dan estetika optimal.
                  Setiap produk dipilih dan diproses dengan cermat untuk memastikan kualitas terbaik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
