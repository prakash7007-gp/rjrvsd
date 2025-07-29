import { Phone, Mail, MapPin, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-education-blue text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info@rjrvsd.edu.in</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Bangalore, Karnataka</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;