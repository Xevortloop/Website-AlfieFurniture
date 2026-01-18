import { MessageCircle } from 'lucide-react';

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
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Halo, saya tertarik dengan produk:\n\n*${product.name}*\nKategori: ${product.category}\nFinishing: ${product.finish}\n\nApakah bisa dibuatkan sesuai dengan spesifikasi ini?`;
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

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full p-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all hover:shadow-lg flex items-center justify-center gap-2 mt-4"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Tanya via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
