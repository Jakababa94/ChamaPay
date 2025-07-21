import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', role: 'member', inviteCode: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/api/auth/register`, form);
      setSuccess(res.data.message || 'Registration successful!');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Register</h2>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100" />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100" />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100" />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100" />
        <select name="role" value={form.role} onChange={handleChange} className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
        {form.role === 'admin' && (
          <input name="inviteCode" placeholder="Admin Invite Code" value={form.inviteCode} onChange={handleChange} required className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100" />
        )}
        <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition">
          {loading ? 'Registering...' : 'Register'}
        </button>
        {error && <div className="text-red-600 text-center">{error}</div>}
        {success && <div className="text-green-600 text-center">{success}</div>}
        <div className="text-center text-sm text-gray-700 dark:text-gray-300">
          Already have an account? <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register; 