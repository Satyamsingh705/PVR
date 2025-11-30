import { TourPackage } from '../types';

export const tourPackages: TourPackage[] = [
  {
    id: '1',
    title: 'Himachal Retreat',
    image: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5N/6D',
    destinations: ['2N Shimla', '3N Manali'],
    nights: 5,
    price: 12903,
    totalPrice: 25806,
    badge: 'Deal of the Day',
    features: [
      '3 Star Hotel & 3 Star Villa',
      'Airport Pickup & Drop',
      '4 Activities',
      'Selected Meals'
    ],
    highlights: [
      'Visit to Solang Valley, Viceregal Lodge, Mall road',
      'MMT Tour Manager Assistance',
      'Visit to Scandal Point, Townhall, Shimla Church'
    ],
    priceNote: 'This price is lower than the average price in January'
  },
  {
    id: '2',
    title: 'Serene Shimla, Kullu & Manali',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '6N/7D',
    destinations: ['2N Shimla', '1N Kullu', '3N Manali'],
    nights: 6,
    price: 17358,
    totalPrice: 34716,
    features: [
      'Intercity Car Transfers',
      '3 Star Hotels & 3 Star Homestay',
      'Airport Pickup & Drop',
      '7 Activities',
      'Selected Meals'
    ],
    highlights: [
      'Open Air Lunch in Manali',
      'Visit to Hadimba Temple, Kufri, Solang Valley',
      'Photoshoot in Shimla'
    ],
    offerText: 'Book this now by paying only ₹2,000'
  },
  {
    id: '3',
    title: 'Best of Shimla',
    image: 'https://images.pexels.com/photos/12347701/pexels-photo-12347701.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3N/4D',
    destinations: ['3N Shimla'],
    nights: 3,
    price: 10397,
    totalPrice: 20794,
    features: [
      'Intercity Car Transfers',
      '3 Star Homestay',
      'Airport Pickup & Drop',
      '3 Activities',
      'Selected Meals'
    ],
    highlights: [
      'Visit to Mall road, Scandal Point, Viceregal Lodge',
      'Visit to Kufri, Himalayan Nature Park, Naldehra',
      'MMT Tour Manager Assistance'
    ],
    offerText: 'No Cost EMI at ₹3,545/month'
  },
  {
    id: '4',
    title: 'Himalayan Honeymoon Escape',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5N/6D',
    destinations: ['2N Shimla', '3N Manali'],
    nights: 5,
    price: 15867,
    totalPrice: 31734,
    features: [
      'Intercity Car Transfers',
      '3 Star Hotel & 3 Star Villa',
      'Airport Pickup & Drop',
      '7 Activities',
      'Selected Meals'
    ],
    highlights: [
      'Fly-Dinning',
      'Visit to Solang Valley, Viceregal Lodge, Mall road',
      'Zipline at Solang Valley'
    ],
    priceNote: 'This price is lower than the average price in January'
  },
  {
    id: '5',
    title: 'Divine Shimla & Manali',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4N/5D',
    destinations: ['2N Shimla', '2N Manali'],
    nights: 4,
    price: 13500,
    totalPrice: 27000,
    features: [
      'Intercity Car Transfers',
      '4 Star Hotels',
      'Airport Pickup & Drop',
      '5 Activities',
      'All Meals Included'
    ],
    highlights: [
      'Visit to Rohtang Pass',
      'Shopping at Mall Road',
      'Hadimba Temple Darshan'
    ]
  },
  {
    id: '6',
    title: 'Shimla Splendor',
    image: 'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '2N/3D',
    destinations: ['2N Shimla'],
    nights: 2,
    price: 8999,
    totalPrice: 17998,
    features: [
      'Car Transfers',
      '3 Star Hotel',
      'Breakfast Included',
      '2 Activities'
    ],
    highlights: [
      'Kufri Visit',
      'Mall Road Shopping',
      'Ridge Walk'
    ]
  }
];

export const categories = [
  { id: 'stays', label: 'STAYS', count: 10 },
  { id: 'luxury', label: 'LUXURY', count: 3 },
  { id: 'homestays', label: 'HOMESTAYS & MORE', count: 6 },
  { id: 'all-inclusive', label: 'ALL INCLUSIVE', count: 1 },
  { id: 'multi-stay', label: 'MULTI-STAY PACKAGES', count: 2 },
  { id: 'offbeat', label: 'OFFBEAT', count: 2 },
  { id: 'last-minute', label: 'LAST MINUTE DEALS', count: 2 },
  { id: 'pilgrimage', label: 'PILGRIMAGE', count: 3 },
  { id: 'long-stays', label: 'LONG STAYS', count: 10 }
];
