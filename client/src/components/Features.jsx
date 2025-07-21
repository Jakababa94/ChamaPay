import React from 'react';
import { MessageCircle, Clock, BarChart3, FileText, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description: 'Send automated reminders and updates directly to members\' WhatsApp. No app installation required.',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Clock,
    title: 'Smart Reminders',
    description: 'Customizable reminder schedules. Send alerts 7 days, 3 days, and 1 day before payment due dates.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Real-time Tracking',
    description: 'Monitor payment status, collection rates, and member engagement with detailed analytics dashboard.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: FileText,
    title: 'PDF Reports',
    description: 'Generate comprehensive monthly reports with payment summaries, trends, and member insights.',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Bank-level security with encrypted data storage. 99.9% uptime guarantee for critical reminders.',
    gradient: 'from-red-500 to-red-600'
  },
  {
    icon: Smartphone,
    title: 'SMS Backup',
    description: 'Premium SMS reminders as backup for important notifications. Never miss critical payments.',
    gradient: 'from-teal-500 to-teal-600'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Everything Your Chama Needs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Streamline your Chama operations with powerful automation tools designed specifically for Kenyan savings groups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-xl hover:border-transparent transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                See the Impact
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Join hundreds of Chamas across Kenya who have transformed their payment collection process with ChamaBot.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">+85%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Collection Rate</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">-70%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Admin Time</div>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy Chama members"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;