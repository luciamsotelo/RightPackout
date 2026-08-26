const express = require('express');
const router = express.Router();
const assistanceController = require('../controllers/assistanceController');

router.post('/assistance', assistanceController.createAssistanceRequest);

module.exports = router;
