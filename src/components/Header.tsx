export default function Header() {
  return (
    // desktop / larger screens header only — TopNav provides the PVR header on mobile
    <header className="bg-[#051423] text-white hidden lg:block">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <h2 className="text-[26px] font-black mb-1 tracking-tight">Shimla Tour Packages</h2>
        <p className="text-[13px] text-white/70 font-normal">Why Shimla?</p>
      </div>
    </header>
  );
}
