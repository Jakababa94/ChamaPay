const Chama = require('../models/Chama');

// Create a new chama
exports.create = async (req, res) => {
  try {
    const { name, description, createdBy } = req.body;
    const chama = new Chama({ name, description, createdBy });
    await chama.save();
    res.status(201).json(chama);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all chamas
exports.getAll = async (req, res) => {
  try {
    const chamas = await Chama.find().populate('createdBy');
    res.json(chamas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get chama by ID
exports.getById = async (req, res) => {
  try {
    const chama = await Chama.findById(req.params.id).populate('createdBy');
    if (!chama) return res.status(404).json({ error: 'Chama not found' });
    res.json(chama);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update chama
exports.update = async (req, res) => {
  try {
    const chama = await Chama.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!chama) return res.status(404).json({ error: 'Chama not found' });
    res.json(chama);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete chama
exports.delete = async (req, res) => {
  try {
    const chama = await Chama.findByIdAndDelete(req.params.id);
    if (!chama) return res.status(404).json({ error: 'Chama not found' });
    res.json({ message: 'Chama deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 