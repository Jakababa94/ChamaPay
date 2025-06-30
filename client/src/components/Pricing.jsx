import React from 'react';
import { Shield, Check, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: '100',
    period: 'month',
    description: 'Perfect for small Chamas getting started',
    features: [
      'WhatsApp reminders for up to 20 members',
      'Basic payment tracking',
      'Monthly balance updates',
      'Email support',
      'Payment due date alerts',
      'Simple dashboard'
    ],
    cta: 'Start Basic Plan',
    popular: false
  },
  {
    name: 'Premium',
    price: '250',
    period: 'month',
    description: 'Best for growing Chamas with advanced needs',
    features: [
      'WhatsApp reminders for up to 100 members',
      'Advanced payment tracking & analytics',
      'Weekly balance updates',
      'SMS backup reminders',
      'PDF monthly reports',
      'Custom reminder schedules',
      'Priority support',
      'Member engagement insights'
    ],
    cta: 'Start Premium Plan',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large Chamas and Chama networks',
    features: [
      'Unlimited members',
      'Multi-Chama management',
      'Advanced analytics & reporting',
      'SMS + WhatsApp + Email',
      'Custom integrations',
      'Dedicated account manager',
      'Training & onboarding',
      'White-label options'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your Chama. All plans include a 14-day free trial with no commitment.
          </p>
          <div className="mt-6 inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="h-4 w-4 mr-2" />
            <span>14-day free trial • No credit card required</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? 'border-2 border-green-500 shadow-xl scale-105'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  {plan.price === 'Custom' ? (
                    <span className="text-3xl font-bold text-gray-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-sm text-gray-600 mr-1">KES</span>
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">/{plan.period}</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dashboard"
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-lg transform hover:scale-105'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Money-Back Guarantee
            </h3>
            <p className="text-gray-600 mb-6">
              Not satisfied with ChamaBot? Get a full refund within 30 days, no questions asked. We're confident you'll love the results.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-green-500" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2 text-green-500" />
                <span>Instant Activation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;