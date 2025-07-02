import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, TrendingUp, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Bot for Chamas</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Never Miss a
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Chama Payment
                </span>
                Again
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Automate payment reminders, track contributions, and send balance updates to your Chama members via WhatsApp. Increase collection rates by 85% and save hours every month.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-500 hover:text-green-600 transition-all"
              >
                View Pricing
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">85%</div>
                <div className="text-sm text-gray-600">Higher Collection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Active Chamas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Automated Service</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-green-500 rounded-t-lg p-4 flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                <span className="text-white font-medium ml-auto">ChamaPay</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-gray-800">Payment Reminder</span>
                  </div>
                  <p className="text-gray-600 text-sm">Hi John! Your monthly contribution of KES 5,000 is due tomorrow. Please confirm payment.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-gray-800">Balance Update</span>
                  </div>
                  <p className="text-gray-600 text-sm">Chama balance: KES 150,000. This month's collection: 95% complete.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-gray-800">Member Alert</span>
                  </div>
                  <p className="text-gray-600 text-sm">3 members pending payment. Auto-reminder sent.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;