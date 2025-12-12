import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Sparkles, Zap, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Laundry & Dry Clean Service
              </h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed">
                Professional laundry and dry cleaning delivered to your doorstep in 45 minutes. Free pickup and delivery with up to 20% OFF on express services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors text-center"
                >
                  Browse Services
                </Link>
                <a
                  href="tel:7011585587"
                  className="bg-teal-400 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-teal-300 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <svg
                className="w-full h-auto"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="200" cy="200" r="150" fill="rgba(255,255,255,0.1)" />
                <circle cx="200" cy="200" r="120" fill="rgba(255,255,255,0.15)" />
                <rect x="150" y="120" width="100" height="160" rx="10" fill="white" opacity="0.2" />
                <rect x="170" y="140" width="60" height="120" rx="5" fill="white" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Why Choose Laundrify?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-200">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Express Service
              </h3>
              <p className="text-slate-600">
                Get your clothes cleaned and delivered in 45 minutes with our fast express service.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-200">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Free Pickup & Delivery
              </h3>
              <p className="text-slate-600">
                We pick up and deliver your laundry for free across both branches.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-200">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-slate-600">
                Professional care for all types of garments using premium detergents and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👕</div>
              <h3 className="font-bold text-slate-900 mb-2">Laundry</h3>
              <p className="text-sm text-slate-600">
                Washing with fold or iron service
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👔</div>
              <h3 className="font-bold text-slate-900 mb-2">Men's Dry Clean</h3>
              <p className="text-sm text-slate-600">
                Professional dry cleaning for men's wear
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👗</div>
              <h3 className="font-bold text-slate-900 mb-2">Women's Dry Clean</h3>
              <p className="text-sm text-slate-600">
                Specialized care for women's garments
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🧥</div>
              <h3 className="font-bold text-slate-900 mb-2">Woolen Care</h3>
              <p className="text-sm text-slate-600">
                Gentle cleaning for delicate woolens
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors"
            >
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Premium Laundry Service?
          </h2>
          <p className="text-lg text-teal-50 mb-8">
            Get up to 20% OFF on your first express service order. Free pickup and delivery available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7011585587"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: 7011585587
            </a>
            <Link
              to="/contact"
              className="bg-teal-400 text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-300 transition-colors text-center"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
