const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // Bearer 54542efey.THIS.IS.THE.TOKEN.a56das2d4
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse('Not authorized for this route', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse('No user with that id', 404));
    }

    req.user = user;

    next();
  } catch (error) {
    return next(new ErrorResponse(`Something went wrong, your'e not authorized for this route`, 404));
  }
};
