const service = require("../service/Service");
const OtherController = {
  rentRequest(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = res.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      if (service.isExistRoom(serviceInfo)) {
        service.createRentRequest(userInfo, serviceInfo);
        res.send(service.SuccessCode);
        res.end();
        return;
      }
    }
    res.send(service.FailCode);
    res.end();
  },
};
module.exports = OtherController;
