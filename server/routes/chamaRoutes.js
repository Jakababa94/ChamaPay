const express = require('express');
const router = express.Router();
const ChamaController = require('../controllers/ChamaController');

router.post('/', ChamaController.create);
router.get('/', ChamaController.getAll);
router.get('/:id', ChamaController.getById);
router.put('/:id', ChamaController.update);
router.delete('/:id', ChamaController.delete);

module.exports = router; 