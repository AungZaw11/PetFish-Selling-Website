import React from "react";
import { motion } from "framer-motion";

export function FilterBar({ activeCategory, onCategoryChange }) {
  const categories = [
    { id: "all", label: "All" },
    { id: "belta", label: "Belta" },
    { id: "channa", label: "Channa" },
    { id: "wild", label: "Wild" },
    { id: "flower-horn", label: "Flower Horn" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors focus:outline-none"
          aria-pressed={activeCategory === category.id}
        >
          {/* Animated background for active filter */}
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-[#008080] rounded-full shadow-md"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}

          {/* Text on top of background */}
          <span
            className={`relative z-10 ${
              activeCategory === category.id
                ? "text-white"
                : "text-gray-600 hover:text-[#001F3F]"
            }`}
          >
            {category.label}
          </span>
        </button>
      ))}
    </div>
  );
}
