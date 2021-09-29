const {request} = require('express');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.register = async (req, res, next) => {
  const {username, email, password} = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const {email, password} = req.body;

  if (!email || !password) {
    return next(new ErrorResponse('Enter email and password', 400));
  }
  try {
    const user = await User.findOne({email}).select('+password');

    if (!user) {
      return next(new ErrorResponse('No user with that email', 401));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse('Wrong login credentials', 401));
    }

    res.status(200).json({
      success: true,
      token: 'tr34f3443fc',
    });
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
};

exports.forgotPassWord = (req, res, next) => {
  res.send('forgotPassWord route');
};

exports.resetPassword = (req, res, next) => {
  res.send('resetPassword route');
};
