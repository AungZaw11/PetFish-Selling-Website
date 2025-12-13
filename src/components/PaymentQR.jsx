import React from "react";

export function PaymentQR({ provider, color, imageSrc, onSelect, isActive }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex flex-col items-center gap-3 px-4 py-5 border rounded-xl bg-white transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008080] ${
        isActive ? "border-[#008080]" : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="w-28 h-28 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors overflow-hidden border border-gray-100">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${provider} QR code`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color || "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-14 h-14"
          >
            <rect width="4" height="4" x="3" y="3" rx="1" />
            <rect width="4" height="4" x="17" y="3" rx="1" />
            <rect width="4" height="4" x="3" y="17" rx="1" />
            <path d="M7 7h10" />
            <path d="M7 11h10" />
            <path d="M7 15h6" />
            <path d="M17 15h2" />
            <path d="M11 15h2" />
          </svg>
        )}
      </div>
      <div className="text-center leading-tight">
        <div className="text-sm font-semibold text-[#001F3F]">{provider}</div>
        <div className="text-xs text-gray-500">Scan to pay</div>
      </div>
    </button>
  );
}
