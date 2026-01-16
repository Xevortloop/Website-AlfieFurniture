import { useState, useMemo } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { FilterSidebar } from '@/app/components/FilterSidebar';
import { ProductCard, Product } from '@/app/components/ProductCard';
import { ProductDetail } from '@/app/components/ProductDetail';
import { Categories } from '@/app/components/Categories';
import { AboutWood } from '@/app/components/AboutWood';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: 'Premium Teak Wood Panel',
    woodType: 'Teak',
    price: 89.99,
    unit: 'm²',
    size: '2400 x 1200mm',
    finish: 'Polished',
    usage: 'Furniture',
    image: 'https://images.unsplash.com/photo-1702180448394-4226879fe3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFrJTIwd29vZCUyMHBhbmVsfGVufDF8fHx8MTc2Nzk5ODg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
  },
  {
    id: 2,
    name: 'Classic Oak Plank',
    woodType: 'Oak',
    price: 65.50,
    unit: 'm²',
    size: '2000 x 200mm',
    finish: 'Raw',
    usage: 'Flooring',
    image: 'https://images.unsplash.com/photo-1690522399419-63543099915a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYWslMjB3b29kJTIwcGxhbmt8ZW58MXx8fHwxNzY3OTk4ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
  },
  {
    id: 3,
    name: 'Walnut Furniture Board',
    woodType: 'Walnut',
    price: 125.00,
    unit: 'piece',
    size: '3000 x 400mm',
    finish: 'Varnished',
    usage: 'Furniture',
    image: 'https://images.unsplash.com/photo-1732575966442-b2d665c080d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXQlMjB3b29kJTIwZnVybml0dXJlfGVufDF8fHx8MTc2Nzk5ODg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
  },
  {
    id: 4,
    name: 'Mahogany Premium Panel',
    woodType: 'Mahogany',
    price: 145.99,
    unit: 'm²',
    size: '2400 x 1200mm',
    finish: 'Polished',
    usage: 'Decorative',
    image: 'https://images.unsplash.com/photo-1656733911001-16912b79d2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWhvZ2FueSUyMHdvb2R8ZW58MXx8fHwxNzY3OTk4ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
  },
  {
    id: 5,
    name: 'Pine Construction Lumber',
    woodType: 'Pine',
    price: 45.00,
    unit: 'piece',
    size: '2400 x 150mm',
    finish: 'Raw',
    usage: 'Construction',
    image: 'https://images.unsplash.com/photo-1566918756489-f9687075050a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lJTIwd29vZCUyMGx1bWJlcnxlbnwxfHx8fDE3Njc5OTg4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
  },
  {
    id: 6,
    name: 'Oak Flooring Premium',
    woodType: 'Oak',
    price: 78.50,
    unit: 'm²',
    size: '1800 x 180mm',
    finish: 'Treated',
    usage: 'Flooring',
    image: 'https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZmxvb3JpbmclMjBwYW5lbHN8ZW58MXx8fHwxNzY3OTk4ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
  },
  {
    id: 7,
    name: 'Teak Decorative Strip',
    woodType: 'Teak',
    price: 55.00,
    unit: 'piece',
    size: '2000 x 100mm',
    finish: 'Varnished',
    usage: 'Decorative',
    image: 'https://images.unsplash.com/photo-1766245070010-6e13043ae47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwdGV4dHVyZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzY3OTYyMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: false,
  },
  {
    id: 8,
    name: 'Pine Furniture Panel',
    woodType: 'Pine',
    price: 52.00,
    unit: 'm²',
    size: '2400 x 600mm',
    finish: 'Polished',
    usage: 'Furniture',
    image: 'https://images.unsplash.com/photo-1566918756489-f9687075050a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lJTIwd29vZCUyMGx1bWJlcnxlbnwxfHx8fDE3Njc5OTg4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
  },
  {
    id: 9,
    name: 'Walnut Decorative Panel',
    woodType: 'Walnut',
    price: 135.00,
    unit: 'm²',
    size: '2400 x 1200mm',
    finish: 'Polished',
    usage: 'Decorative',
    image: 'https://images.unsplash.com/photo-1732575966442-b2d665c080d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXQlMjB3b29kJTIwZnVybml0dXJlfGVufDF8fHx8MTc2Nzk5ODg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inStock: true,
  },
];

export default function App() {
  const [selectedWoodType, setSelectedWoodType] = useState<string[]>([]);
  const [selectedUsage, setSelectedUsage] = useState<string[]>([]);
  const [selectedFinish, setSelectedFinish] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [activePage, setActivePage] = useState<string>('products');

  // Filter logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesWoodType =
        selectedWoodType.length === 0 || selectedWoodType.includes(product.woodType);
      const matchesUsage =
        selectedUsage.length === 0 || selectedUsage.includes(product.usage);
      const matchesFinish =
        selectedFinish.length === 0 || selectedFinish.includes(product.finish);

      return matchesWoodType && matchesUsage && matchesFinish;
    });
  }, [selectedWoodType, selectedUsage, selectedFinish]);

  // Filter handlers
  const handleWoodTypeChange = (type: string) => {
    setSelectedWoodType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleUsageChange = (usage: string) => {
    setSelectedUsage((prev) =>
      prev.includes(usage) ? prev.filter((u) => u !== usage) : [...prev, usage]
    );
  };

  const handleFinishChange = (finish: string) => {
    setSelectedFinish((prev) =>
      prev.includes(finish) ? prev.filter((f) => f !== finish) : [...prev, finish]
    );
  };

  // Cart handlers
  const handleAddToCart = (productId: number) => {
    setCartItems((prev) => [...prev, productId]);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation
        cartItemCount={cartItems.length}
        activePage={activePage}
        onNavigate={setActivePage}
      />

      {activePage === 'products' && (
        <>
          <Hero />
          {/* Products Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12">
              <h2 className="text-4xl text-[#2D2A26] mb-4">Koleksi Kayu Kami</h2>
              <p className="text-lg text-[#706C66] max-w-2xl">
                Jelajahi pilihan produk kayu premium kami. Setiap potongan dipilih dengan cermat
                dan dikerjakan untuk menghadirkan keindahan alami ke proyek Anda.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter Sidebar */}
              <FilterSidebar
                selectedWoodType={selectedWoodType}
                selectedUsage={selectedUsage}
                selectedFinish={selectedFinish}
                onWoodTypeChange={handleWoodTypeChange}
                onUsageChange={handleUsageChange}
                onFinishChange={handleFinishChange}
              />

              {/* Product Grid */}
              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-[#706C66]">
                    Menampilkan {filteredProducts.length} dari {products.length} produk
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                      onAddToCart={() => handleAddToCart(product.id)}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-xl text-[#706C66]">
                      Tidak ada produk yang sesuai dengan filter Anda. Coba sesuaikan pilihan Anda.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Product Detail Modal */}
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onAddToCart={() => {
                handleAddToCart(selectedProduct.id);
                setSelectedProduct(null);
              }}
            />
          )}
        </>
      )}

      {activePage === 'categories' && <Categories />}
      {activePage === 'about' && <AboutWood />}
      {activePage === 'projects' && <Projects />}
      {activePage === 'contact' && <Contact />}
    </div>
  );
}
