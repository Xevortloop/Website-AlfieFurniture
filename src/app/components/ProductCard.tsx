import { ShoppingCart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  woodType: string;
  price: number;
  unit: string;
  size: string;
  finish: string;
  usage: string;
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
          <div className="absolute top-3 right-3 bg-[#8B6F47]/90 text-white px-3 py-1 rounded-full text-xs">
            Tersedia
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs text-[#8B6F47] uppercase tracking-wide">
            {product.woodType}
          </span>
        </div>
        <h3 className="text-lg text-[#2D2A26] mb-2 group-hover:text-[#8B6F47] transition-colors">
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

        {/* Price and Cart */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-2xl text-[#2D2A26]">${product.price}</span>
            <span className="text-sm text-[#706C66] ml-1">/ {product.unit}</span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`p-2 rounded-lg transition-all ${product.inStock
                ? 'bg-[#8B6F47] text-white hover:bg-[#6F5838] hover:shadow-lg'
                : 'bg-[#E8E3DC] text-[#C4BBAE] cursor-not-allowed'
              }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
