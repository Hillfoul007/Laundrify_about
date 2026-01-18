import { Star } from "lucide-react";

interface TestimonialCard {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: TestimonialCard[] = [
  {
    name: "Priya Singh",
    role: "Delhi Customer",
    image: "https://images.pexels.com/photos/8951408/pexels-photo-8951408.jpeg",
    text: "Laundrify's express service is incredible! My clothes arrive perfectly cleaned and pressed within 45 minutes. Best laundry service I've ever used!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Business Professional",
    image: "https://images.pexels.com/photos/7752805/pexels-photo-7752805.jpeg",
    text: "The pickup and delivery service is so convenient. I don't have time to worry about laundry anymore. Their customer service is top-notch!",
    rating: 5,
  },
  {
    name: "Aisha Kapoor",
    role: "Fashion Designer",
    image: "https://images.pexels.com/photos/8951408/pexels-photo-8951408.jpeg",
    text: "I trust Laundrify with my delicate designer pieces. Their care and attention to detail is exceptional. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of happy customers who trust Laundrify for their laundry needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all hover:shadow-2xl"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 mb-6 leading-relaxed text-sm italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-slate-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9★</div>
            <p className="text-slate-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
            <p className="text-slate-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-slate-600">Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">45min</div>
            <p className="text-slate-600">Express Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
