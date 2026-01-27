import { Layout } from "@/components/Layout";
import { useMeta } from "@/hooks/use-meta";
import { CheckCircle } from "lucide-react";

export default function About() {
  useMeta({
    title:
      "About Laundrify - Professional Laundry & Dry Cleaning Service in Gurgaon | 10+ Years Experience",
    description:
      "About Laundrify - Professional laundry & dry cleaning service provider in Gurgaon with 10+ years experience. We serve 5000+ happy customers across Sector 43 & 69 with express 45-minute delivery. Premium care with state-of-the-art equipment and experienced professionals. Trusted for quality, reliability, and customer satisfaction.",
    keywords:
      "about laundrify, laundry service provider, professional laundry service, dry cleaning service provider, Gurgaon laundry company, experienced laundry service, trusted laundry brand, professional cleaning service, laundry with customer reviews, best laundry company, quality laundry service",
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Laundrify - Professional Laundry & Dry Cleaning Service
            Provider
          </h1>
          <p className="text-lg text-white opacity-95">
            Your trusted partner for premium laundry and dry cleaning services
            in Gurgaon with 10+ years of experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Story - Building Trust in Laundry Services
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Laundrify started with a simple mission: to make professional
                laundry and dry cleaning services accessible and convenient for
                everyone. We understand that life is busy, and taking care of
                your clothes shouldn't be a burden.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                With operations at Laundry26 (Sector 43) and Shiv Laundry
                (Sector 69) in Gurgaon, we've built a reputation for excellence,
                reliability, and customer satisfaction. Our team of experienced
                professionals uses premium detergents and state-of-the-art
                equipment to ensure your clothes receive the best care.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, Laundrify is the preferred choice for thousands of
                customers who value quality, convenience, and affordability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why Customers Choose Laundrify for Laundry & Dry Cleaning
              </h3>
              <div className="space-y-4">
                {[
                  "Express 45-minute delivery service",
                  "Free pickup and delivery",
                  "Premium quality care for all garments",
                  "Competitive pricing with discounts",
                  "Professional and friendly staff",
                  "Available 24/7",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-slate-200">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                2+
              </div>
              <p className="text-slate-600 font-medium">
                Branches Across Gurgaon
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                5000+
              </div>
              <p className="text-slate-600 font-medium">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <p className="text-slate-600 font-medium">Years of Experience</p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Values - Why We're the Best Professional Laundry Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Quality Laundry & Dry Cleaning
                </h3>
                <p className="text-slate-600">
                  We maintain the highest standards in professional laundry and
                  dry cleaning care, ensuring every garment is treated with
                  premium attention to detail using modern equipment and premium
                  detergents.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Reliable Express Laundry Service
                </h3>
                <p className="text-slate-600">
                  You can count on us for timely 45-minute express delivery,
                  transparent pricing, and consistent professional laundry
                  service every single time without fail.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  24/7 Laundry Customer Care
                </h3>
                <p className="text-slate-600">
                  Your satisfaction is our priority. We're available 24/7 for
                  laundry and dry cleaning service inquiries to address any
                  concerns and ensure you're always happy with our professional
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
