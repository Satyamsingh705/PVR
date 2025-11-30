import { ChevronDown } from 'lucide-react';

export default function SortBar() {
  return (
    <div className="flex justify-end mb-5">
      <button className="flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-sm border border-gray-200 hover:border-gray-300 transition-colors">
        <span className="text-base">
          <span className="font-bold text-gray-800">Sorted By:</span>
          <span className="text-gray-600"> Popular</span>
        </span>
        <ChevronDown size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
