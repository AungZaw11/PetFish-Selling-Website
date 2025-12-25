import React, { useState } from "react";
import { Link } from "react-router-dom";

import bgVideo from "../assets/Home/Beta Fish.mp4";
import xelophane from "../assets/Home/xelophane.webp";
import snowdragon from "../assets/Home/snowdragon.webp";
import mahachai from "../assets/Home/mahachai.webp";
import samurai from "../assets/Home/samurai.webp";
import slide1 from "../assets/Home/slide1.webp";
import slide3 from "../assets/Home/slide3.webp";

export default function HomePage() {
  /* ================= STATES ================= */
  const [showChanna, setShowChanna] = useState(false);
  const [showBetta, setShowBetta] = useState(false);
  const [showFlowerhorn, setShowFlowerhorn] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="w-full text-[#0b2b4c]">
      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white min-h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Bring the Ocean <br />
            <span className="text-cyan-400">To Your Home</span>
          </h1>

          <p className="mt-4 max-w-xl text-gray-300">
            Discover our premium collection. Ethically sourced,
            health-guaranteed, and delivered safely to your door.
          </p>

          <div className="mt-6 flex gap-4">
            <Link to="/payment" className="bg-orange-500 px-6 py-2 rounded-lg">
              Shop Now →
            </Link>
            <a href="#in-stock" className="bg-white/10 px-6 py-2 rounded-lg">
              Learn More
            </a>
          </div>
        </div>
      </section>
      {/* ================= EXPLORE ================= */}
      <section className="bg-[#E9FBFF] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl text-[#003366] font-bold mb-3">
            Explore Categories
          </h2>
          <p className="text-gray-600 text-md mb-8 leading-relaxed">
            Find the perfect inhabitants for your tank, from hardy freshwater
            starters to stunning exotic showpieces.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CHANNA */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="text-4xl mb-3">🐟</div>

              <h3 className="mt-4 font-semibold">Channa</h3>
              <ul className="text-sm text-gray-600 mt-3 space-y-1">
                <li>• Freshwater predator species</li>
                <li>• Extremely hardy and adaptable</li>
                <li>• Requires spacious tank</li>
                {showChanna && (
                  <>
                    <li>• Can breathe atmospheric oxygen</li>
                    <li>• Intelligent and recognizes owner</li>
                    <li>• Best kept solo or expert setups</li>
                    <li>• Lifespan: 5–7 years</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => setShowChanna(!showChanna)}
                className="mt-3 text-sm text-cyan-600 justify-center text-center"
              >
                {showChanna ? "See less" : "See more"}
              </button>
            </div>
            {/* BETTA */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="text-4xl mb-3">🐠</div>

              <h3 className="mt-4 font-semibold">Betta</h3>
              <ul className="text-sm text-gray-600 mt-3 space-y-1">
                <li>• Freshwater labyrinth fish</li>
                <li>• Known for vibrant colors</li>
                <li>• Can live in smaller tanks</li>
                {showBetta && (
                  <>
                    <li>• Requires warm water (24–30°C)</li>
                    <li>• Males should not be kept together</li>
                    <li>• Bubble nest builders</li>
                    <li>• Lifespan: 4–5 years</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => setShowBetta(!showBetta)}
                className="mt-3 text-sm text-cyan-600 text-center"
              >
                {showBetta ? "See less" : "See more"}
              </button>
            </div>
            {/* FLOWERHORN */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="text-4xl mb-3">🦈</div>

              <h3 className="mt-4 font-semibold">Flower Horn</h3>
              <ul className="text-sm text-gray-600 mt-3 space-y-1">
                <li>• Hybrid ornamental cichlid</li>
                <li>• Famous for head hump (kok)</li>
                <li>• Highly interactive fish</li>
                {showFlowerhorn && (
                  <>
                    <li>• Requires strong filtration</li>
                    <li>• Aggressive toward tankmates</li>
                    <li>• Color improves with quality diet</li>
                    <li>• Lifespan: 7–8 years</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => setShowFlowerhorn(!showFlowerhorn)}
                className="mt-3 text-sm text-cyan-600 text-center"
              >
                {showFlowerhorn ? "See less" : "See more"}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ================= STOCK CARDS ================= */}
      <section className="py-20 bg-white" id="in-stock">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#003366] mb-8">In Stock</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-15">
            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-sm  overflow-hidden">
              <div className="relative h-60">
                <img
                  src={xelophane}
                  alt="Xelophane"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-[#E6F6FF] text-[#00A6FB] text-xs px-3 py-1 rounded-full">
                  HMPK
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#003366]">Xelophane</h3>
                <p className="text-xs text-gray-400 mb-6"> Betta </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semi-bold text-[#003366]">
                    Male – 15000 mmk <br /> Female – 10000 mmk{" "}
                  </span>
                  <Link
                    to="/fish?category=betta"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6F6FF] text-[#00A6FB]"
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative h-60">
                <img
                  src={snowdragon}
                  alt="Snow Dragon"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-[#E6F6FF] text-[#00A6FB] text-xs px-3 py-1 rounded-full">
                  HMPK
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#003366]">Snow Dragon</h3>
                <p className="text-xs text-gray-400 mb-6"> Betta </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semi-bold text-[#003366]">
                    Male – 15000 mmk <br /> Female – 10000 mmk{" "}
                  </span>
                  <Link
                    to="/fish?category=betta"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6F6FF] text-[#00A6FB]"
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative h-60">
                <img
                  src={mahachai}
                  alt="Mahachai"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-[#E6F6FF] text-[#00A6FB] text-xs px-3 py-1 rounded-full">
                  Wild
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#003366]">Mahachai</h3>
                <p className="text-xs text-gray-400 mb-6"> Betta </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semi-bold text-[#003366]">
                    Fry – 8000 mmk <br /> Junior – 10000 mmk <br /> Super Junior
                    – 15000 mmk <br /> Adult male – 25000 mmk <br /> Adult
                    female – 15000 mmk
                  </span>
                  <Link
                    to="/fish?category=betta"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6F6FF] text-[#00A6FB]"
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>
            {/* CARD 4 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative h-56">
                <img
                  src={samurai}
                  alt="Samurai"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-[#E6F6FF] text-[#00A6FB] text-xs px-3 py-1 rounded-full">
                  HMPK
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#003366]"> Samurai </h3>
                <p className="text-xs text-gray-400 mb-6"> Betta </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semi-bold text-[#003366]">
                    Junior-10000 mmk <br /> Adult male-18000 mmk <br /> Adult
                    female-15000 mmk <br />
                  </span>
                  <Link
                    to="/fish?category=betta"
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
      {/* ================= CARE GUIDE SLIDER ================= */}
      <section className="bg-[#F4FBFF] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Fish Care Tips
          </h2>

          <div className="relative overflow-hidden rounded-2xl bg-white">
            {/* SLIDES */}
            <div
              className="flex w-full transition-transform duration-500"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {[slide1, snowdragon, slide3].map((img, i) => (
                <div
                  key={i}
                  className="min-w-full p-8 grid md:grid-cols-2 gap-6"
                >
                  <img
                    src={img}
                    alt="Fish care"
                    className="h-64 w-full object-cover rounded-xl"
                  />

                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {i === 0 && "Betta Fish Care Tips"}
                      {i === 1 && "Snow Dragon Care Tips"}
                      {i === 2 && "Mahachai Fish Care Tips"}
                    </h3>

                    <p className="text-gray-600 text-sm leading-6">
                      {i === 0 && (
                        <>
                          Use gentle filtration <br />
                          Keep water temperature 24–28°C <br />
                          Remove uneaten food promptly <br />
                          Avoid strong water currents <br />
                        </>
                      )}

                      {i === 1 && (
                        <>
                          Maintain strong filtration <br />
                          Perform weekly water changes <br />
                          Keep ammonia & nitrite at 0 ppm <br />
                          Feed high-protein food <br />
                        </>
                      )}

                      {i === 2 && (
                        <>
                          Use large tank with good aeration <br />
                          Avoid overcrowding <br />
                          Feed sinking pellets <br />
                          Clean tank regularly <br />
                        </>
                      )}
                    </p>

                    <Link
                      to="/care-guides"
                      className="text-cyan-600 text-sm mt-4 inline-block"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CONTROLS */}
            <button
              onClick={() =>
                setSlideIndex(slideIndex === 0 ? 2 : slideIndex - 1)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow"
            >
              ←
            </button>

            <button
              onClick={() =>
                setSlideIndex(slideIndex === 2 ? 0 : slideIndex + 1)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
