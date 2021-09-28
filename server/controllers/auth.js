const User = require('../models/User');

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
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const {email, password} = req.body;

  if (!email || !password) {
    res.status(400).json({success: false, error: 'Enter email and password'});

    try {
      const user = await User.findOne({email}).select('+password');

      if (!user) {
        res.status(404).json({success: false, error: 'No user with that email, enter correct information'});
      }

      const isMatch = await user.matchPasswords(password);

      if (!isMatch) {
        res.status(404).json({success: false, error: 'Wrong login credentials'});

        res.status(200).json({success: true, token: '535432f54ga3'});
      }
    } catch (error) {
      res.status(500).json({success: false, error: error.message});
    }
  }
};

exports.forgotPassWord = (req, res, next) => {
  res.send('forgotPassWord route');
};

exports.resetPassword = (req, res, next) => {
  res.send('resetPassword route');
};
