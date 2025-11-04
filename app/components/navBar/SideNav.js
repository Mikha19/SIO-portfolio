import NavLinks from './Links';

export default function SideNav() {
  return (
    <>
      <nav className="md:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="overflow-x-auto">
          <div className="flex gap-2 px-2 py-2">
            <NavLinks horizontal />
          </div>
        </div>
      </nav>

      {/* Desktop / Tablet: vertical sidebar, links area scrollable, socials pinned to bottom */}
      <nav className="hidden md:flex flex-col p-2 h-full w-56">
        {/* Scrollable links area */}
        <div className="flex flex-col overflow-auto space-y-2">
          <NavLinks />
        </div>
      </nav>
    </>
  );
}