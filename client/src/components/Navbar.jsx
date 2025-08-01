import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X, CreditCard, BarChart3, Users, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeProvider'; // Adjust the path if needed

// Lightweight JWT decoder
function decodeJWT(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return {};
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isDashboard = location.pathname.includes('/dashboard');
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  let isAdmin = false;
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decodeJWT(token);
      isAdmin = decoded.role === 'admin';
    }
  } catch (e) {
    isAdmin = false;
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-100 dark:border-gray-700">
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
            {isAdmin && (
              <Link to="/admin-approvals" className="ml-2 px-4 py-2 rounded-lg border border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition">Admin Approvals</Link>
            )}
            {!isDashboard && !isLoggedIn && (
              <>
                <Link to="/register" className="ml-2 px-4 py-2 rounded-lg border border-green-500 text-green-600 font-semibold hover:bg-green-50 transition">Register</Link>
                <Link to="/login" className="ml-2 px-4 py-2 rounded-lg border border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition">Login</Link>
              </>
            )}
            {isLoggedIn && (
              <button onClick={handleLogout} className="ml-2 px-4 py-2 rounded-lg border border-red-500 text-red-600 font-semibold hover:bg-red-50 transition">Logout</button>
            )}
            <button
              onClick={toggleTheme}
              className="ml-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
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
              {isAdmin && (
                <Link to="/admin-approvals" className="mt-2 px-4 py-2 rounded-lg border border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition text-center">Admin Approvals</Link>
              )}
              {!isDashboard && !isLoggedIn && (
                <>
                  <Link to="/register" className="mt-2 px-4 py-2 rounded-lg border border-green-500 text-green-600 font-semibold hover:bg-green-50 transition text-center">Register</Link>
                  <Link to="/login" className="mt-2 px-4 py-2 rounded-lg border border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition text-center">Login</Link>
                </>
              )}
              {isLoggedIn && (
                <button onClick={handleLogout} className="mt-2 px-4 py-2 rounded-lg border border-red-500 text-red-600 font-semibold hover:bg-red-50 transition text-center">Logout</button>
              )}
              <button
                onClick={toggleTheme}
                className="mt-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center justify-center"
                title="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;