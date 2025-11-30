import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import TopNav from './components/TopNav';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import Filters from './components/Filters';
import SortBar from './components/SortBar';
import PackageCard from './components/PackageCard';
import FloatingActions from './components/FloatingActions';
import { tourPackages } from './data/packages';

function App() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <TopNav />
      <Header />

      {/* attached white panel under header */}
      <div className="max-w-[1400px] mx-auto px-0 sm:px-4 -mt-8">
        <div className="bg-white rounded-none sm:rounded-3xl shadow-[0_6px_30px_rgba(2,6,23,0.12)] border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
          {/* Content first in DOM (mobile-first) — on lg it will appear to the right via order classes */}
          <div className="order-1 lg:order-2 flex-1 min-w-0">
            {/* mobile-only filter trigger (visible on small screens) */}
            <div className="lg:hidden px-4 pt-4">
              <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-3">
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-800"
                >
                  <Filter size={16} />
                  Filters
                </button>
                <div className="text-sm text-gray-600">All Packages</div>
              </div>
            </div>

            {/* Category tabs inside right panel so both halves look attached */}
            <CategoryTabs />

            <div className="px-4 py-6 sm:px-6 min-w-0">
              <SortBar />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {tourPackages.map((pkg) => (
                  <PackageCard key={pkg.id} package={pkg} />
                ))}
              </div>
            </div>
          </div>

          {/* Filters second in DOM — on lg it will be visually placed on the left */}
          <div className="order-2 lg:order-1 hidden lg:block w-full lg:w-[309px] border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="p-4 lg:pt-[26.5px] lg:px-[30px] lg:pb-[18px]">
              <div className="h-auto lg:h-[calc(100vh-161px)] overflow-auto scrollbar-hide">
                <Filters />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingActions />

      {/* Mobile filter overlay / drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[80%] bg-white overflow-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold">Filters</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 text-gray-700"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <Filters />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
