const service = require("../service/Service");
const LoginController = {
  login(req, res, next) {
    let phone = req.body.phone;
    if (service.checkPhoneFormat(phone)) {
      if (service.checkUser(phone, password)) {
        let loginInfo = service.getUser(phone, password);
        res.send(loginInfo);
        res.end();
      }
    } else {
      res.send(service.FailCode);
      res.end;
    }
  },
};
module.exports = LoginController;
