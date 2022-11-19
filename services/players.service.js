

const fetchAllPlayers = () => {
  // Mock calling the db
  const players = require("../database.json").players;

  players.sort(
    (p1, p2) => p1.data.rank > p2.data.rank ? 1 : 
      (
        p2.data.rank > p1.data.rank ? -1 : 0
      )
  );
  return players;
};

const fetchPlayerById = (id) => {
  // Mock calling the db
  const players = require("../database.json").players;

  const player = players.find(
    p => p.id == id
  );
  return player;
}


module.exports = {
  fetchAllPlayers,
  fetchPlayerById
};