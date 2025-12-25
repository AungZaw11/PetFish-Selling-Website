import React, { useState } from "react";
import { PaymentQR } from "../components/PaymentQR";
import KBZPay from "../assets/Payment/Due_Kpay.jpg";
import WavePay from "../assets/Payment/Due_Wave.jpg";

export function PaymentPage() {
  const [selectedProvider, setSelectedProvider] = useState("WavePay");
  const [submitted, setSubmitted] = useState(false);

  // Centralized provider list
  const providers = [
    {
      name: "WavePay",
      color: "#3B82F6", // blue-500
      image: WavePay,
    },
    {
      name: "KBZ Pay",
      color: "#1D4ED8", // blue-700
      image: KBZPay,
    },
    {
      name: "Cash on Delivery",
      color: "#F97316", // orange-500
      image: null, // No image available
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-[#003366]">Secure Payment</h1>
        </header>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.06)] border border-gray-100 p-8 space-y-8"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold text-gray-600">
                Payment Method
              </h2>
            </div>

            {/* Render providers dynamically */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {providers.map((p) => (
                <PaymentQR
                  key={p.name}
                  provider={p.name}
                  color={p.color}
                  imageSrc={p.image}
                  isActive={selectedProvider === p.name}
                  onSelect={() => setSelectedProvider(p.name)}
                />
              ))}
            </div>

            <p className="text-sm text-gray-500 text-center">
              Or pay with card
            </p>
          </div>

          {/* ✅ Telegram Button - Corrected */}
          <a
            href="https://t.me/dveseller"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#008080] text-white py-4 rounded-lg font-semibold text-base hover:bg-[#006666] transition-colors flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M22 2L11 13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Place Order via Telegram
          </a>

          {/* Optional confirmation message */}
          {submitted && (
            <p className="mt-4 text-center text-green-600 font-medium">
              Payment method selected: {selectedProvider}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
