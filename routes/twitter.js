const express = require("express");
const router = express.Router();
const { twitter } = require("btch-downloader");
const controller = require("../controller/twitterController")

router.get("/api/twitter", controller.get);

module.exports = router