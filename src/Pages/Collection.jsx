import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FishCard } from "../components/FishCard";
import { FilterBar } from "../components/FilterBar";
import { fishData } from "../data/fishData";

export function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  // Sync activeCategory with URL on load or back/forward navigation
  useEffect(() => {
    const category = searchParams.get("category") || "all";
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when filter changes
  }, [searchParams]);

  // Handle category selection from FilterBar
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchParams(category === "all" ? {} : { category });
  };

  // Filter fish by category only (no search)
  const filteredFish = useMemo(() => {
    return fishData.filter(
      (fish) => activeCategory === "all" || fish.category === activeCategory
    );
  }, [activeCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredFish.length / ITEMS_PER_PAGE);
  const paginatedFish = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFish.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredFish, currentPage]);

  // Reset to "All" and clear filters
  const handleClearFilters = () => {
    setActiveCategory("all");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#001F3F] mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our curated selection of healthy, quarantined fish ready for
            your aquarium.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-10">
          <FilterBar
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Fish Grid */}
        {filteredFish.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <AnimatePresence>
              {paginatedFish.map((fish) => (
                <motion.div
                  key={fish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <FishCard fish={fish} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No fish found in this category.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-4 text-[#008080] font-medium hover:underline"
            >
              View all fish
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
