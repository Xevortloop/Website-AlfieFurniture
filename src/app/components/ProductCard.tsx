import { ShoppingCart, MessageCircle } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  size: string;
  finish: string;
  image: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart: () => void;
}

export function ProductCard({ product, onClick, onAddToCart }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart();
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Halo, saya tertarik dengan produk:\n\n*${product.name}*\nKategori: ${product.category}\nUkuran: ${product.size}\nFinishing: ${product.finish}\nHarga: Rp ${product.price.toLocaleString('id-ID')} / ${product.unit}\nStatus: ${product.inStock ? 'Tersedia' : 'Stok Habis'}\n\nBisakah saya mendapatkan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border border-[#E8E3DC] overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-[#F5F1EB]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-[#2D2A26]/80 text-white px-3 py-1 rounded-full text-xs">
            Stok Habis
          </div>
        )}
        {product.inStock && (
          <div className="absolute top-3 right-3 bg-[#DC143C]/90 text-white px-3 py-1 rounded-full text-xs">
            Tersedia
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg text-[#2D2A26] mb-2 group-hover:text-[#DC143C] transition-colors">
          {product.name}
        </h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs bg-[#F5F1EB] text-[#706C66] px-2 py-1 rounded">
            {product.size}
          </span>
          <span className="text-xs bg-[#F5F1EB] text-[#706C66] px-2 py-1 rounded">
            {product.finish}
          </span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-2xl font-bold text-[#2D2A26]">Rp {product.price.toLocaleString('id-ID')}</span>
            <span className="text-sm text-[#706C66] ml-1">/ {product.unit}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleWhatsApp}
              className="p-2 rounded-lg bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all hover:shadow-lg"
              title="Tanya via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`p-2 rounded-lg transition-all ${product.inStock
                ? 'bg-[#DC143C] text-white hover:bg-[#B01030] hover:shadow-lg'
                : 'bg-[#E8E3DC] text-[#C4BBAE] cursor-not-allowed'
                }`}
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
