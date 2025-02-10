const express = require('express');
const router = express.Router();

const admissionsController = require("../controllers/admissions.controller");

router.route('/')
.get(admissionsController.getAdmissions);

router.route('/:id')
.get(admissionsController.getAdmissionById)
.delete(admissionsController.deleteAdmissionForm)

module.exports = router;