import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FilterSidebarProps {
  selectedCategory: string[];
  onCategoryChange: (category: string) => void;
}

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const categories = ['Meja', 'Meja Rias', 'Sofa', 'Almari Besi', 'Kursi Tamu Jati', 'Kursi Tamu Akasia'];

  return (
    <aside className="w-full lg:w-64 bg-white rounded-2xl border border-[#E8E3DC] p-6 h-fit sticky top-24">
      <h2 className="text-xl text-[#2D2A26] mb-6">Filter</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-[#2D2A26]">Kategori Produk</span>
          <ChevronDown
            className={`w-4 h-4 text-[#706C66] transition-transform ${expandedSections.category ? 'rotate-180' : ''
              }`}
          />
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategory.includes(category)}
                  onChange={() => onCategoryChange(category)}
                  className="w-4 h-4 rounded border-[#C4BBAE] text-[#DC143C] focus:ring-[#DC143C]"
                />
                <span className="text-sm text-[#706C66] group-hover:text-[#2D2A26] transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
