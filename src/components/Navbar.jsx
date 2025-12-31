import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    {
      name: "Our Collection",
      path: "/fish",
      dropdown: [
        { name: "All Fish", path: "/fish" },
        { name: "Betta", path: "/fish?category=betta" },
        { name: "Channa", path: "/fish?category=channa" },

        { name: "Flower Horn", path: "/fish?category=flower horn" },
      ],
    },
    { name: "FAQ", path: "/faq" },
    { name: "Care Guides", path: "/care-guides" },
    { name: "Shop Info", path: "/shop-info" },
    { name: "Legacy", path: "/legacy" },
    { name: "Payment", path: "/payment" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-[#003366] text-white sticky top-0 z-50 shadow-xl border-b border-[#00CED1]/20">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center ">
          {/* Top Row: Logo & Toggle */}
          <div className="w-full flex-row-reverse flex justify-between md:justify-center items-center relative mb-0 md:mb-2">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#004080] focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="DueSeller Logo"
                  className="h-10 w-10 rounded-xl shadow-lg shadow-[#00CED1]/20 transition-all duration-500 ease-in-out group-hover:rotate-360 group-hover:scale-110 group-hover:shadow-[#00CED1]/50 group-hover:bg-[#00CED1] group-hover:p-1"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Due<span className="text-[#00CED1]">Seller</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block w-full border-t border-white/10 pt-3">
            <div className="flex justify-center items-center space-x-8">
              {links.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div
                      className="group"
                      onMouseEnter={() => setCollectionDropdownOpen(true)}
                      onMouseLeave={() => setCollectionDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center pb-2 text-sm font-medium transition-colors relative ${
                          isActive(link.path)
                            ? "text-white"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {link.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1 h-3 w-3 opacity-70"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>

                        {isActive(link.path) && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00CED1]"></div>
                        )}
                      </button>

                      {collectionDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-[#002855] rounded-xl shadow-xl border border-[#00CED1]/20 py-2 z-50">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-5 py-3 text-sm text-gray-300 hover:bg-[#004080] hover:text-[#00CED1] transition-colors font-medium"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex item-center pb-2 text-sm font-medium transition-colors relative ${
                        isActive(link.path)
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isActive(link.path) && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00CED1]"></div>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#002855] border-t border-[#00CED1]/20">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {links.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setCollectionDropdownOpen(!collectionDropdownOpen)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-[#004080] hover:text-white transition-colors"
                    >
                      {link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          collectionDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {collectionDropdownOpen && (
                      <div className="pl-4 space-y-1 border-l-2 border-[#00CED1]/20 ml-4 my-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-5 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-[#00CED1] hover:bg-white/5"
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
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive(link.path)
                        ? "bg-[#00CED1]/10 text-[#00CED1] border border-[#00CED1]/20"
                        : "text-gray-300 hover:bg-[#004080] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
