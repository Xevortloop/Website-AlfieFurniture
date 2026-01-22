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

// Product data with furniture categories
const products: Product[] = [
  {
    id: 1,
    name: 'Meja Makan Minimalis Jati',
    category: 'Meja',
    price: 3500000,
    unit: 'unit',
    size: '150 x 80 x 75 cm',
    finish: 'Natural Varnish',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    inStock: true,
  },
  {
    id: 2,
    name: 'Meja Rias Klasik Mahoni',
    category: 'Meja Rias',
    price: 2800000,
    unit: 'unit',
    size: '120 x 50 x 140 cm',
    finish: 'Glossy Brown',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    inStock: true,
  },
  {
    id: 3,
    name: 'Sofa Minimalis 3 Dudukan',
    category: 'Sofa',
    price: 4500000,
    unit: 'unit',
    size: '200 x 85 x 80 cm',
    finish: 'Fabric Upholstery',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    inStock: true,
  },
  {
    id: 4,
    name: 'Almari Besi 2 Pintu',
    category: 'Almari Besi',
    price: 1800000,
    unit: 'unit',
    size: '90 x 50 x 180 cm',
    finish: 'Powder Coating',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    inStock: true,
  },
  {
    id: 5,
    name: 'Kursi Tamu Jati Ukir',
    category: 'Kursi Tamu Jati',
    price: 5200000,
    unit: 'set',
    size: 'Set 3+2+1',
    finish: 'Natural Wood',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    inStock: true,
  },
  {
    id: 6,
    name: 'Kursi Tamu Akasia Modern',
    category: 'Kursi Tamu Akasia',
    price: 3800000,
    unit: 'set',
    size: 'Set 2+1',
    finish: 'Natural Oil',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80',
    inStock: true,
  },
  {
    id: 7,
    name: 'Meja Kerja Industrial',
    category: 'Meja',
    price: 2500000,
    unit: 'unit',
    size: '120 x 60 x 75 cm',
    finish: 'Matte Black',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
    inStock: true,
  },
  {
    id: 8,
    name: 'Meja Rias Modern Putih',
    category: 'Meja Rias',
    price: 2200000,
    unit: 'unit',
    size: '100 x 45 x 130 cm',
    finish: 'Duco White',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    inStock: false,
  },
  {
    id: 9,
    name: 'Sofa L-Shape Premium',
    category: 'Sofa',
    price: 7800000,
    unit: 'unit',
    size: '280 x 180 x 85 cm',
    finish: 'Leather Upholstery',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80',
    inStock: true,
  },
  {
    id: 10,
    name: 'Almari Besi Sliding Door',
    category: 'Almari Besi',
    price: 2400000,
    unit: 'unit',
    size: '120 x 50 x 200 cm',
    finish: 'Grey Powder Coating',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    inStock: true,
  },
  {
    id: 11,
    name: 'Kursi Tamu Jati Minimalis',
    category: 'Kursi Tamu Jati',
    price: 4200000,
    unit: 'set',
    size: 'Set 2+1+1',
    finish: 'Natural Varnish',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
    inStock: true,
  },
  {
    id: 12,
    name: 'Kursi Tamu Akasia Scandinavian',
    category: 'Kursi Tamu Akasia',
    price: 3200000,
    unit: 'set',
    size: 'Set 1+1',
    finish: 'Light Oak',
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80',
    inStock: true,
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activePage, setActivePage] = useState<string>('products');

  // Filter logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory.length === 0 || selectedCategory.includes(product.category);

      return matchesCategory;
    });
  }, [selectedCategory]);

  // Filter handlers
  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation
        activePage={activePage}
        onNavigate={setActivePage}
      />

      {activePage === 'products' && (
        <>
          <Hero />
          {/* Products Section */}
          <section id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
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
