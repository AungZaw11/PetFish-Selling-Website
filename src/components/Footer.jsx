import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCreditCard,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#003366] text-gray-300 pt-12 pb-8 border-t border-[#00CED1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Dve <span className="text-[#00CED1]">Seller</span>
            </h3>
            <p className="text-md text-gray-400 mb-4">
              Premium aquarium fish, expert advice, and sustainable breeding for
              hobbyists worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#">
                <FaFacebook size={20} />
              </a>
              <a href="#">
                <FaInstagram size={20} />
              </a>
              <a href="#">
                <FaTwitter size={20} />
              </a>
              <a href="#">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/fish">Shop Fish</Link>
              </li>
              <li>
                <Link to="/care-guides">Care Guides</Link>
              </li>
              <li>
                <Link to="/shop-info">Shop Info</Link>
              </li>
              <li>
                <Link to="/legacy">Our Legacy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 text-[#00CED1]" /> 14 St, 65 x
                66 Street,
                <br />
                Nan Shae, Mandalay, Myanmar
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-[#00CED1]" /> +95 9 123 456 789
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[#00CED1]" />{" "}
                contact@dveseller.com
              </li>
            </ul>
          </div>

          {/* Payment Preview */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">We Accept</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-white/10 rounded text-sm">
                WavePay
              </span>
              <span className="px-2 py-1 bg-white/10 rounded text-sm">
                KBZ Pay
              </span>
              <span className="px-2 py-1 bg-white/10 rounded text-sm">COD</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <FaCreditCard className="mr-1" /> Secure payments
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Due Seller. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
