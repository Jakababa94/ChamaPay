const Membership = require('../models/Membership');

// Create a new membership
exports.create = async (req, res) => {
  try {
    const { userId, chamaId, role, status } = req.body;
    const membership = new Membership({ userId, chamaId, role, status });
    await membership.save();
    res.status(201).json(membership);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all memberships
exports.getAll = async (req, res) => {
  try {
    const memberships = await Membership.find().populate('userId chamaId');
    res.json(memberships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get membership by ID
exports.getById = async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id).populate('userId chamaId');
    if (!membership) return res.status(404).json({ error: 'Membership not found' });
    res.json(membership);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update membership
exports.update = async (req, res) => {
  try {
    const membership = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!membership) return res.status(404).json({ error: 'Membership not found' });
    res.json(membership);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete membership
exports.delete = async (req, res) => {
  try {
    const membership = await Membership.findByIdAndDelete(req.params.id);
    if (!membership) return res.status(404).json({ error: 'Membership not found' });
    res.json({ message: 'Membership deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 