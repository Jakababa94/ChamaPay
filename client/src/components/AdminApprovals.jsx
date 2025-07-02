import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Lightweight JWT decoder
function decodeJWT(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return {};
  }
}

const AdminApprovals = () => {
  const [pendingAdmins, setPendingAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionMsg, setActionMsg] = useState('');
  const navigate = useNavigate();

  // Check if user is admin
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

  useEffect(() => {
    if (!isAdmin) return;
    fetchPendingAdmins();
    // eslint-disable-next-line
  }, []);

  const fetchPendingAdmins = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPendingAdmins(res.data.filter(u => u.role === 'admin' && u.status === 'pending'));
    } catch (err) {
      setError('Failed to fetch pending admins');
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
    setActionMsg('');
    try {
      const token = localStorage.getItem('token');
      await axios.post(`/api/users/${id}/${action}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setActionMsg(`Admin ${action}d successfully.`);
      fetchPendingAdmins();
    } catch (err) {
      setActionMsg('Action failed.');
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
          <p className="text-gray-700 mb-6">You do not have permission to view this page.</p>
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

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Pending Admin Approvals</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {actionMsg && <div className="text-green-600 mb-4">{actionMsg}</div>}
      {pendingAdmins.length === 0 && !loading && <div>No pending admins.</div>}
      {pendingAdmins.length > 0 && (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingAdmins.map(admin => (
              <tr key={admin._id}>
                <td className="py-2 px-4 border">{admin.name}</td>
                <td className="py-2 px-4 border">{admin.email}</td>
                <td className="py-2 px-4 border">{admin.phone}</td>
                <td className="py-2 px-4 border space-x-2">
                  <button
                    onClick={() => handleAction(admin._id, 'approve')}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(admin._id, 'reject')}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminApprovals; 