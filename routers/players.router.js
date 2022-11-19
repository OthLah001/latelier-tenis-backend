const express = require("express");
const { getAllPlayers } = require("../controllers/players.controller");


router = express.Router()

router.get("/players", getAllPlayers);


module.exports = router;