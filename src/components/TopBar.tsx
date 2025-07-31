import { Phone, MapPin } from "lucide-react";
import logo from "../assets/english_logo.png";

const TopBar = () => {
  return (
    <div className="bg-red-400 text-white py-2 px-4 text-sm">
      <div className="w-full md:container md:mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        {/* Logo on the left, rounded */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-50 h-10 object-contain rounded"
            style={{ maxHeight: "40px" }}
          />
        </div>
        {/* Address and Phone: right on desktop, below logo on mobile */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Tamil Nadu, T nagar</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 12345 67890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;