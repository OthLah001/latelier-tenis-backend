const { fetchAllPlayers, fetchPlayerById } = require("../services/players.service");


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

const getPlayerById = (req, res, next) => {
  try {
    const id = req.params.id;

    if (isNaN(id)) {
      throw new Error("Invalid ID");
    }

    const player = fetchPlayerById(id);
    res.status(200).json(player || null);
  } catch (err) {
    next(
      new Error("Error occurred while fetching the player")
    );
  }
}


module.exports = {
  getAllPlayers,
  getPlayerById
};