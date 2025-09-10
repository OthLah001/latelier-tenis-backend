const express = require("express");
const { getAllStatistics } = require("../controllers/statistics.controller");
const routes = "routes";
const hello = "hello";
const yes = "yes";

router = express.Router()

router.get("/statistics", getAllStatistics);


module.exports = router;