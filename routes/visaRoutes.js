// routes/visaRoutes.js
const express = require('express');
const router = express.Router();
const { pushFunds, getPushFundsStatus } = require('../controllers/visaController');

router.post('/pushfunds', pushFunds);
router.get('/pushfunds/:statusIdentifier', getPushFundsStatus);

module.exports = router;
