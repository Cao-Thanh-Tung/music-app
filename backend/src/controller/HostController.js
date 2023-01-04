const service = require("../service/Service");
const HostController = {
  postRoom(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = req.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      service.createRoom(serviceInfo);
      res.send(service.SuccessCode);
    } else {
      res.send(service.FailCode);
    }
  },
  updateRoom(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = req.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      service.updateRoom(serviceInfo);
      res.send(service.SuccessCode);
    } else {
      res.send(service.FailCode);
    }
  },
  deleteRoom(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = req.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      service.deleteRoom(serviceInfo);
      res.send(service.SuccessCode);
    } else {
      res.send(service.FailCode);
    }
  },
  rentResponse(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = req.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      if (service.isExistRoom(serviceInfo)) {
        if (service.isHost(userInfo, serviceInfo)) {
          service.rentResponse(userInfo, serviceInfo);
          res.send(service.SuccessCode);
          res.end();
          return;
        }
      }
    }
    res.send(service.FailCode);
    res.end();
  },
};

module.exports = HostController;
