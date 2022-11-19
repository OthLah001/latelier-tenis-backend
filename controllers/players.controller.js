const { fetchAllPlayers } = require("../services/players.service");


const getAllPlayers = (req, res, next) => {
  try {
    const players = fetchAllPlayers();
    res.status(200).json(players);
  } catch (err) {
    next(
      new Error("Error occurred while fetching players")
    );
  }
};


module.exports = {
  getAllPlayers
};