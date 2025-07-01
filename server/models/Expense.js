const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  chamaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chama', required: true },
  amount: { type: Number, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  recordedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Expense', expenseSchema);