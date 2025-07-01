const Expense = require('../models/Expense');

// Create a new expense
exports.create = async (req, res) => {
  try {
    const { chamaId, amount, description, date, recordedBy } = req.body;
    const expense = new Expense({ chamaId, amount, description, date, recordedBy });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all expenses
exports.getAll = async (req, res) => {
  try {
    const expenses = await Expense.find().populate('chamaId recordedBy');
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get expense by ID
exports.getById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id).populate('chamaId recordedBy');
    if (!expense) return res.status(404).json({ error: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update expense
exports.update = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!expense) return res.status(404).json({ error: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete expense
exports.delete = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) return res.status(404).json({ error: 'Expense not found' });
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 