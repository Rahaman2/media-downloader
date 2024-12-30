const express = require("express");
const router = express.Router();
const { fbdown } = require("btch-downloader");
const controller = require("../controller/facebookController")


router.get("/api/facebook", controller.get);

module.exports = router