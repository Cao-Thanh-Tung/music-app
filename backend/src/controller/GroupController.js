const service = require("../service/Service");
const GroupController = {
  createGroup(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = req.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      service.createGroup(serviceInfo);
      res.send(service.SuccessCode);
    } else {
      res.send(service.FailCode);
    }
  },
};

module.exports = GroupController;
