import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FilterSidebarProps {
  selectedWoodType: string[];
  selectedUsage: string[];
  selectedFinish: string[];
  onWoodTypeChange: (type: string) => void;
  onUsageChange: (usage: string) => void;
  onFinishChange: (finish: string) => void;
}

export function FilterSidebar({
  selectedWoodType,
  selectedUsage,
  selectedFinish,
  onWoodTypeChange,
  onUsageChange,
  onFinishChange,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    woodType: true,
    usage: true,
    finish: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const woodTypes = ['Teak', 'Mahogany', 'Pine', 'Oak', 'Walnut'];
  const usageTypes = ['Furniture', 'Flooring', 'Construction', 'Decorative'];
  const finishTypes = ['Raw', 'Polished', 'Treated', 'Varnished'];

  return (
    <aside className="w-full lg:w-64 bg-white rounded-2xl border border-[#E8E3DC] p-6 h-fit sticky top-24">
      <h2 className="text-xl text-[#2D2A26] mb-6">Filter</h2>

      {/* Wood Type Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('woodType')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-[#2D2A26]">Jenis Kayu</span>
          <ChevronDown
            className={`w-4 h-4 text-[#706C66] transition-transform ${expandedSections.woodType ? 'rotate-180' : ''
              }`}
          />
        </button>
        {expandedSections.woodType && (
          <div className="space-y-2">
            {woodTypes.map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedWoodType.includes(type)}
                  onChange={() => onWoodTypeChange(type)}
                  className="w-4 h-4 rounded border-[#C4BBAE] text-[#DC143C] focus:ring-[#DC143C]"
                />
                <span className="text-sm text-[#706C66] group-hover:text-[#2D2A26] transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Usage Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('usage')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-[#2D2A26]">Penggunaan</span>
          <ChevronDown
            className={`w-4 h-4 text-[#706C66] transition-transform ${expandedSections.usage ? 'rotate-180' : ''
              }`}
          />
        </button>
        {expandedSections.usage && (
          <div className="space-y-2">
            {usageTypes.map((usage) => (
              <label key={usage} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedUsage.includes(usage)}
                  onChange={() => onUsageChange(usage)}
                  className="w-4 h-4 rounded border-[#C4BBAE] text-[#DC143C] focus:ring-[#DC143C]"
                />
                <span className="text-sm text-[#706C66] group-hover:text-[#2D2A26] transition-colors">
                  {usage}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Finish Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('finish')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="text-[#2D2A26]">Finishing</span>
          <ChevronDown
            className={`w-4 h-4 text-[#706C66] transition-transform ${expandedSections.finish ? 'rotate-180' : ''
              }`}
          />
        </button>
        {expandedSections.finish && (
          <div className="space-y-2">
            {finishTypes.map((finish) => (
              <label key={finish} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedFinish.includes(finish)}
                  onChange={() => onFinishChange(finish)}
                  className="w-4 h-4 rounded border-[#C4BBAE] text-[#DC143C] focus:ring-[#DC143C]"
                />
                <span className="text-sm text-[#706C66] group-hover:text-[#2D2A26] transition-colors">
                  {finish}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
