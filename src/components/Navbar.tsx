import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Course Detalis", href: "/programs" },
    { name: "Contact", href: "/contact" },
    { name: "Student Portal", href: "/portal" },

  ];

  return (
    <>
    <nav className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">RJR VSD</h1>
              <p className="text-xs text-muted-foreground">Educational Trust</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? 'text-primary' : ''}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button className="btn-primary px-6" onClick={() => setShowModal(true)}>
              Apply Now
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
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
                    className={`text-foreground/80 hover:text-primary transition-colors ${location.pathname === link.href ? 'text-primary' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Button className="btn-primary w-full mt-4" onClick={() => setShowModal(true)}>
                Apply Now
              </Button>

            </div>
          </div>
        )}
      </div>
    </nav>
    {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
      <h2 className="text-xl font-bold mb-4">Apply Now</h2>

      <form>
        <div className="mb-4">
          <label className="block mb-1 text-sm">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Course</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="Interested Course"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
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