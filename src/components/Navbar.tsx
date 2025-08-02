import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo7.jpeg";
import bgImage from "../assets/lighred.png"; // 🔁 Replace with your image if different

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Course Detalis", href: "/programs" },
    { name: "Contact", href: "/contact" },
    // { name: "Student Portal", href: "/portal" },
  ];

  return (
    <>
      <nav
        className="bg-white/90 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-border relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center h-auto md:h-16 py-2 md:py-0">
            {/* Logo and Title */}
            <Link to="/" className="flex flex-row items-center space-x-2 md:space-x-3 mb-2 md:mb-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg bg-white"
                />
              </div>
              <div>
                <h1 className="text-shadow leading-tight text-white md:text-xl font-bold text-foreground leading-tight">
                  RJR VSD Educational Trust
                </h1>
                <p className="text-[10px] text-shadow leading-tight text-white md:text-xs text-muted-foreground leading-tight">
                  Affiliated Manonmaniam Sundaranar University
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-shadow-sm  font-bold  ">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <a key={link.name} href={link.href} className="nav-link">
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`nav-link ${location.pathname === link.href ? "text-primary" : ""}`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button className="btn-primary px-6" onClick={() => setShowModal(true)}>
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 absolute top-4 right-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden w-full bg-white/95 backdrop-blur-sm border-t border-border shadow-lg absolute left-0 top-full z-40">
              <div className="flex flex-col space-y-4 px-4 py-4">
                {navLinks.map((link) =>
                  link.href.startsWith("#") ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-foreground/80 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`text-foreground/80 hover:text-primary transition-colors ${
                        location.pathname === link.href ? "text-primary" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <Button className="btn-primary w-full mt-4" onClick={() => setShowModal(true)}>
                  Apply Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4">Apply Now</h2>

            <form>
              <div className="mb-4">
                <label className="block mb-1 text-sm">Name</label>
                <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Your Name" />
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm">Email</label>
                <input type="email" className="w-full border px-3 py-2 rounded" placeholder="Your Email" />
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm">Course</label>
                <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Interested Course" />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </div>
            </form>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
