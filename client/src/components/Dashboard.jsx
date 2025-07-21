import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, CreditCard, TrendingUp, MessageCircle, Calendar, DollarSign, AlertCircle, 
  CheckCircle2, Clock, Send, FileText,Settings } from 'lucide-react';

// Lightweight JWT decoder
function decodeJWT(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return {};
  }
}

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const navigate = useNavigate();

  // Get user role from JWT
  let userRole = '';
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decodeJWT(token);
      userRole = decoded.role;
    }
  } catch (e) {
    userRole = '';
  }

  if (userRole !== 'admin') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">You do not have permission to view this page.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (userRole !== 'admin') {
      navigate('/');
    }
  }, [userRole, navigate]);

  const stats = [
    {
      title: 'Total Members',
      value: '45',
      change: '+2 this month',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'This Month Collection',
      value: 'KES 180,000',
      change: '85% complete',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Payment Rate',
      value: '92%',
      change: '+15% from last month',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Messages Sent',
      value: '127',
      change: 'This week',
      icon: MessageCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentPayments = [
    { name: 'Mary Wanjiku', amount: 'KES 5,000', status: 'paid', date: '2024-11-15' },
    { name: 'John Kimani', amount: 'KES 3,000', status: 'pending', date: '2024-11-14' },
    { name: 'Grace Akinyi', amount: 'KES 7,500', status: 'paid', date: '2024-11-13' },
    { name: 'Peter Mwangi', amount: 'KES 4,000', status: 'overdue', date: '2024-11-10' },
    { name: 'Sarah Njeri', amount: 'KES 6,000', status: 'paid', date: '2024-11-12' }
  ];

  const upcomingReminders = [
    { type: 'Payment Due', message: '15 members - Monthly contribution due in 2 days', time: 'Tomorrow 9:00 AM' },
    { type: 'Balance Update', message: 'Weekly balance report to all members', time: 'Friday 6:00 PM' },
    { type: 'Follow-up', message: '3 overdue payments reminder', time: 'Today 3:00 PM' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Chama Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back! Here's what's happening with your Chama.</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'members', label: 'Members', icon: Users },
              { id: 'payments', label: 'Payments', icon: CreditCard },
              { id: 'messages', label: 'Messages', icon: MessageCircle },
              { id: 'reports', label: 'Reports', icon: FileText },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  selectedTab === tab.id
                    ? 'border-green-500 text-green-600 dark:text-green-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">{stat.value}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className={`${stat.bgColor} p-3 rounded-lg`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Payments */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent Payments</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentPayments.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600">
                              {payment.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-gray-100">{payment.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{payment.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{payment.amount}</p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            payment.status === 'paid' 
                              ? 'bg-green-100 text-green-800'
                              : payment.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {payment.status === 'paid' && <CheckCircle2 className="h-3 w-3 mr-1" />}
                            {payment.status === 'pending' && <Clock className="h-3 w-3 mr-1" />}
                            {payment.status === 'overdue' && <AlertCircle className="h-3 w-3 mr-1" />}
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upcoming Reminders */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Upcoming Reminders</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingReminders.map((reminder, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Calendar className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-gray-100">{reminder.type}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{reminder.message}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{reminder.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 bg-green-50 text-green-600 py-2 px-4 rounded-lg font-medium hover:bg-green-100 transition-colors flex items-center justify-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Manual Reminder
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            {userRole === 'admin' && (
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <button className="bg-white/20 backdrop-blur-sm p-4 rounded-lg hover:bg-white/30 transition-colors">
                    <Users className="h-6 w-6 mb-2" />
                    <div className="text-sm font-medium">Add Member</div>
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm p-4 rounded-lg hover:bg-white/30 transition-colors">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    <div className="text-sm font-medium">Send Message</div>
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm p-4 rounded-lg hover:bg-white/30 transition-colors">
                    <FileText className="h-6 w-6 mb-2" />
                    <div className="text-sm font-medium">Generate Report</div>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Other tabs content placeholder */}
        {selectedTab !== 'overview' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Section
              </h3>
              <p className="text-gray-600">
                This section is under development. The {selectedTab} management features will be available soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;