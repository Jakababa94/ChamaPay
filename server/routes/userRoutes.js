const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { protect, authorize } = require('../middleware/auth');

router.post('/register', UserController.register);
router.get('/', protect, authorize(['admin']), UserController.getAll);
router.get('/:id', protect, authorize(['admin']), UserController.getById);
router.put('/:id', protect, authorize(['admin']), UserController.update);
router.delete('/:id', protect, authorize(['admin']), UserController.delete);

// Admin approval endpoints
router.post('/:id/approve', protect, authorize(['admin']), UserController.approveAdmin);
router.post('/:id/reject', protect, authorize(['admin']), UserController.rejectAdmin);

module.exports = router; 