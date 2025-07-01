const Contribution = require('../models/Contribution');

// Create a new contribution
exports.create = async (req, res) => {
  try {
    const { chamaId, userId, amount, date, type, status } = req.body;
    const contribution = new Contribution({ chamaId, userId, amount, date, type, status });
    await contribution.save();
    res.status(201).json(contribution);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all contributions
exports.getAll = async (req, res) => {
  try {
    const contributions = await Contribution.find().populate('chamaId userId');
    res.json(contributions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get contribution by ID
exports.getById = async (req, res) => {
  try {
    const contribution = await Contribution.findById(req.params.id).populate('chamaId userId');
    if (!contribution) return res.status(404).json({ error: 'Contribution not found' });
    res.json(contribution);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update contribution
exports.update = async (req, res) => {
  try {
    const contribution = await Contribution.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contribution) return res.status(404).json({ error: 'Contribution not found' });
    res.json(contribution);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete contribution
exports.delete = async (req, res) => {
  try {
    const contribution = await Contribution.findByIdAndDelete(req.params.id);
    if (!contribution) return res.status(404).json({ error: 'Contribution not found' });
    res.json({ message: 'Contribution deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 