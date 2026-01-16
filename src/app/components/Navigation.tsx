import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  cartItemCount: number;
  activePage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ cartItemCount, activePage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E8E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#8B6F47] rounded-sm flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-[#F5F1EB] rounded-sm rotate-45"></div>
              </div>
              <span className="text-xl text-[#2D2A26]">AlfieFurniture</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('products')}
              className={`transition-colors ${activePage === 'products' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                }`}
            >
              Produk
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`transition-colors ${activePage === 'categories' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                }`}
            >
              Kategori
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`transition-colors ${activePage === 'about' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                }`}
            >
              Tentang Kayu
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className={`transition-colors ${activePage === 'projects' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                }`}
            >
              Proyek
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`transition-colors ${activePage === 'contact' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                }`}
            >
              Kontak
            </button>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-[#F5F1EB] rounded-full px-4 py-2 gap-2">
              <Search className="w-4 h-4 text-[#706C66]" />
              <input
                type="text"
                placeholder="Cari produk kayu..."
                className="bg-transparent border-none outline-none text-sm w-48 text-[#2D2A26] placeholder:text-[#706C66]"
              />
            </div>
            <button className="relative p-2 hover:bg-[#F5F1EB] rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5 text-[#2D2A26]" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8B6F47] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 hover:bg-[#F5F1EB] rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-[#2D2A26]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E8E3DC]">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => { onNavigate('products'); setIsMenuOpen(false); }}
                className={`text-left transition-colors ${activePage === 'products' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                  }`}
              >
                Produk
              </button>
              <button
                onClick={() => { onNavigate('categories'); setIsMenuOpen(false); }}
                className={`text-left transition-colors ${activePage === 'categories' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                  }`}
              >
                Kategori
              </button>
              <button
                onClick={() => { onNavigate('about'); setIsMenuOpen(false); }}
                className={`text-left transition-colors ${activePage === 'about' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                  }`}
              >
                Tentang Kayu
              </button>
              <button
                onClick={() => { onNavigate('projects'); setIsMenuOpen(false); }}
                className={`text-left transition-colors ${activePage === 'projects' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                  }`}
              >
                Proyek
              </button>
              <button
                onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }}
                className={`text-left transition-colors ${activePage === 'contact' ? 'text-[#8B6F47] font-medium' : 'text-[#2D2A26] hover:text-[#8B6F47]'
                  }`}
              >
                Kontak
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
