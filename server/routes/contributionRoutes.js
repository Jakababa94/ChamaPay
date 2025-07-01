const express = require('express');
const router = express.Router();
const ContributionController = require('../controllers/ContributionController');

router.post('/', ContributionController.create);
router.get('/', ContributionController.getAll);
router.get('/:id', ContributionController.getById);
router.put('/:id', ContributionController.update);
router.delete('/:id', ContributionController.delete);

module.exports = router; 