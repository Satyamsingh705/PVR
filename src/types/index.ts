export interface TourPackage {
  id: string;
  title: string;
  image: string;
  duration: string;
  destinations: string[];
  nights: number;
  price: number;
  totalPrice: number;
  features: string[];
  highlights: string[];
  badge?: string;
  priceNote?: string;
  offerText?: string;
}

export interface FilterState {
  duration: [number, number];
  flights: string;
  budget: [number, number];
  hotelCategory: string[];
  cities: string[];
  themes: string[];
  packageType: string[];
  premiumPackages: string[];
}
