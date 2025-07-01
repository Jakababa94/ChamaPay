const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  chamaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chama', required: true },
  role: { type: String, enum: ['member', 'treasurer', 'chairperson'], default: 'member' },
  status: { type: String, enum: ['active', 'pending', 'removed'], default: 'pending' },
  joinedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Membership', membershipSchema);