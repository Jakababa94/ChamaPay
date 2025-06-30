import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, TrendingUp } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Revolutionize Your Chama?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join hundreds of Chamas across Kenya who have already transformed their payment collection process. 
            Start your free trial today and experience the difference automated reminders can make.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Instant Setup</h3>
              <p className="text-white/80 text-sm">Get started in under 5 minutes. No technical knowledge required.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-white/80 text-sm">85% average increase in collection rates within the first month.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <ArrowRight className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Risk-Free Trial</h3>
              <p className="text-white/80 text-sm">14-day free trial with 30-day money-back guarantee.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 group"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+254700000000"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Call Us: +254 721 805 204
            </a>
          </div>

          <p className="text-white/70 text-sm mt-8">
            No credit card required • Cancel anytime • 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;