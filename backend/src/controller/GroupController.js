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
  joinRequest(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = req.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      if (service.isExistGroup(serviceInfo)) {
        if (!service.isFullGroup(serviceInfo)) {
          service.createJoinRequest(userInfo, serviceInfo);
          res.send(service.SuccessCode);
          res.end();
          return;
        }
      }
    }
    res.send(service.FailCode);
    res.end();
  },
  getGroupInfo(req, res) {
    let groupID = req.body.groupID;
    let groupInfo = service.getGroupInfo(groupID);
    res.send(groupInfo);
    res.end();
  },
  outGroup(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = req.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      if (service.isExistGroup(serviceInfo)) {
        if (service.isUserInGroup(serviceInfo)) {
          service.deleteUserFromGroup(userInfo, serviceInfo);
          res.send(service.SuccessCode);
          res.end();
          return;
        }
      }
    }
    res.send(service.FailCode);
    res.end();
  },
  deleteGroup(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = res.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      if (service.isExistGroup(serviceInfo)) {
        if (service.isLead(userInfo, serviceInfo)) {
          service.deleteGroup(serviceInfo);
          res.send(service.SuccessCode);
          res.end();
          return;
        }
      }
    }
    res.send(service.FailCode);
    res.end();
  },
  joinResponse(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = res.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      if (service.isExistGroup(serviceInfo)) {
        if (service.isLead(userInfo, serviceInfo)) {
          if (service.isExistJoinRequest(userInfo, serviceInfo)) {
            service.addMember(serviceInfo);
            res.send(service.SuccessCode);
            res.end();
            return;
          }
        }
      }
    }
    res.send(service.FailCode);
    res.end();
  },
  kickMember(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = res.body.serviceInfo;
    let memberInfo = res.body.memberInfo;
    if (service.validateUser(userInfo)) {
      if (service.isExistGroup(serviceInfo)) {
        if (service.isLead(userInfo, serviceInfo)) {
          if (service.isUserInGroup(memberInfo, serviceInfo)) {
            service.deleteUserFromGroup(memberInfo, serviceInfo);
            res.send(service.SuccessCode);
            res.end();
            return;
          }
        }
      }
    }
  },
  rentRequest(req, res) {
    let userInfo = req.body.userInfo;
    let serviceInfo = res.body.serviceInfo;
    if (service.validateUser(userInfo)) {
      if (service.isExistGroup(serviceInfo)) {
        if (service.isLead(userInfo, serviceInfo)) {
          if (service.isExistRoom(serviceInfo))
            service.createGroupRentRequest(serviceInfo);
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

module.exports = GroupController;
