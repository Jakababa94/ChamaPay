import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mary Wanjiku',
    role: 'Treasurer, Uongozi Chama',
    location: 'Nairobi',
    image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'ChamaPay transformed our collection process. We went from 60% to 90% collection rate in just 2 months. The WhatsApp reminders are a game-changer!',
    rating: 5
  },
  {
    name: 'John Kimani',
    role: 'Chairman, Unity Chama',
    location: 'Mombasa',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Managing 50 members was a nightmare before ChamaPay. Now everything is automated and our members love getting balance updates on WhatsApp.',
    rating: 5
  },
  {
    name: 'Grace Akinyi',
    role: 'Secretary, Maendeleo Chama',
    location: 'Kisumu',
    image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'The PDF reports are fantastic for our monthly meetings. Members can see exactly where we stand financially. Very professional!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Chamas Across Kenya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what Chama leaders are saying about their experience with ChamaPay
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join 500+ Successful Chamas
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Ready to transform your Chama's payment collection? Start your free trial today and see results within the first week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                Start 14-Day Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;