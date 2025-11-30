import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '../data/packages';
import { useState } from 'react';

export default function CategoryTabs() {
  const [selectedCategory, setSelectedCategory] = useState('stays');

  return (
    // sticky to the top of the right panel; rounded top-right to match attached look
    <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm rounded-tr-3xl">
      <div className="px-4 sm:px-6">
        <div className="flex items-center gap-2 py-0">
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors flex-shrink-0">
            <ChevronLeft size={18} className="text-gray-500" />
          </button>

          <div className="flex gap-0 overflow-x-auto scrollbar-hide flex-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap px-4 pt-[14px] pb-[18px] text-sm font-bold uppercase transition-colors relative leading-[22px] ${
                  selectedCategory === category.id
                    ? 'text-[#008cff]'
                    : 'text-[#4a4a4a] hover:text-[#008cff]'
                }`}
              >
                {category.label} ({category.count})
                {selectedCategory === category.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#008cff]"></span>
                )}
              </button>
            ))}
          </div>

          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors flex-shrink-0">
            <ChevronRight size={18} className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
