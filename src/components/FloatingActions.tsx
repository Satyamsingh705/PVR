import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 flex flex-col gap-3 z-20">
      <button className="bg-[#eb2026] hover:bg-[#d11a1f] text-white rounded-full p-3.5 shadow-[0_4px_12px_rgba(235,32,38,0.4)] transition-all hover:scale-105 flex flex-col items-center gap-0.5 w-[70px] h-[70px] justify-center">
        <MessageCircle size={22} strokeWidth={2.5} />
        <span className="text-[9px] font-bold uppercase tracking-wide">Live Chat</span>
      </button>
      <button className="bg-[#eb2026] hover:bg-[#d11a1f] text-white rounded-full p-3.5 shadow-[0_4px_12px_rgba(235,32,38,0.4)] transition-all hover:scale-105 flex flex-col items-center gap-0.5 w-[70px] h-[70px] justify-center">
        <Phone size={22} strokeWidth={2.5} />
        <span className="text-[9px] font-bold uppercase tracking-wide leading-tight text-center">Get a callback</span>
      </button>
    </div>
  );
}
