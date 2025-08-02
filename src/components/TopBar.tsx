import { Phone, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#e75d5e] text-white py-2 px-4 text-sm">
      <div className="w-full md:container md:mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        {/* Affiliated text on the left */}
        <div className="flex items-center font-semibold tracking-wide uppercase text-shadow">
          Affiliated by Manonmaniam Sundaranar University
        </div>
        {/* Address and Phone: right on desktop, below on mobile */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-shadow">
          <div className="flex items-center gap-2 ">
            <MapPin className="w-4 h-4" />
            <span>Tamil Nadu, T Nagar</span>
          </div>
          <div className="flex items-center gap-2 ">
            <Phone className="w-4 h-4" />
            <span>+91 12345 67890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
