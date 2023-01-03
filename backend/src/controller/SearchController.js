const service = require("../service/Service");
const SearchController = {
  search(req, res) {
    filterInfo = req.body;
    res.send(service.getShortInfo(filterInfo));
    res.end();
  },
  showDetailInfo(req, res) {
    conditionInfo = req.body;
    req.send(service.getFullInfo(conditionInfo));
  },
};
module.exports = SearchController;
