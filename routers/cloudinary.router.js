const express = require("express");
const router = express.Router();

const cloudinaryController = require("../controllers/cloudinary.controller");

router.route("/check-image/:fileHash")
  .get(cloudinaryController);

module.exports = router;
