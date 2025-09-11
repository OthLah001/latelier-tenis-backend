const getCountryWithBestWinRatio = (winRecords) => {
  let bestCountry = {};
  let maxRatio = -1;

  for(const country of Object.values(winRecords)) {
    // Calculate win ratio with proper validation
    const totalGames = country.records.length;
    if (totalGames === 0) continue;
    
    const winRatio = country.records.reduce((acc, curr) => acc + curr, 0) / totalGames;
    if (winRatio > maxRatio) {
      maxRatio = winRatio;
      bestCountry = { ...country, winRatio };
    }
  }

  // Clean up records from response
  delete bestCountry.records;
  return bestCountry;
}

const calculateAverageBMI = (heights, weights) => {
  if (!heights.length || !weights.length || heights.length !== weights.length) {
    throw new Error('Invalid input: heights and weights arrays must have the same non-zero length');
  }
  
  const length = heights.length;
  let bmiSum = 0;

  for(let i = 0; i < length; i++) {
    // Convert height from cm to meters for BMI calculation
    const heightInMeters = heights[i] / 100;
    bmiSum += weights[i] / Math.pow(heightInMeters, 2);
  }

  return Math.round((bmiSum / length) * 100) / 100; // Round to 2 decimal places
}

const calculateHeightsMedian = (heights) => {
  if (!heights.length) return 0;
  
  // Create a copy to avoid mutating original array
  const sortedHeights = [...heights].sort((a, b) => a - b);
  const length = sortedHeights.length;
  const middleIdx = Math.floor(length / 2);

  return length % 2 === 1 
    ? sortedHeights[middleIdx] 
    : (sortedHeights[middleIdx - 1] + sortedHeights[middleIdx]) / 2;
}

const validatePlayerData = (player) => {
  return player.data && 
         typeof player.data.height === 'number' && 
         typeof player.data.weight === 'number' &&
         Array.isArray(player.data.last) &&
         player.country && 
         player.country.code;
}

const fetchAllStatistics = () => {
  try {
    // Mock calling the database
    const players = require("../database.json").players;
    
    if (!Array.isArray(players)) {
      throw new Error('Players data is not an array');
    }

    const heights = [];
    const weights = [];
    const winRecords = {};

    for(const player of players) {
      // Validate player data before processing
      if (!validatePlayerData(player)) {
        console.warn(`Skipping invalid player data:`, player);
        continue;
      }

      heights.push(player.data.height);
      weights.push(player.data.weight);

      const countryCode = player.country.code;
      
      // Initialize country record if not exists
      if (!winRecords[countryCode]) {
        winRecords[countryCode] = {
          code: countryCode,
          name: player.country.name || countryCode,
          records: [],
          picture: player.country.picture
        };
      }
      
      // Add player's match records to country
      winRecords[countryCode].records.push(...player.data.last);
    }

    const statistics = {
      "averageBMI": calculateAverageBMI(heights, weights),
      "heightsMedian": calculateHeightsMedian(heights),
      "bestWinRatioCountry": getCountryWithBestWinRatio(winRecords),
      "totalPlayers": players.length,
      "countriesCount": Object.keys(winRecords).length
    };

    return statistics;
  } catch (error) {
    console.error('Error fetching statistics:', error.message);
    throw error;
  }
}

module.exports = {
  fetchAllStatistics,
  calculateAverageBMI,
  calculateHeightsMedian,
  getCountryWithBestWinRatio
}