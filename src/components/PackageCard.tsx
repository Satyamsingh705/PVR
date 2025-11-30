import { Check } from 'lucide-react';
import { TourPackage } from '../types';

interface PackageCardProps {
  package: TourPackage;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    // allow this card to shrink properly inside flex/grid parents
    <div className="min-w-0 bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-200">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-[200px] object-cover"
        />
        {pkg.badge && (
          <div className="absolute top-3 left-3 bg-[#eb2026] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm">
            {pkg.badge}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-[22px] font-black text-[#000] leading-tight flex-1">{pkg.title}</h3>
          <div className="border border-[#0066cc] text-[#0066cc] px-2.5 py-1 rounded text-[11px] font-bold whitespace-nowrap">
            {pkg.duration}
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-1 text-[13px] text-[#000] mb-5 font-normal">
          {pkg.destinations.map((dest, index) => (
            <span key={index} className="flex items-center">
              {dest}
              {index < pkg.destinations.length - 1 && (
                <span className="mx-2 text-[#000]">•</span>
              )}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-5">
          {pkg.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="text-[13px] text-[#4a4a4a] flex items-start gap-2 font-normal">
              <span className="text-[#000] mt-0.5 text-[10px] flex-shrink-0">•</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 mb-5">
          {pkg.highlights.slice(0, 3).map((highlight, index) => (
            <div key={index} className="flex items-start gap-2 text-[13px] text-[#0066cc] font-normal">
              <Check size={14} className="mt-0.5 flex-shrink-0 text-[#0066cc]" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#f5f5f5] rounded p-4 mb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              {pkg.priceNote && (
                <p className="text-[12px] text-[#4a4a4a] font-normal leading-relaxed">{pkg.priceNote}</p>
              )}
              {pkg.offerText && (
                <p className="text-[12px] text-[#4a4a4a] font-normal leading-relaxed">{pkg.offerText}</p>
              )}
            </div>
            <div className="text-right">
              <div className="text-[24px] font-black text-[#000] leading-none">
                ₹{pkg.price.toLocaleString()}
                <span className="text-[11px] font-normal text-[#4a4a4a]">/Person</span>
              </div>
              <div className="text-[11px] text-[#9b9b9b] mt-1 font-normal">
                Total Price ₹{pkg.totalPrice.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
