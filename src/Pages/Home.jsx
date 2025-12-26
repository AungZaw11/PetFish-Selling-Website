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
  const [showChanna, setShowChanna] = useState(false);
  const [showBetta, setShowBetta] = useState(false);
  const [showFlowerhorn, setShowFlowerhorn] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="w-full text-[#0b2b4c]">
      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white py-24 lg:pb-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
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

          <p className="text-gray-600 mb-8">
            Find the perfect inhabitants for your tank.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CHANNA */}
            <CategoryCard
              emoji="🐟"
              title="Channa"
              show={showChanna}
              toggle={() => setShowChanna(!showChanna)}
              base={[
                "Freshwater predator species",
                "Extremely hardy and adaptable",
                "Requires spacious tank",
              ]}
              extra={[
                "Can breathe atmospheric oxygen",
                "Intelligent and recognizes owner",
                "Best kept solo",
                "Lifespan: 5–7 years",
              ]}
            />

            {/* BETTA */}
            <CategoryCard
              emoji="🐠"
              title="Betta"
              show={showBetta}
              toggle={() => setShowBetta(!showBetta)}
              base={[
                "Freshwater labyrinth fish",
                "Vibrant colors",
                "Can live in smaller tanks",
              ]}
              extra={[
                "Warm water 24–30°C",
                "Males should not be kept together",
                "Bubble nest builders",
                "Lifespan: 4–5 years",
              ]}
            />

            {/* FLOWERHORN */}
            <CategoryCard
              emoji="🦈"
              title="Flowerhorn"
              show={showFlowerhorn}
              toggle={() => setShowFlowerhorn(!showFlowerhorn)}
              base={[
                "Hybrid ornamental cichlid",
                "Famous head hump (kok)",
                "Highly interactive",
              ]}
              extra={[
                "Strong filtration required",
                "Aggressive fish",
                "Color improves with diet",
                "Lifespan: 7–8 years",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= STOCK ================= */}
      <section className="py-20 bg-white" id="in-stock">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-8">In Stock</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <StockCard img={xelophane} name="Xelophane" />
            <StockCard img={snowdragon} name="Snow Dragon" />
            <StockCard img={mahachai} name="Mahachai" />
            <StockCard img={samurai} name="Samurai" />
=======
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
              <div className="relative h-60">
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

      {/* ================= SLIDER ================= */}
      <section className="bg-[#F4FBFF] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Fish Care Tips
          </h2>

          <div className="relative overflow-hidden rounded-2xl bg-white">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {[slide1, snowdragon, slide3].map((img, i) => (
                <div key={i} className="min-w-full p-8 grid md:grid-cols-2 gap-6">
                  <img
                    src={img}
                    className="w-full h-64 object-cover rounded-xl"
                    alt=""
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                setSlideIndex(slideIndex === 0 ? 2 : slideIndex - 1)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow"
            >
              ←
            </button>

            <button
              onClick={() =>
                setSlideIndex(slideIndex === 2 ? 0 : slideIndex + 1)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function CategoryCard({ emoji, title, base, extra, show, toggle }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="font-semibold">{title}</h3>

      <ul className="text-sm text-gray-600 mt-3 space-y-1">
        {base.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
        {show &&
          extra.map((i, idx) => <li key={idx}>• {i}</li>)}
      </ul>

      <button
        onClick={toggle}
        className="mt-3 text-sm text-cyan-600"
      >
        {show ? "See less" : "See more"}
      </button>
    </div>
  );
}

function StockCard({ img, name }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <img src={img} className="h-60 w-full object-cover" alt={name} />
      <div className="p-5 flex justify-between items-center">
        <h3 className="font-semibold">{name}</h3>
        <Link
          to="/fish?category=betta"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6F6FF]"
        >
          →
        </Link>
      </div>
    </div>
  );
}
