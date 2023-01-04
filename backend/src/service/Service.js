const { createGroup } = require("../controller/GroupController");

const service = {
  SuccessCode: 1,
  ServerErrorCode: 2,
  FailCode: 3,
  checkPhoneFormat(phone) {
    let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return pattern.test(phone);
  },
  isUsedPhone(phone) {
    return false;
  },
  saveUser(phone, name, pass) {
    return true;
  },
  checkUser(phone, password) {
    return true;
  },
  getUser(phone, password) {
    return "jwt";
  },
  // search request
  getShortInfo(conditionInfo) {
    return [];
  },
  getFullInfo(conditionInfo) {
    return {};
  },
  validateUser(userInfo) {
    return true;
  },
  // Group controller
  createGroup(info) {},
  isExistGroup(serviceInfo) {
    return true;
  },
  isFullGroup(serviceInfo) {
    return false;
  },
  createJoinRequest(userInfo, serviceInfo) {},
  getGroupInfo(groupID) {
    return {};
  },
  isUserInGroup(userInfo, serviceInfo) {
    return true;
  },
  deleteUserFromGroup(userInfo, serviceInfo) {},
  isLead(userInfo, serviceInfo) {
    return true;
  },
  deleteGroup(serviceInfo) {},
  isExistJoinRequest(userInfo, serviceInfo) {
    return true;
  },
  addMember(serviceInfo) {},
  isExistRoom(serviceInfo) {
    return true;
  },
  createGroupRentRequest(serviceInfo) {},

  //Host controller
  createRoom(serviceInfo) {},
  updateRoom(serviceInfo) {},
  deleteRoom(serviceInfo) {},
  isHost(userInfo, serviceInfo) {
    return true;
  },
  rentResponse(userInfo, serviceInfo) {},
  //Other controller
  createRentRequest(userInfo, serviceInfo) {},
};
module.exports = service;
