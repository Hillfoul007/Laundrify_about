import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are your laundry service prices?",
    answer:
      "Our professional laundry service is priced affordably - starting from ₹59/kg for laundry with fold, and ₹89/kg for laundry with iron. We offer competitive pricing for dry cleaning services as well, with men's wear starting from ₹100 and women's wear from ₹120. Check our services page for complete pricing details.",
  },
  {
    question: "How long does the express laundry service take?",
    answer:
      "Our express laundry delivery service takes just 45 minutes from pickup to delivery. Once you request a pickup, we collect your clothes, process them in our facility, and deliver them back within the promised timeframe. This makes us the fastest laundry service in Gurgaon.",
  },
  {
    question: "Do you provide free pickup and delivery?",
    answer:
      "Yes, we provide completely free pickup and delivery service across Gurgaon in Sector 43 and Sector 69. You don't need to visit our branches - our laundry service includes door-to-door collection and delivery, making it convenient for busy professionals.",
  },
  {
    question: "What laundry and dry cleaning services do you offer?",
    answer:
      "We offer comprehensive laundry services including standard laundry with fold, laundry with iron, professional dry cleaning for men's wear, women's clothing care, woolen garment care, specialized saree and lehenga cleaning, and professional shoe care service. Each service is handled by expert professionals using premium detergents.",
  },
  {
    question: "Are your laundry services available 24/7?",
    answer:
      "Yes, our professional laundry and dry cleaning service is available 24/7 in Gurgaon. You can request laundry pickup anytime, and we'll arrange collection and delivery at your convenience. Call us at +91 7011585587 or visit our website to book your laundry service.",
  },
  {
    question: "Is my clothing safe with Laundrify?",
    answer:
      "Absolutely! We use premium detergents, modern equipment, and expert care for all garments. Our team specializes in handling delicate fabrics including woolen items, sarees, and designer wear. With 5000+ happy customers and 100% satisfaction guarantee, your clothes are in safe hands with our professional laundry service.",
  },
  {
    question: "Can you clean special garments like sarees and lehengas?",
    answer:
      "Yes, we specialize in cleaning special and delicate garments. Our dry cleaning service includes expertise in saree cleaning (starting from ₹240 for simple sarees), lehenga cleaning (₹400-₹1000 depending on complexity), and other traditional wear. We use specialized techniques to ensure these precious garments are treated with utmost care.",
  },
  {
    question: "How can I book a laundry service with Laundrify?",
    answer:
      "Booking our laundry service is easy! Call us at +91 7011585587, visit our website, or use WhatsApp to request a pickup. We'll arrange free pickup from your location, provide professional cleaning service, and deliver your clothes within 45 minutes for express service. You can also contact our customer care for any special requirements.",
  },
  {
    question: "What discount do you offer on laundry services?",
    answer:
      "We offer up to 20% discount on express laundry service for new customers. Our pricing is already affordable compared to other dry cleaning services in Gurgaon, and we frequently have special offers. Contact us to know about current laundry service discounts.",
  },
  {
    question: "Why choose Laundrify for laundry services?",
    answer:
      "Choose Laundrify for professional laundry service because we offer: express 45-minute delivery, free pickup & delivery, affordable pricing from ₹59/kg, 100% customer satisfaction, expert care for all garment types, 24/7 service availability, 5000+ happy customers, and 10+ years of experience. We're the best laundry service in Gurgaon.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions About Our Laundry Service
          </h2>
          <p className="text-xl text-slate-600">
            Find answers to common questions about Laundrify laundry and dry
            cleaning services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-purple-300 transition-colors"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform ${
                    expandedIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-5 bg-white border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Still have questions about our laundry service?
          </h3>
          <p className="text-slate-700 mb-4">
            Contact us directly at{" "}
            <a
              href="tel:+917011585587"
              className="font-bold text-purple-600 hover:text-pink-600 transition-colors"
            >
              +91 7011585587
            </a>{" "}
            for immediate assistance with any laundry or dry cleaning service
            inquiries.
          </p>
          <p className="text-slate-600">We're available 24/7 to help!</p>
        </div>
      </div>
    </section>
  );
}
