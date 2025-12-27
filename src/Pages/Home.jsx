import React, { useState } from "react";
import { Link } from "react-router-dom";

import bgVideo from "../assets/Home/Beta Fish.mp4";
import xelophane from "../assets/Home/xelophane.webp";
import snowdragon from "../assets/Home/snowdragon.webp";
import mahachai from "../assets/Home/mahachai.webp";
import samurai from "../assets/Home/samurai.webp";
import slide1 from "../assets/Home/slide1.webp";
import slide2 from "../assets/Home/slide2.webp";
import slide3 from "../assets/Home/slide3.webp";



function CategoryCard({ emoji, title, show, toggle, base, extra }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-left">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">
          {emoji} {title}
        </h3>
        <button
          onClick={toggle}
          className="text-sm text-teal-600 hover:underline "
        >
          {show ? "Show Less" : "Show More"}
        </button>
      </div>

      <ul className="text-sm text-gray-600 space-y-1">
        {base.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
        {show && extra.map((item, i) => <li key={i}>• {item}</li>)}
      </ul>
    </div>
  );
}

function StockCard({ img, name, category, price }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img src={img} alt={name} className="h-64 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-sm font-medium">{price}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [showChanna, setShowChanna] = useState(false);
  const [showBetta, setShowBetta] = useState(false);
  const [showFlowerhorn, setShowFlowerhorn] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="w-full text-[#0b2b4c]">
      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white py-37 lg:pb-40">
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
            Explore Categories </h2> 
            <p className="text-gray-600 text-md mb-8 leading-relaxed"> 
              Find the perfect inhabitants for your tank, from hardy freshwater starters to stunning exotic showpieces. </p> 
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"> 
                {/* CHANNA */} 
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col"> 
                  <div className="text-4xl mb-3">🐟</div>
                   <h3 className="mt-4 font-semibold">Channa</h3>
                    <ul className="text-sm text-gray-600 mt-3 space-y-1">
                       <li>• Freshwater predator species</li> 
                       <li>• Extremely hardy and adaptable</li>
                        <li>• Requires spacious tank</li> 
                        {showChanna && ( <> <li>• Can breathe atmospheric oxygen</li> 
                        <li>• Intelligent and recognizes owner</li> 
                        <li>• Best kept solo or expert setups</li> 
                        <li>• Lifespan: 5–7 years</li> </> )}
                         </ul> <button onClick={() => setShowChanna(!showChanna)} className="mt-3 text-sm text-cyan-600 justify-center text-center" > {showChanna ? "See less" : "See more"} 
                          </button> </div> {/* BETTA */} 
                          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col"> 
                            <div className="text-4xl mb-3">🐠</div> <h3 className="mt-4 font-semibold">Betta</h3>
                             <ul className="text-sm text-gray-600 mt-3 space-y-1"> 
                              <li>• Freshwater labyrinth fish</li> <li>• Known for vibrant colors</li>
                               <li>• Can live in smaller tanks</li> {showBetta && ( <> <li>• Requires warm water (24–30°C)</li>
                                <li>• Males should not be kept together</li> <li>• Bubble nest builders</li> <li>• Lifespan: 4–5 years</li> 
                                </> )} </ul> <button onClick={() => setShowBetta(!showBetta)} className="mt-3 text-sm text-cyan-600 text-center" > {showBetta ? "See less" : "See more"} </button> </div> 
                                {/* FLOWERHORN */} <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
                                   <div className="text-4xl mb-3">🦈</div> <h3 className="mt-4 font-semibold">Flower Horn</h3>
                                    <ul className="text-sm text-gray-600 mt-3 space-y-1"> <li>• Hybrid ornamental cichlid</li>
                                     <li>• Famous for head hump (kok)</li> <li>• Highly interactive fish</li>
                                      {showFlowerhorn && ( <> <li>• Requires strong filtration</li>
                                       <li>• Aggressive toward tankmates</li> <li>• Color improves with quality diet</li>
                                        <li>• Lifespan: 7–8 years</li> </> )} </ul> <button onClick={() => setShowFlowerhorn(!showFlowerhorn)} className="mt-3 text-sm text-cyan-600 text-center" > {showFlowerhorn ? "See less" : "See more"} </button>
       </div> </div> </div> </section>

      {/* ================= STOCK ================= */}

      <section className="py-20 bg-white" id="in-stock">
        
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-2xl font-bold text-[#003366] mb-8">
            
            In Stock
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-15">
            
            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              
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
                
                <h3 className="font-semibold text-[#003366]">Xelophane</h3>{" "}
                <p className="text-xs text-gray-400 mb-6"> Betta </p>{" "}
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
                
                <h3 className="font-semibold text-[#003366]">
                  
                  Snow Dragon
                </h3>
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
                
                <h3 className="font-semibold text-[#003366]">Mahachai</h3>{" "}
                <p className="text-xs text-gray-400 mb-6"> Betta </p>{" "}
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

      {/* ================= CARE / CATEGORY SLIDER ================= */}
      <section className="bg-[#F4FBFF] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl text-[#003366] font-bold text-center mb-10">
            Fish Care Tips
          </h2>

          <div className="relative overflow-hidden rounded-2xl bg-white py-6">
            {/* SLIDES */}
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {/* BETTA */}
              <div className="min-w-full p-8 grid md:grid-cols-2 gap-6 items-center">
                <img
                  src={slide1}
                  alt="Betta"
                  className="h-64 w-full object-cover rounded-xl"
                />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#003366]">
                    Betta Fish Care
                  </h3>

                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                    <li>
                      Ideal temperature: <b>24–30°C</b>
                    </li>
                    <li>
                      Tank size: minimum <b>5 gallons</b>
                    </li>
                    <li>
                      Males must be kept <b>alone</b>
                    </li>
                    <li>Low water flow preferred</li>
                    <li>Feed high-protein pellets & frozen food</li>
                    <li>Weekly water changes (30–40%)</li>
                  </ul>

                  <Link
                    to="/care-guides#betta"
                    className="inline-block mt-4 text-sm text-cyan-600 font-medium"
                  >
                    View More →
                  </Link>
                </div>
              </div>

              {/* CHANNA */}
              <div className="min-w-full p-8 grid md:grid-cols-2 gap-6 items-center">
                <img
                  src={slide2}
                  alt="Channa"
                  className="h-64 w-full object-cover rounded-xl"
                />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#003366]">
                    Channa Fish Care
                  </h3>

                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                    <li>
                      Tank size: <b>large & spacious</b>
                    </li>
                    <li>
                      Highly territorial – keep <b>solo</b>
                    </li>
                    <li>Can breathe atmospheric oxygen</li>
                    <li>Requires tight tank lid (escape risk)</li>
                    <li>Prefers live or frozen foods</li>
                    <li>Strong filtration recommended</li>
                  </ul>

                  <Link
                    to="/care-guides#channa"
                    className="inline-block mt-4 text-sm text-cyan-600 font-medium"
                  >
                    View More →
                  </Link>
                </div>
              </div>

              {/* FLOWERHORN */}
              <div className="min-w-full p-8 grid md:grid-cols-2 gap-6 items-center">
                <img
                  src={slide3}
                  alt="Flowerhorn"
                  className="h-64 w-full object-cover rounded-xl"
                />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#003366]">
                    Flowerhorn Fish Care
                  </h3>

                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                    <li>
                      Tank size: <b>75 gallons+</b>
                    </li>
                    <li>
                      Aggressive – keep <b>alone</b>
                    </li>
                    <li>Strong filtration is essential</li>
                    <li>High-protein pellets improve color & kok</li>
                    <li>Stable water parameters required</li>
                    <li>Highly interactive & intelligent</li>
                  </ul>

                  <Link
                    to="/care-guides#flowerHorn"
                    className="inline-block mt-4 text-sm text-cyan-600 font-medium"
                  >
                    View More →
                  </Link>
                </div>
              </div>
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
