import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.svg";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'fish' | 'allFish' | null
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Fish",
      key: "fish",
      dropdown: [
        { name: "Freshwater", path: "/fish?category=freshwater" },
        { name: "Saltwater", path: "/fish?category=saltwater" },
        { name: "Exotic", path: "/fish?category=exotic" },
      ],
    },
    {
      name: "All Fish",
      key: "allFish",
      dropdown: [
        { name: "View All", path: "/fish" },
        { name: "Featured", path: "/fish?featured=true" },
      ],
    },
    { name: "Care Guides", path: "/care-guides" },
    { name: "Shop Info", path: "/shop-info" },
    { name: "Legacy", path: "/legacy" },
  ];

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <nav className="bg-[#003366] text-white sticky top-0 z-50 border-b border-[#00CED1]/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* ───── Two-Row Navbar ───── */}
        <div className="flex items-center justify-between py-2">
          {/* Mobile Menu Button (Left) */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Centered Logo + Brand Name (Top Row) */}
          <div className="hidden md:flex flex-col items-center space-y-2 mx-auto">
            <Link to="/" className="flex items-center space-x-3">
              <motion.img
                src={logo}
                alt="PetFish Logo"
                className="h-10 w-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="text-2xl font-bold">
                Due<span className="text-[#00CED1]">Seller</span>
              </span>
            </Link>

            {/* Navigation Links (Bottom Row, Centered Under Logo) */}
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.key || null)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.dropdown ? (
                    <>
                      <button className="text-sm font-medium text-gray-300 hover:text-white">
                        {link.name} ▾
                      </button>

                      {openDropdown === link.key && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#002855] rounded-lg border border-[#00CED1]/20 shadow-xl z-50">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-5 py-3 text-sm text-gray-300 hover:bg-[#004080] hover:text-[#00CED1]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-sm font-medium ${
                        isActive(link.path)
                          ? "text-[#00CED1]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right spacer (for mobile layout balance) */}
          <div className="w-6 md:w-0"></div>
        </div>

        {/* ───── Mobile Menu ───── */}
        {menuOpen && (
          <div className="md:hidden bg-[#002855] px-4 pb-6 border-t border-[#00CED1]/20">
            {navLinks.map((link) => (
              <div key={link.name} className="mb-2">
                {link.dropdown ? (
                  <>
                    <button
                      className="w-full flex justify-between py-3 text-gray-600"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.key ? null : link.key
                        )
                      }
                    >
                      {link.name}
                      <span>{openDropdown === link.key ? "▲" : "▼"}</span>
                    </button>

                    {openDropdown === link.key && (
                      <div className="ml-4 border-l border-[#00CED1]/30">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-400 hover:text-[#00CED1]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-gray-600 hover:text-[#00CED1]"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
