const express = require('express');
const router = express.Router();
const MembershipController = require('../controllers/MembershipController');

router.post('/', MembershipController.create);
router.get('/', MembershipController.getAll);
router.get('/:id', MembershipController.getById);
router.put('/:id', MembershipController.update);
router.delete('/:id', MembershipController.delete);

module.exports = router; 