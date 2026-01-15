import { Layout } from "@/components/Layout";
import { useMeta } from "@/hooks/use-meta";

export default function PrivacyPolicy() {
  useMeta({
    title: "Privacy Policy - Laundrify Laundry Service",
    description:
      "Laundrify Privacy Policy - We protect your personal data including name, phone, address, and location for laundry & dry cleaning services. Secure, transparent data handling.",
    keywords:
      "privacy policy, data protection, Laundrify privacy, laundry service privacy, personal information security",
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-white opacity-95">
            Your privacy matters to us
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-10">
              <p className="text-slate-700 text-lg mb-6">
                Laundrify respects your privacy and is committed to protecting
                your personal information.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Information We Collect
              </h2>
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Name, phone number, and address provided by users for
                    account creation and laundry pickup/delivery.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>Order details related to laundry services.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Device information for app functionality and security.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Location data (only when required for pickup and delivery
                    services).
                  </span>
                </li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                How We Use Information
              </h2>
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    To provide laundry pickup, delivery, and order tracking
                    services.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    To communicate with users regarding orders, updates, and
                    support.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>To improve app performance and user experience.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>To ensure security and prevent fraud.</span>
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Data Sharing
              </h2>
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>We do not sell or rent user data.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Data may be shared only with service partners involved in
                    fulfilling laundry orders.
                  </span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Data Security
              </h2>
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Reasonable security measures are used to protect user data.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Access to personal information is restricted and controlled.
                  </span>
                </li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Children's Privacy
              </h2>
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    Laundrify is not intended for children under the age of 13.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    We do not knowingly collect personal data from children.
                  </span>
                </li>
              </ul>
            </div>

            {/* User Rights */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                User Rights
              </h2>
              <p className="text-slate-700">
                Users can request access, correction, or deletion of their
                personal data by contacting us.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-10 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Contact Us
              </h2>
              <p className="text-slate-700 mb-4">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <div className="text-slate-700">
                <p className="font-semibold mb-2">Email:</p>
                <a
                  href="mailto:support@laundrifymain.com"
                  className="text-purple-600 hover:text-pink-600 font-semibold"
                >
                  support@laundrifymain.com
                </a>
              </div>
            </div>

            {/* Agreement */}
            <div className="p-6 bg-slate-100 rounded-lg border border-slate-300">
              <p className="text-slate-700 font-semibold">
                By using the Laundrify app, you agree to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have More Questions?
          </h2>
          <p className="text-white mb-8 text-lg opacity-95">
            Contact us anytime for privacy-related inquiries
          </p>
          <a
            href="mailto:support@laundrifymain.com"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>
    </Layout>
  );
}
