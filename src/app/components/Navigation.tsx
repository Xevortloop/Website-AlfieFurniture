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
            <button onClick={() => onNavigate('products')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/Website-AlfieFurniture/assets/logo.jpeg" alt="ALFie Furniture" className="h-12 w-auto" />
              <div className="flex flex-col leading-tight">
                <div className="text-2xl font-bold">
                  <span className="text-[#DC143C]">ALFie</span>
                  <span className="text-[#D4AF37]"> Furniture</span>
                </div>
                <span className="text-xs text-[#706C66] -mt-1">kreasikan ruang impian Anda</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('products')}
              className={`transition-colors ${activePage === 'products' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
                }`}
            >
              Produk
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`transition-colors ${activePage === 'categories' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
                }`}
            >
              Kategori
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`transition-colors ${activePage === 'about' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
                }`}
            >
              Tentang Kayu
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className={`transition-colors ${activePage === 'projects' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
                }`}
            >
              Proyek
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`transition-colors ${activePage === 'contact' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
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
                <span className="absolute -top-1 -right-1 bg-[#DC143C] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
                className={`text-left transition-colors ${activePage === 'products' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
                  }`}
              >
                Produk
              </button>
              <button
                onClick={() => { onNavigate('categories'); setIsMenuOpen(false); }}
                className={`text-left transition-colors ${activePage === 'categories' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
                  }`}
              >
                Kategori
              </button>
              <button
                onClick={() => { onNavigate('about'); setIsMenuOpen(false); }}
                className={`text-left transition-colors ${activePage === 'about' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
                  }`}
              >
                Tentang Kayu
              </button>
              <button
                onClick={() => { onNavigate('projects'); setIsMenuOpen(false); }}
                className={`text-left transition-colors ${activePage === 'projects' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
                  }`}
              >
                Proyek
              </button>
              <button
                onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }}
                className={`text-left transition-colors ${activePage === 'contact' ? 'text-[#DC143C] font-medium' : 'text-[#2D2A26] hover:text-[#DC143C]'
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
