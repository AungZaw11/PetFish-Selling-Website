// src/components/FishCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FishCard({ fish }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={fish.image}
          alt={fish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.parentElement.innerHTML =
              '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">No Image</div>';
          }}
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full ${
              fish.category === "belta"
                ? "bg-blue-100 text-blue-800"
                : fish.category === "channa"
                ? "bg-red-100 text-red-800"
                : "bg-emerald-100 text-emerald-800"
            }`}
          >
            {fish.category.charAt(0).toUpperCase() + fish.category.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-[#001F3F] mb-1 group-hover:text-[#008080] transition-colors">
          {fish.name}
        </h3>
        <p className="text-sm text-gray-500 italic mb-3">{fish.species}</p>

        <div className="flex items-center justify-between mt-4">
          {/* Optional: Add fish detail page later */}
          {/* <Link
            to={`/fish/${fish.id}`}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#008080] group-hover:text-white transition-colors"
          >
            <ArrowRight size={16} />
          </Link> */}
        </div>
      </div>
    </motion.div>
  );
}
