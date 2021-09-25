exports.register = (req, res, next) => {
  res.send('register route');
};

exports.login = (req, res, next) => {
  res.send('login route');
};

exports.forgotPassWord = (req, res, next) => {
  res.send('forgotPassWord route');
};

exports.resetPassword = (req, res, next) => {
  res.send('resetPassword route');
};
