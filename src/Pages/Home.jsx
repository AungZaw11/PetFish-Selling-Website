import React from "react";
import { Link } from "react-router-dom";

import FreshWaterIcon from "./assets/Home/FreshWater.svg";
import SaltWaterIcon from "./assets/Home/SaltWater.svg";
import ExoticIcon from "./assets/Home/Exotic.svg";

export default function HomePage() {
  return (
    <div className="w-full font-inter text-[#0b2b4c]">

      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Bring the Ocean <br />
            <span className="text-cyan-400">To Your Home</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300">
            Discover our premium collection of freshwater, saltwater, and exotic fish.
            Ethically sourced, health-guaranteed, and delivered safely to your door.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-sm">
              Shop Now →
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg text-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="bg-[#E9FBFF] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold">Explore Categories</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <img src={FreshWaterIcon} className="mx-auto w-10 h-10" />
              <h3 className="mt-4 font-semibold">Freshwater</h3>
              <p className="text-sm text-gray-600 mt-2">
                Vibrant, hardy fish perfect for beginners and planted tanks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <img src={SaltWaterIcon} className="mx-auto w-10 h-10" />
              <h3 className="mt-4 font-semibold">Saltwater</h3>
              <p className="text-sm text-gray-600 mt-2">
                Colorful marine species that bring the reef to your living room.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <img src={ExoticIcon} className="mx-auto w-10 h-10" />
              <h3 className="mt-4 font-semibold">Exotic</h3>
              <p className="text-sm text-gray-600 mt-2">
                Rare and unique specimens for the dedicated collector.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURED ARRIVALS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#003366]">
                Featured Arrivals
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Hand-picked healthy specimens ready for your tank.
              </p>
            </div>

            <Link
              to="/collection"
              className="text-sm text-[#00A6FB] font-medium"
            >
              View All Fish →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                Image here
              </div>
              <div className="p-5">
                <p className="text-xs text-[#00A6FB] font-semibold mb-1">
                  Freshwater
                </p>
                <h3 className="font-semibold text-[#003366]">
                  Fish Name
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Scientific name
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#003366]">
                    $ 00.00
                  </span>

                  <Link
                    to="/fish/1"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6F6FF] text-[#00A6FB]"
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                Image here
              </div>
              <div className="p-5">
                <p className="text-xs text-[#00A6FB] font-semibold mb-1">
                  Saltwater
                </p>
                <h3 className="font-semibold text-[#003366]">
                  Fish Name
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Scientific name
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#003366]">
                    $ 00.00
                  </span>

                  <Link
                    to="/fish/2"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6F6FF] text-[#00A6FB]"
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                Image here
              </div>
              <div className="p-5">
                <p className="text-xs text-[#00A6FB] font-semibold mb-1">
                  Exotic
                </p>
                <h3 className="font-semibold text-[#003366]">
                  Fish Name
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Scientific name
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#003366]">
                    $ 00.00
                  </span>

                  <Link
                    to="/fish/3"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6F6FF] text-[#00A6FB]"
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
