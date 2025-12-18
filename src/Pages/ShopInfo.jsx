import Phone from "../assets/Shop Info/phone.svg";
import Mail from "../assets/Shop Info/mail.svg";
import Facebook from "../assets/Shop Info/fb.svg";
import Telegram from "../assets/Shop Info/telegram.svg";
import Tiktok from "../assets/Shop Info/tiktok.svg";
import Message from "../assets/Shop Info/chat.svg";
import Policy from "../assets/Shop Info/policy.svg";
import Delivery from "../assets/Shop Info/deli.svg";
import Order from "../assets/Shop Info/order.svg";
import Payment from "../assets/Shop Info/payment.svg";

import FishIcon from "../assets/Shop Info/fish.svg";
import WaterDropIcon from "../assets/Shop Info/setup.svg";
import TickIcon from "../assets/Shop Info/tick.svg";
import BoxIcon from "../assets/Shop Info/box.svg";
import TruckIcon from "../assets/Shop Info/truck.svg";
import { Link } from "react-router";
import React, { useState } from "react";

function ShopInfo() {
  const [showMore, setShowMore] = useState(false);
  // Fish Cards Array
  const fishCards = [
    {
      icon: "🐠",
      title: "Betta Fish",
      desc: "Premium quality Siamese fighting fish",
    },
    {
      icon: "🐟",
      title: "Channa Fish",
      desc: "Tetras, Guppies, Goldfish & more",
    },
    {
      icon: "🦈",
      title: "Wild Fish",
      desc: "Rare and unique specimens",
    },
  ];

  // Contact Info Array
  const contacts = [
    { label: "Phone",
      value: "+95 9 257897396", 
      icon: Phone,
      alt: "phone icon" 
    },
    { label: "Email", 
      value: "contact@dveseller.com", 
      icon: Mail,
      alt: "mail icon"
    },
    { label: "Facebook", 
      value: "Due Seller",
      icon: Facebook,
      alt: "Facebook icon" 
    },
    { label: "TikTok", 
      value: "@due.seller", 
      icon: Tiktok,
      alt: "Instagram icon"
    },
    { label: "Telegram", 
      value: "@Awn6932", 
      icon: Telegram,
      alt: "Message icon"
    },
    { label: "Messenger", 
      value: "@DveSeller", 
      icon: Message,
      alt: "Message icon"
    },
  ];

  // Service Offered Array
  const services = [
    {
      title: "Fish Selling",
      label: "Betta, Freshwater, and Exotic species",
      image: FishIcon,
      alt: "Fish Icon",
    },
    {
      title: "Aquarium Setup Advice",
      label: "Expert guidance for your tank",
      image: WaterDropIcon,
      alt: "Set up Icon",
    },
    {
      title: "Water Quality Checks",
      label: "Free testing and consultation",
      image: TickIcon,
      alt: "Tick Icon",
    },
    {
      title: "Fish Care Recommendations",
      label: "Personalized care plans",
      image: BoxIcon,
      alt: "Box Icon",
    },
    {
      title: "Delivery Service",
      label: "Safe delivery to your door",
      image: TruckIcon,
      alt: "Truck Icon",
    },
  ];

  
  return (
    <>
      <div className="bg-[#DFF8FF] pb-15">
        {/* Hero Section */}
        <section className="bg-[#003366] text-white p-4 py-16 mb-15 text-center">
          <h1 className="text-4xl font-bold tracking-wide">Shop Information</h1>
          <p className="mt-2 opacity-80 text-sm py-4">
            Everything you need to know about Due Seller
          </p>
        </section>

        {/* About Due Seller */}
        <section className="w-full flex justify-center px-5">
          <div className="max-w-5xl w-full bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-7 flex items-center gap-2">
              <span><img src={FishIcon} alt="" /></span> About Due Seller
            </h2>

            <p className="text-gray-600 text-md mb-8 leading-relaxed px-5">
              Welcome to{" "}
              <span className="font-semibold text-[#003366]">Due Seller</span>,
              your trusted source for premium aquarium fish in Mandalay, Myanmar.
              We specialize in providing healthy, vibrant fish for hobbyists and
              collectors alike.
            </p>

            {/* Three Cards using map */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mb-8 px-5 ">
              {fishCards.map((fish, index) => (
                <div
                  key={index}
                  className="p-6 py-10 bg-[#E5FBFF] rounded-lg text-center shadow-sm cursor-pointer"
                >
                  <span className="text-2xl">{fish.icon}</span>
                  <h3 className="font-bold text-[#003366] text-md py-3">
                    {fish.title}
                  </h3>
                  <p className="text-gray-500 text-sm px-5">{fish.desc}</p>
                </div>
              ))}
            </div>

            {/* Gradient Banner */}
            <div className="w-full bg-gradient-to-r from-[#003366] to-[#00D4FF] text-white font-bold text-lg text-center px-3 py-6 rounded-lg">
              "Healthy fish, trusted seller, safe delivery."
            </div>
          </div>
        </section>
        
      {/* Operating Hours & Location */}
        <section className="px-5">
          <div className="max-w-5xl w-full mx-auto flex rounded-2xl py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Operating Hours */}
            <div className="w-full bg-white p-8 px-10 rounded-2xl shadow border border-[#d9f4ff]">
              <h3 className="text-xl font-bold mb-4 text-[#003355] flex items-center gap-2">

                {/* Clock SVG */}
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="w-5 h-5 text-[#0077B6]">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                Operating Hours
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between items-center py-3">
                  <span>Every Sunday</span>
                  <span className="text-[#0077B6] font-semibold">9 AM – 6 PM</span>
                </li>
                <li className="flex justify-between items-center py-3">
                  <span>Government holidays and special days</span>
                  <span className="text-[#0077B6] font-semibold">10 AM – 4 PM</span>
                </li>
                <li className="flex justify-between items-center py-3">
                  <span>Weekdays</span>
                  <span className="text-red-500 font-semibold">Closed</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-12"><span className="text-[#003355] font-bold" >***</span> Online orders are available on weekdays.</p>
            </div>

            {/* Location */}
            <div className="w-full bg-white p-8 px-10 rounded-2xl shadow border border-[#d9f4ff]">
              <h3 className="text-xl font-bold mb-4 text-[#003355] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="w-5 h-5 text-[#00A6FB]">
                  <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Location
              </h3>

              <p className="text-gray-700 font-bold leading-relaxed">Shop Address</p>
              <p className="text-gray-700 leading-relaxed">
                14 St, 55 x 56 St, Nan Shae<br />
                Mandalay, Myanmar
              </p>

              <div className="mt-4">
                <Link to="https://maps.app.goo.gl/Bhkd63pMnWkQXmAY6?g_st=ic" className="px-3 py-1 bg-blue-100 rounded-full text-sm text-[#003355] border border-[#bfe8ff] inline-flex items-center gap-1">
                  Map
                  <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="w-4 h-4 text-[#00A6FB]">
                    <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <p className="w-full text-gray-700 font-bold leading-relaxed">Delivery Coverage</p>
                {["Yangon", "Mandalay", "Naypyidaw", "Bago", "Mawlamyine"].map((city) => (
                  <span key={city} className="px-3 py-1 bg-blue-100 rounded-full text-sm text-[#003355] border border-[#bfe8ff]">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section className="mb-10 px-5">
          <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-[#003366] mb-8">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {contacts.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#e0fbff] px-6 py-4 rounded-xl flex items-start gap-4"
                >
                  {item.icon && <img src={item.icon} alt="" />}
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-semibold text-[#003366]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Service Offered Section */}
        <section className="mb-10 px-5">
          <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-[#003366] mb-8">Services Offered</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#e0fbff] px-6 py-4 rounded-xl flex items-start gap-4"
                >
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-8 h-8"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-[#003366]">
                      {service.title}
                    </p>
                    <p className="text-sm text-gray-500">{service.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop Policies Section */}
        <section className="mb-10 px-5">
          <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-[#003366] mb-7 flex items-center gap-2">
              <span><img src={Policy} alt="" /></span>Shop Policies
            </h2>
            <div className="grid grid-cols-1 px-4 md:grid-cols-3 gap-5">
              <div className="border-l-4 border-[#00CED1] border-solid rounded-sm px-3 py-1">
                <h3 className="text-md font-bold text-[#003366] mb-4 flex items-center gap-2">
                  <span><img src={Delivery} alt="" /></span>Delivery Policy
                </h3>
                <ul className="list-disc list-inside space-y-3 text-sm text-gray-500 ">
                  <li>Delivery: Inside & outside the city</li>
                  <li>Shipping & packaging feels included</li>
                  <li>Ensures the fish arrives safely</li>
                  <li>Delivery is on Sunday</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#FF7F50] border-solid rounded-sm px-3 py-1">
                <h3 className="text-md font-bold text-[#003366] mb-4 flex items-center gap-2">
                  <span><img src={Order} alt="" /></span>Order Policy
                </h3>
                <ul className="list-disc list-inside space-y-3 text-sm text-gray-500 ">
                  <li>Via TikTok, Telegram, or Facebook</li>
                  <li>Specify the type of fish you want</li>
                  <li>Place your order anytime Mon - Sat</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#00CED1] border-solid rounded-sm px-3 py-1">
                <h3 className="text-md font-bold text-[#003366] mb-4 flex items-center gap-2">
                  <span><img src={Payment} alt="" /></span>Payment Policy
                </h3>
                <ul className="list-disc list-inside space-y-3 text-sm text-gray-500 ">
                  <li>Pay with KPay, Wave Pay, or COD.</li>
                  <li>COD is available within Mandalay</li>
                  <li>Prepaid outside the city</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="mb-10 px-5">
          <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-[#003366] mb-5 flex items-center gap-2">
              About Owner
            </h2>
            <h3 className="text-md font-bold text-[#003366] mb-4">Aung Win Naing (Founder)</h3>
            <p className="text-gray-600 text-md text-justify mb-4 leading-relaxed">
              {showMore ? (
                <>
                  <q>ကျွန်တော်ကတော့ အောင်ဝင်းနိုင် ဖြစ်ပြီး Due Seller ရဲ့ Founder ဖြစ်ပါတယ်။ ဒီဆိုင်လေးကို 2023 ခုနှစ်မှာစတင်ဖန်တီးခဲ့ပြီး၊ အရည်အသွေးမြင့်ငါးများကို စျေးသက်သာစွာဝယ်ယူနိုင်အောင် ရောင်းချပေးနေပါတယ်။ ဒီဆိုင်လေးကိုဖွင့်ရတဲ့ရည်ရွယ်ချက်ကတော့ မြန်မာပြည်မှာတွေ့ရတဲ့ ရောင်းလိုက်ရင်ပြီးရော၊ ငါးတွေသေသေ မသေသေ ဂရုမစိုက်တဲ့ ရောင်းချသူတွေရယ်/ ဝယ်သူက ရောင်းတဲ့သူကိုကြောက်နေရတာမျိုးတွေကို ဖြေရှင်းပေးရန်ဖြစ်ပါတယ်။ အများကြီးရောင်းရပြီးရော/ မြတ်ရင်ပြီးရော ရောင်းတဲ့သူတွေကြောင့် တကယ်ဝါသနာပါပါနဲ့ မွေးမယ့်သူတွေက မမွေးတတ်မွေးတတ်နဲ့ ငါးလေးတွေကိုမွေးလိုက်၊ သေလိုက်နဲ့ စိတ်ညစ်ပြီးလက်လျှော့သွားတဲ့သူတွေများကြပါတယ်။ ဒုတိယတစ်ချက်က ငါးစျေးမေးရင် ရောင်းတဲ့သူကိုကြောက်နေရတာမျိုးတို့၊ ရောင်းတဲ့သူက စိတ်မရှည်တာမျိုးတို့ မဖြစ်အောင် သေချာ customer care လုပ်ပြီးရောင်းချပေးသွားပါ့မယ်။ ထို့ကြောင့် ကျွန်တော့်ဆီ လာဝယ်သူများအနေဖြင့် အချိန်ပြည့်လာရောက်ပြီး မေးမြန်းနိုင်ခြင်း၊ ငါးများမသေအောင် ဘယ်လိုဂရုစိုက်ရမယ်ဆိုတာ လမ်းညွှန်ခြင်းတို့ကို အဓိကပေးဆောင်သွားမှာ ဖြစ်ပါတယ်။ စျေးနှုန်းမေးမြန်းရာမှာ စိုးရိမ်စရာမလိုအောင် ဂရုတစိုက်ရောင်းချပေးသွားပါမယ်။ Due Seller ရဲ့ ရည်ရွယ်ချက်မှာ ငါးချစ်သူများအတွက် ကျန်းမာပြီး အရည်အသွေးမြင့် ငါးများကို လွယ်ကူစွာ ဝယ်ယူနိုင်စေရန် ဖြစ်ပြီး၊ ငါးမွေးနည်းအကြံပေးမှုများကို အချိန်မရွေး လာရောက်မေးမြန်းနိုင်ပါတယ်ခင်ဗျာ။
                  </q>
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-[#003366] font-semibold hover:text-[#003366ad] ml-2">
                    ..See Less
                  </button>
                  
                </>
              ) : (
                <>
                  <q>
                  ကျွန်တော်ကတော့ အောင်ဝင်းနိုင် ဖြစ်ပြီး Due Seller ရဲ့ Founder ဖြစ်ပါတယ်။ ဒီဆိုင်လေးကို 2023 ခုနှစ်မှစတင်ဖန်တီးခဲ့ပြီး၊ အရည်အသွေးမြင့်ငါးများကို စျေးသက်သာစွာ ဝယ်ယူနိုင်အောင် ရောင်းချနေပါတယ်။ ဒီဆိုင်လေးကိုဖွင့်ရတဲ့ရည်ရွယ်ချက်ကတော့ မြန်မာပြည်မှာတွေ့ရတဲ့ ရောင်းလိုက်ရင်ပြီးရော၊ ငါးတွေသေသေ မသေသေ ဂရုမစိုက်တဲ့ ရောင်းချသူတွေရယ်/ ဝယ်သူက ရောင်းတဲ့သူကိုကြောက်နေရတာမျိုးတွေကို ဖြေရှင်းပေးရန်
                  
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-[#003366] font-semibold hover:text-[#003366ad] ml-2"
                  >
                    See More..
                  </button>
                  </q>
                </>
              )}
            </p>
            
            <Link to="https://t.me/Awn6932">
              <div className="w-full bg-gradient-to-r from-[#003366] to-[#00D4FF] text-white text-center font-bold text-md py-4 rounded-lg transition-all delay-150 duration-300 ease-in-out hover:from-[#002244] hover:to-[#00B8E6] cursor-pointer">
                Contact Me Via Telegram
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default ShopInfo