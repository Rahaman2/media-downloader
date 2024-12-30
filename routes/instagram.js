const express = require("express");
const router = express.Router();
const { igdl } = require("btch-downloader");
const controller = require("../controller/instagramController")

router.get("/api/instagram", controller.get);

module.exports = router