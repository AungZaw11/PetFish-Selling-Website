import { useState } from "react";
import { Link } from "react-router-dom";
import { fishList } from "../components/FishData";

export default function Collection() {
  // ================== FILTER LOGIC ==================
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFish =
    selectedCategory === "All"
      ? fishList
      : fishList.filter((fish) => fish.category === selectedCategory);

  // ================== UI ==================
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl text-[#003366] font-bold text-center pt-7 mb-3">
        Our Fish Collection
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Explore our premium fish varieties
      </p>

      {/* Category Buttons */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {["All", "Betta", "Channa", "Flower Horn"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                selectedCategory === cat
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Fish Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFish.map((fish) => (
          <div
            key={fish.slug}
            className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col"
          >
            {/* Image */}
            <img
              src={fish.image}
              alt={fish.name}
              className="h-73 w-full object-cover rounded-t-xl"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-1">
                {fish.name}
              </h3>

              <span className="inline-block w-fit text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4">
                {fish.category}
              </span>

              {/* Arrow Button */}
              <Link
                to={`/fish/${fish.slug}`}
                className="mt-auto self-end w-10 h-10 rounded-full bg-gray-100 hover:bg-teal-600 hover:text-white flex items-center justify-center transition"
              >
                →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
