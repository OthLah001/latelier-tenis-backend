
const getCountryBigRatio = (winRecords) => {
  let winCountry = {};
  let maxRatio = -1;

  for(const country of Object.values(winRecords)) {
    const newRatio = country.records.reduce((acc, curr) => acc + curr, 0) / country.records.length;
    if (newRatio > maxRatio) {
      maxRatio = newRatio;
      winCountry = country;
    }
  }

  delete winCountry.records;
  return winCountry;
}

const calculateAverageImc = (heights, weights) => {
  const length = heights.length;
  let imcSum = 0;

  for(let i = 0; i < length; i++) {
    imcSum += weights[i] / Math.pow(heights[i], 2);
  }

  return imcSum / length;
}

const calculateHeightsMedian = (heights) => {
  const length = heights.length;
  const middleIdx = Math.floor(length / 2);
  heights.sort();

  return length % 2 == 1 ? heights[middleIdx] : (heights[middleIdx-1]+heights[middleIdx]) / 2;
}

const fetchAllStatistics = () => {
  // Mock calling the db
  const players = require("../database.json").players;

  const heights = [];
  const weights = [];
  const winRecords = {};

  for(const player of players) {
    heights.push(player.data.height);
    weights.push(player.data.weight);

    // get the record of each country in one place
    winRecords[player.country.code] = {
      code: player.country.code,
      records: [...(winRecords[player.country.code]?.records || []), ...player.data.last],
      picture: player.country.picture
    }
  }

  return {
    "averageImc": calculateAverageImc(heights, weights),
    "heightsMedian": calculateHeightsMedian(heights),
    "winCountry": getCountryBigRatio(winRecords)
  }
}


module.exports = {
  fetchAllStatistics
}