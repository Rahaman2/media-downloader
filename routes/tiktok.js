const express = require("express");
const router = express.Router();
const { ttdl } = require("btch-downloader");
const controller = require("../controller/tiktokController")


router.get("/api/tiktok", controller.get);

module.exports = router