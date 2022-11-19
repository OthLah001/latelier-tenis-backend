const player2 = {
  "id": 52,
  "firstname": "Novak",
  "lastname": "Djokovic",
  "shortname": "N.DJO",
  "sex": "M",
  "country": {
    "picture": "https://data.latelier.co/training/tennis_stats/resources/Serbie.png",
    "code": "SRB"
  },
  "picture": "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png",
  "data": {
    "rank": 2,
    "points": 2542,
    "weight": 80000,
    "height": 188,
    "age": 31,
    "last": [1, 1, 1, 1, 1]
  }
};

const player1 = {
  "id": 95,
  "firstname": "Venus",
  "lastname": "Williams",
  "shortname": "V.WIL",
  "sex": "F",
  "country": {
    "picture": "https://data.latelier.co/training/tennis_stats/resources/USA.png",
    "code": "USA"
  },
  "picture": "https://data.latelier.co/training/tennis_stats/resources/Venus.webp",
  "data": {
    "rank": 1,
    "points": 1105,
    "weight": 74000,
    "height": 185,
    "age": 38,
    "last": [0, 1, 0, 0, 1]
  }
};

const mockDB = {
  "players": [
    player2,
    player1
  ]
};

jest.mock(
  "../database.json",
  () => mockDB,
  { virtual: true }
);

const { fetchAllPlayers, fetchPlayerById } = require("../services/players.service");

it("Should return all players ranked", () => {
  const allPlayers = fetchAllPlayers();
  const correctResult = [...[player1], ...[player2]];
  expect(allPlayers).toEqual(correctResult);
});

it("Should return the right player", () => {
  const player = fetchPlayerById(player1.id);
  expect(player).toEqual(player1);
});