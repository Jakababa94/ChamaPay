const User = require('../models/User');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, phone, passwordHash } = req.body;
    const user = new User({ name, email, phone, passwordHash });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all users
exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single user by ID
exports.getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a user
exports.update = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a user
exports.delete = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Approve a pending admin
exports.approveAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.role !== 'admin' || user.status !== 'pending') {
      return res.status(400).json({ error: 'User is not a pending admin' });
    }
    user.status = 'approved';
    await user.save();
    res.json({ message: 'Admin approved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Reject a pending admin
exports.rejectAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.role !== 'admin' || user.status !== 'pending') {
      return res.status(400).json({ error: 'User is not a pending admin' });
    }
    user.status = 'rejected';
    await user.save();
    res.json({ message: 'Admin rejected successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 