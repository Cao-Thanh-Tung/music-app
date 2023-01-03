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
};
module.exports = service;
