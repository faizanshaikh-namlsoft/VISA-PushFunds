// routes/visaRoutes.js
const express = require('express');
const { pushFunds } = require('../controllers/visaController');

const router = express.Router();

router.post('/pushfunds', pushFunds);

module.exports = router;
