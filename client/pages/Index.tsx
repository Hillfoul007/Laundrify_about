import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { useMeta } from "@/hooks/use-meta";
import HeroCarousel from "@/components/HeroCarousel";
import {
  Sparkles,
  Zap,
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";

export default function Home() {
  useMeta({
    title:
      "Laundrify - Express Laundry & Dry Cleaning Service in Gurgaon | Best Prices ₹59",
    description:
      "Professional laundry & dry cleaning delivered in 45 minutes. Laundry from ₹59/kg, dry cleaning from ₹100. Free pickup & delivery, 24/7 service in Sector 43 & 69, Gurgaon. Call +91 7011585587.",
    keywords:
      "laundry service Gurgaon, dry cleaning Gurgaon, express laundry, pickup delivery, laundry pricing ₹59, dry cleaning prices, professional laundry Sector 43, Sector 69, affordable laundry service, same day laundry, 24/7 laundry",
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  Laundrify
                </h1>
                <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-300 to-blue-200 bg-clip-text text-transparent">
                  Quick Clean & Convenient
                </p>
              </div>

              <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-lg">
                Professional laundry and dry cleaning delivered to your doorstep
                in just{" "}
                <span className="font-bold text-pink-300">45 minutes</span>.
                Experience premium care with free pickup and delivery, plus up
                to <span className="font-bold text-pink-300">20% OFF</span> on
                express services.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <Phone className="w-5 h-5 text-pink-300" />
                <a
                  href="tel:+917011585587"
                  className="text-lg font-bold text-pink-200 hover:text-white transition-colors"
                >
                  +91 7011585587
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="https://www.laundrify.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-center"
                >
                  Book Service
                </a>
                <Link
                  to="/services"
                  onClick={() => {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      event: "conversion",
                      conversion_id: 1780734392,
                      conversion_label: "puzAGMltUocbEJNqhC",
                    });
                  }}
                  className="bg-gradient-to-r from-pink-400 to-red-400 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Browse Services
                </Link>
                <a
                  href="tel:+919315989054"
                  className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-300" />
                  <span className="text-sm font-medium">45 Minute Express</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-300" />
                  <span className="text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-300" />
                  <span className="text-sm font-medium">Premium Care</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Laundrify?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the difference with our premium laundry services
              designed for busy professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Express Service
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Get your clothes cleaned and delivered in just 45 minutes with
                our lightning-fast express service.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Free Pickup & Delivery
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Complimentary pickup and delivery service across all locations.
                No hidden charges, no surprises.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl border border-pink-100 hover:border-pink-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Premium Quality
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Professional care using premium detergents and eco-friendly
                equipment. Your clothes deserve the best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Showcase */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Affordable Pricing
            </h2>
            <p className="text-lg text-slate-600">
              Transparent pricing with no hidden charges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-purple-600 mb-2">₹80</div>
              <p className="text-slate-700 font-semibold mb-1">
                Laundry with Fold
              </p>
              <p className="text-sm text-slate-600">per kg</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ₹120
              </div>
              <p className="text-slate-700 font-semibold mb-1">
                Laundry with Iron
              </p>
              <p className="text-sm text-slate-600">per kg</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹100</div>
              <p className="text-slate-700 font-semibold mb-1">
                Men's Dry Clean
              </p>
              <p className="text-sm text-slate-600">starting price</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-lg border border-pink-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-pink-600 mb-2">20%</div>
              <p className="text-slate-700 font-semibold mb-1">
                Extra Discount
              </p>
              <p className="text-sm text-slate-600">express service</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-block text-purple-600 font-semibold hover:text-pink-600 transition-colors"
            >
              View complete pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive laundry and dry cleaning solutions tailored to your
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-purple-300 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-40 overflow-hidden bg-slate-200">
                <img
                  src="https://images.pexels.com/photos/12104070/pexels-photo-12104070.jpeg"
                  alt="Laundry service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Laundry</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Washing with fold or iron service included
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-purple-300 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-40 overflow-hidden bg-slate-200">
                <img
                  src="https://images.pexels.com/photos/3613388/pexels-photo-3613388.jpeg"
                  alt="Men's dry cleaning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">
                  Men's Dry Clean
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Professional dry cleaning for men's wear
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-purple-300 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-40 overflow-hidden bg-slate-200">
                <img
                  src="https://images.pexels.com/photos/11527695/pexels-photo-11527695.jpeg"
                  alt="Women's clothing care"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">
                  Women's Dry Clean
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Specialized care for women's garments
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-purple-300 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-40 overflow-hidden bg-slate-200">
                <img
                  src="https://images.pexels.com/photos/10335075/pexels-photo-10335075.jpeg"
                  alt="Woolen care service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">
                  Woolen Care
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Gentle cleaning for delicate woolens
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-2 transform hover:scale-105"
            >
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Experience Premium Laundry Service?
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get up to <span className="text-pink-300 font-bold">20% OFF</span>{" "}
            on your first express service order. Free pickup and delivery
            available in your area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917011585587"
              className="bg-white text-purple-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl"
            >
              <Phone className="w-5 h-5" />
              Call: +91 7011585587
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-pink-400 to-red-400 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
