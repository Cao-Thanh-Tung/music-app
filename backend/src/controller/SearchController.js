const service = require("../service/Service");
const SearchController = {
  search(req, res) {
    let filterInfo = req.body;
    res.send(service.getShortInfo(filterInfo));
    res.end();
  },
  showDetailInfo(req, res) {
    let conditionInfo = req.body;
    req.send(service.getFullInfo(conditionInfo));
  },
};
module.exports = SearchController;
