import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Prince.Dev</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#" className="block hover:text-cyan-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-cyan-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-cyan-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;