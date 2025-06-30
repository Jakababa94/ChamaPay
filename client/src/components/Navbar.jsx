import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X, CreditCard, BarChart3, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isDashboard = location.pathname.includes('/dashboard');

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-2 rounded-lg group-hover:shadow-md transition-shadow">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ChamaPay
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isDashboard ? (
              <>
                <Link to="/dashboard" className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
                  <BarChart3 className="h-4 w-4" />
                  <span>Overview</span>
                </Link>
                <Link to="/dashboard/members" className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
                  <Users className="h-4 w-4" />
                  <span>Members</span>
                </Link>
                <Link to="/dashboard/payments" className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
                  <CreditCard className="h-4 w-4" />
                  <span>Payments</span>
                </Link>
              </>
            ) : (
              <>
                <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
                <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
                <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Testimonials</a>
              </>
            )}
            <Link
              to={isDashboard ? "/" : "/dashboard"}
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              {isDashboard ? "Home" : "Dashboard"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {isDashboard ? (
                <>
                  <Link to="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors py-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>Overview</span>
                  </Link>
                  <Link to="/dashboard/members" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors py-2">
                    <Users className="h-4 w-4" />
                    <span>Members</span>
                  </Link>
                  <Link to="/dashboard/payments" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors py-2">
                    <CreditCard className="h-4 w-4" />
                    <span>Payments</span>
                  </Link>
                </>
              ) : (
                <>
                  <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors py-2">Features</a>
                  <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors py-2">Pricing</a>
                  <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors py-2">Testimonials</a>
                </>
              )}
              <Link
                to={isDashboard ? "/" : "/dashboard"}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg text-center"
              >
                {isDashboard ? "Home" : "Dashboard"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;