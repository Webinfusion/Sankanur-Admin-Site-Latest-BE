const express = require('express');
const router = express.Router();

const admissionFormController = require("../controllers/admissionForm")

router.route('/')
.post(admissionFormController.generatePDF);

module.exports = router;