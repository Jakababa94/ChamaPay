const Loan = require('../models/Loan');

// Create a new loan
exports.create = async (req, res) => {
  try {
    const { chamaId, userId, amount, interestRate, status, requestedAt, approvedAt, repaidAt } = req.body;
    const loan = new Loan({ chamaId, userId, amount, interestRate, status, requestedAt, approvedAt, repaidAt });
    await loan.save();
    res.status(201).json(loan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all loans
exports.getAll = async (req, res) => {
  try {
    const loans = await Loan.find().populate('chamaId userId');
    res.json(loans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get loan by ID
exports.getById = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id).populate('chamaId userId');
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    res.json(loan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update loan
exports.update = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    res.json(loan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete loan
exports.delete = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndDelete(req.params.id);
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    res.json({ message: 'Loan deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 