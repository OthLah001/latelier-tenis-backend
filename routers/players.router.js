const express = require("express");
const { getAllPlayers, getPlayerById } = require("../controllers/players.controller");


router = express.Router()

router.get("/players", getAllPlayers);
router.get("/player/:id", getPlayerById);


module.exports = router;