import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function FilterSection({ title, isOpen, onToggle, children }: FilterSectionProps) {
  return (
    // increased vertical spacing, border is handled by parent `divide-y`
    <div className="py-6">
      <button
        onClick={onToggle}
        // larger, heavier title; removed uppercase to match reference; chevron on right
        className="w-full flex items-center justify-between text-left font-extrabold text-lg lg:text-[20px] mb-0 text-[#111827] tracking-tight"
      >
        {title}
        {isOpen ? (
          <ChevronUp size={20} className="text-[#6b7280]" />
        ) : (
          <ChevronDown size={20} className="text-[#6b7280]" />
        )}
      </button>
      {isOpen && <div className="space-y-4 mt-4">{children}</div>}
    </div>
  );
}

export default function Filters() {
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    duration: false,
    flights: false,
    budget: false,
    hotelCategory: false,
    cities: false,
    themes: false,
    packageType: false,
    premiumPackages: false,
  });

  const toggleFilter = (filterName: string) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <div>
      {/* smaller, muted "FILTERS" heading like reference */}
      <h2 className="text-[12px] font-bold pb-4 text-[#6b7280] uppercase tracking-wide">FILTERS</h2>

      <div className="divide-y divide-gray-200">
        <FilterSection
          title="Duration (in Nights)"
          isOpen={openFilters.duration}
          onToggle={() => toggleFilter('duration')}
        >
          <div>
            <input
              type="range"
              min="2"
              max="11"
              defaultValue="5"
              className="w-full accent-[#008cff] h-1.5"
            />
            <div className="flex justify-between text-[13px] text-[#6b7280] mt-3 font-medium">
              <span>2N</span>
              <span>11N</span>
            </div>
          </div>
        </FilterSection>

        <FilterSection
          title="Flights"
          isOpen={openFilters.flights}
          onToggle={() => toggleFilter('flights')}
        >
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2 border border-gray-300 rounded hover:border-[#008cff] hover:bg-[#e7f6ff] transition-colors text-[14px] font-medium text-[#374151]">
              With Flight (52)
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 rounded hover:border-[#008cff] hover:bg-[#e7f6ff] transition-colors text-[14px] font-medium text-[#374151]">
              Without Flight (75)
            </button>
          </div>
        </FilterSection>

        <FilterSection
          title="Budget (per person)"
          isOpen={openFilters.budget}
          onToggle={() => toggleFilter('budget')}
        >
          <div>
            <input
              type="range"
              min="0"
              max="140000"
              defaultValue="70000"
              className="w-full accent-[#008cff] h-1.5"
            />
            <div className="flex justify-between text-[13px] text-[#6b7280] mt-3 font-medium">
              <span>₹0</span>
              <span>₹1,40,000</span>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            {[
              { label: '< ₹25,000', count: 37 },
              { label: '₹25,000 - ₹30,000', count: 21 },
              { label: '₹30,000 - ₹40,000', count: 31 },
              { label: '> ₹40,000', count: 25 },
            ].map((option) => (
              <label
                key={option.label}
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#008cff] cursor-pointer rounded"
                />
                <span className="text-[15px] text-[#111827] flex-1 font-medium">{option.label}</span>
                <span className="text-[13px] text-[#9b9b9b] font-normal">({option.count})</span>
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Hotel Category"
          isOpen={openFilters.hotelCategory}
          onToggle={() => toggleFilter('hotelCategory')}
        >
          <div className="flex gap-3">
            {[
              { label: '<3★', count: 2 },
              { label: '3★', count: 51 },
              { label: '4★', count: 21 },
              { label: '5★', count: 11 },
            ].map((star) => (
              <button
                key={star.label}
                className="flex-1 px-3 py-2 border border-gray-300 rounded hover:border-[#008cff] hover:bg-[#e7f6ff] transition-colors text-center text-[14px] font-medium"
              >
                <div className="text-[#111827]">{star.label}</div>
                <div className="text-[12px] text-[#9b9b9b] font-normal">({star.count})</div>
              </button>
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Cities"
          isOpen={openFilters.cities}
          onToggle={() => toggleFilter('cities')}
        >
          <div className="space-y-2">
            {['Shimla', 'Manali', 'Kullu', 'Dharamshala', 'Kasol'].map((city) => (
              <label key={city} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#008cff] cursor-pointer rounded"
                />
                <span className="text-[15px] text-[#111827] font-medium">{city}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Themes"
          isOpen={openFilters.themes}
          onToggle={() => toggleFilter('themes')}
        >
          <div className="space-y-2">
            {['Honeymoon', 'Family', 'Adventure', 'Leisure', 'Religious'].map((theme) => (
              <label key={theme} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#008cff] cursor-pointer rounded"
                />
                <span className="text-[15px] text-[#111827] font-medium">{theme}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Package Type"
          isOpen={openFilters.packageType}
          onToggle={() => toggleFilter('packageType')}
        >
          <div className="space-y-2">
            {['Group Tours', 'Private Tours', 'Customizable'].map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#008cff] cursor-pointer rounded"
                />
                <span className="text-[15px] text-[#111827] font-medium">{type}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection
          title="Premium Packages"
          isOpen={openFilters.premiumPackages}
          onToggle={() => toggleFilter('premiumPackages')}
        >
          <div className="space-y-2">
            {['Luxury Hotels', '5-Star Experiences', 'All Inclusive'].map((premium) => (
              <label key={premium} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#008cff] cursor-pointer rounded"
                />
                <span className="text-[15px] text-[#111827] font-medium">{premium}</span>
              </label>
            ))}
          </div>
        </FilterSection>
      </div>
    </div>
  );
}
