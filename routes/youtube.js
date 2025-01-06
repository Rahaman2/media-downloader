const express = require("express");
const router = express.Router();
const { youtube } = require("btch-downloader");
const controller = require("../controller/youtubeController");


router.get("/api/youtube", controller.get);

module.exports = router;