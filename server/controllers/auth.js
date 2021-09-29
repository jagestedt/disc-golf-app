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

    sendToken(user, 201, res);
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

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
};

exports.forgotPassword = async (req, res, next) => {
  const {email} = req.body;

  try {
    const user = await User.findOne({email});

    if (!user) {
      return next(new ErrorResponse('Email could not be sent'));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `http://localhost:3000/password-reset/${resetToken}`;

    const message = `
        <h1>Here's your link to reset your password</h1>
        <p>Click the link to reset your password</p>
        <a href="${resetUrl}" clicktracking="off">${resetUrl}</a>
    `;

    try {
    } catch (error) {}
  } catch (error) {}
};

exports.resetPassword = (req, res, next) => {
  res.send('resetPassword route');
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({success: true, token});
};
