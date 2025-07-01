const express = require('express');
const router = express.Router();
const LoanController = require('../controllers/LoanController');

router.post('/', LoanController.create);
router.get('/', LoanController.getAll);
router.get('/:id', LoanController.getById);
router.put('/:id', LoanController.update);
router.delete('/:id', LoanController.delete);

module.exports = router; 