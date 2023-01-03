const service = require("../service/Service");
const SearchController = {
  search(req, res) {
    filterInfo = req.body;
    res.send(service.getShortInfo(filterInfo));
    res.end();
  },
};
module.exports = SearchController;
