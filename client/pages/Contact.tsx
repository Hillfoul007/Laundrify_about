import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white opacity-95">
            Get in touch with us anytime. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 mb-2">Available 24/7</p>
              <a
                href="tel:+917011585587"
                className="text-purple-600 font-bold hover:text-pink-600 text-lg"
              >
                +91 7011585587
              </a>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Visit Us
              </h3>
              <p className="text-slate-600">
                Laundry26 (Sector 43) & Shiv Laundry (Sector 69), Gurgaon
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Hours</h3>
              <p className="text-slate-600">24/7 Service Available</p>
              <p className="text-purple-600 font-semibold mt-2">
                Free Pickup & Delivery
              </p>
            </div>
          </div>

          {/* Branches Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Branches
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sector 43 Branch */}
              <div>
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                  <div className="h-64 bg-slate-200 relative overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6851844551656!2d77.05373!3d28.5178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff5bdfffffd%3A0x123456789!2sSector%2043%2C%20Gurgaon!5e0!3m2!1sen!2sin!4v1234567890"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Laundry26 - Sector 43
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">
                            Location
                          </p>
                          <p className="text-slate-600">UGF - 109, Vyapar Kendra Rd, Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122009</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Phone</p>
                          <a
                            href="tel:+917011585587"
                            className="text-purple-600 hover:text-pink-600"
                          >
                            +91 7011585587
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Hours</p>
                          <p className="text-slate-600">24/7 Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sector 69 Branch */}
              <div>
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                  <div className="h-64 bg-slate-200 relative overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.8145212125345!2d77.07125!3d28.5567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd12345678!2sSector%2069%2C%20Gurgaon!5e0!3m2!1sen!2sin!4v1234567890"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Shiv Laundry - Sector 69
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">
                            Location
                          </p>
                          <p className="text-slate-600">Star Galaxy PG, C block, Sector 69, Gurugram, Haryana 122101</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Phone</p>
                          <a
                            href="tel:+917011585587"
                            className="text-purple-600 hover:text-pink-600"
                          >
                            +91 7011585587
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Hours</p>
                          <p className="text-slate-600">24/7 Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6 p-8 bg-slate-50 rounded-lg border border-slate-200">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Tell us how we can help you"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Premium Laundry Service?
          </h2>
          <p className="text-white mb-8 text-lg opacity-95">
            Call us now for free pickup and delivery
          </p>
          <a
            href="tel:+917011585587"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-lime-300 transition-colors"
          >
            Call: +91 7011585587
          </a>
        </div>
      </section>
    </Layout>
  );
}
