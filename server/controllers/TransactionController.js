const Transaction = require('../models/Transaction');

// Create a new transaction
exports.create = async (req, res) => {
  try {
    const { chamaId, userId, type, amount, date, description, status } = req.body;
    const transaction = new Transaction({ chamaId, userId, type, amount, date, description, status });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all transactions
exports.getAll = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('chamaId userId');
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get transaction by ID
exports.getById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id).populate('chamaId userId');
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update transaction
exports.update = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete transaction
exports.delete = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 