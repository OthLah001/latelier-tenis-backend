const { fetchAllStatistics } = require("../services/statistics.service");


const getAllStatistics = (req, res, next) => {
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
