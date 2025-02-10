const express = require('express');
// const { authenticate } = require('../services/comman');
const router = express.Router();

const admissionFormRoutes = require("./admissionForm.router");
const authRoutes = require("./auth.router");
const admissionRoutes = require("./admissions.router");
const eventRoutes = require("./events.router");
const cloudinaryRoutes = require('./cloudinary.router')

// mount user routes at /admission form
router.use('/admissionForm', admissionFormRoutes);
router.use('/auth', authRoutes);
router.use('/admissions', admissionRoutes);
router.use('/events', eventRoutes);
router.use('/cloudinary', cloudinaryRoutes)

// router.use('*', admissionFormRoutes);

// router.get('/*', (req, res) =>
//     res.send('OK')
// );
module.exports = router;