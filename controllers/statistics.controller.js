const { fetchAllStatistics } = require("../services/statistics.service");


const getAllStatistics = (req, res, next) => {
  // Fetch all statistics and throw error if something wrong happens
  try {
    const statistics = fetchAllStatistics();
    res.status(200).json(statistics);
  } catch (err) {
    next(
      new Error("Error occurred while fetching statistics")
    );
  }
};


module.exports = {
  getAllStatistics
}
