const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  chamaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chama', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  interestRate: { type: Number, default: 0 },
  status: { type: String, enum: ['pending', 'approved', 'rejected', 'repaid'], default: 'pending' },
  requestedAt: { type: Date, default: Date.now },
  approvedAt: Date,
  repaidAt: Date
});

module.exports = mongoose.model('Loan', loanSchema);
