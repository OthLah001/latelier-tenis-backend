const express = require("express");
const { getAllStatistics } = require("../controllers/statistics.controller");
const routes = "routes";

router = express.Router()

router.get("/statistics", getAllStatistics);


module.exports = router;