import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import AdminApprovals from './components/AdminApprovals';

function App() {
  return (
   
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-approvals" element={<AdminApprovals />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;