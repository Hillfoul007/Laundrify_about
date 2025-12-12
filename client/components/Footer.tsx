import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="font-bold text-white text-lg">Laundrify</span>
                <p className="text-xs text-slate-400">Quick Clean & Convenient</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Premium Laundry & Dry Clean Service with free pickup and delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-pink-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-pink-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-pink-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-pink-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-pink-400" />
                <a
                  href="tel:+917011585587"
                  className="hover:text-pink-400 transition-colors"
                >
                  +91 7011585587
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-pink-400" />
                <span>24/7 Service Available</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-pink-400" />
                <span>Sector 43 & 69, Gurgaon</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-pink-400 transition-colors">Laundry</li>
              <li className="hover:text-pink-400 transition-colors">Dry Clean</li>
              <li className="hover:text-pink-400 transition-colors">
                Express Service
              </li>
              <li className="hover:text-pink-400 transition-colors">
                Free Pickup & Delivery
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} Laundrify. All rights reserved. Free Pickup &
              Delivery Available.
            </p>
            <div className="flex gap-6">
              <a
                href="https://facebook.com"
                className="text-slate-400 hover:text-pink-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                className="text-slate-400 hover:text-pink-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://whatsapp.com"
                className="text-slate-400 hover:text-pink-400 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
