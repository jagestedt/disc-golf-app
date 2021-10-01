const User = require('../models/User');

exports.all = (req, res) => {
  try {
    User.find().then((users) => {
      res.send(users);
    });
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
};
