import {
  Plane,
  Building2,
  Home,
  Umbrella,
  Train,
  Bus,
  Car,
  BookUser,
  CreditCard,
  ShieldCheck,
  MoreHorizontal,
  ChevronDown,
  Ticket,
  User,
} from 'lucide-react';

const navItems = [
  { icon: Plane, label: 'Flights' },
  { icon: Building2, label: 'Hotels' },
  { icon: Home, label: 'Homesta...' },
  { icon: Umbrella, label: 'Holiday..', active: true },
  { icon: Train, label: 'Trains' },
  { icon: Bus, label: 'Buses' },
  { icon: Car, label: 'Cabs' },
  { icon: BookUser, label: 'Visa' },
  { icon: CreditCard, label: 'Forex Ca...' },
  { icon: ShieldCheck, label: 'Travel Ins...' },
];

export default function TopNav() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-blue-600 p-2 rounded-full">
            <Ticket size={24} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-3xl font-black text-gray-800 tracking-tighter">PVR</span>
        </div>
        
        {/* Nav Items */}
        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <a href="#" key={item.label} className={`flex flex-col items-center gap-1.5 group transition-colors ${item.active ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}>
              <item.icon size={28} strokeWidth={1} />
              <span className="text-xs font-semibold tracking-tighter">{item.label}</span>
            </a>
          ))}
          <a href="#" className="flex flex-col items-center gap-1.5 text-gray-700 hover:text-blue-500">
            <MoreHorizontal size={28} strokeWidth={1} />
            <div className="flex items-center text-xs font-semibold">
                <span>More</span>
                <ChevronDown size={14} />
            </div>
          </a>
        </nav>

        {/* Login */}
        <button className="flex items-center gap-3 rounded-lg px-3 py-1.5 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
          <div className="text-left leading-tight hidden sm:block">
            <p className="font-bold text-gray-800 text-sm">Login or</p>
            <p className="font-bold text-gray-800 text-sm">Create Account</p>
          </div>
        </button>
      </div>
    </header>
  );
}
