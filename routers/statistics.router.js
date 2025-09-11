const express = require("express");
const { getAllStatistics } = require("../controllers/statistics.controller");

router = express.Router()

router.get("/statistics", getAllStatistics);


module.exports = router;