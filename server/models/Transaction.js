const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  chamaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chama', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['contribution', 'loan', 'withdrawal', 'expense'], required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: String,
  status: { type: String, enum: ['pending', 'confirmed', 'failed'], default: 'pending' }
});

module.exports = mongoose.model('Transaction', transactionSchema);