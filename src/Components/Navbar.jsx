import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (targetId) => {
    setIsOpen(false);
    if (targetId === "home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white  border-b border-emerald-500 px-6 py-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="text-2xl font-bold text-emerald-600 focus:outline-none"
        >
          Apurbo Chakrobarty
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium text-gray-700 text-lg">
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-emerald-600 transition"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-emerald-600 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="hover:text-emerald-600 transition"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-emerald-600 transition"
          >
            Contact Me
          </button>
          <Link
            to="/journey"
            className="bg-emerald-600 text-white px-5 py-1.5 rounded-lg hover:bg-emerald-700 transition"
          >
            Journey
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-lg font-bold text-gray-700 p-1"
        >
          {isOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 pt-4 pb-2 border-t mt-3 text-center font-medium text-gray-700">
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-emerald-600 transition"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-emerald-600 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="hover:text-emerald-600 transition"
          >
            Skills
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-emerald-600 transition"
          >
            Contact
          </button>
          <Link
            to="/journey"
            onClick={() => setIsOpen(false)}
            className="bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            Journey
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
