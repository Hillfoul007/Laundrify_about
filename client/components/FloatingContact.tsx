import { MessageCircle, Phone, Mail } from "lucide-react";

export default function FloatingContact() {
  return (
    <>
      {/* Floating Contact Icons - Bottom Right */}
      <div className="fixed right-6 bottom-8 z-40 flex flex-col gap-3 sm:gap-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/917011585587?text=Hi%20Laundrify%2C%20I%20need%20laundry%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 hover:shadow-xl"
          title="WhatsApp us"
        >
          <MessageCircle className="w-7 h-7" />
        </a>

        {/* Call */}
        <a
          href="tel:+917011585587"
          className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 hover:shadow-xl"
          title="Call us"
        >
          <Phone className="w-7 h-7" />
        </a>

        {/* Email */}
        <a
          href="mailto:info@laundrify.online"
          className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-300 hover:shadow-xl"
          title="Email us"
        >
          <Mail className="w-7 h-7" />
        </a>
      </div>
    </>
  );
}
