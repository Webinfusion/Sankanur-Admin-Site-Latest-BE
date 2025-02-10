const express = require('express');
const router = express.Router();

const eventController = require("../controllers/events.controller");

router.route('/pre')
.get(eventController.getAllPreEvents);

router.route('/post')
.get(eventController.getAllPostEvents);

router.route('/get-pre-event/:event_num')
.get(eventController.getOnePreEvent)

router.route('/get-post-event/:event_num')
.get(eventController.getOnePostEvent)

router.route('/update/:event_type')
.post(eventController.updateEvent)

router.route('/insert/:table')
.post(eventController.insertEvent)

// router.route('/*')
// .get(eventController.getAllPostEvents);

module.exports = router;