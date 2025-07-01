const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema({
  chamaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chama', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['monthly', 'special'], default: 'monthly' },
  status: { type: String, enum: ['pending', 'confirmed', 'failed'], default: 'pending' }
});

module.exports = mongoose.model('Contribution', contributionSchema);