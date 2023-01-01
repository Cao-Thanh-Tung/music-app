const service = require("../service/Service");
const RegisterController = {
  register(req, res) {
    let phone = req.body.phone;
    if (service.checkPhoneFormat(phone) && !service.isUsedPhone(phone)) {
      if (service.saveUser()) res.send(service.SuccessCode);
      else {
        res.send(service.ServerErrorCode);
        res.end();
      }
    } else {
      res.send(service.FailCode);
    }
    res.end();
  },
};
module.exports = RegisterController;
