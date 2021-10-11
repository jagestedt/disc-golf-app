const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// Get all users
exports.all = (req, res) => {
  try {
    User.find().then((users) => {
      res.send(users);
    });
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
};

// CREATE
exports.create = async (req, res, next) => {
  const {username, email, admin} = req.body;

  if (!username) {
    return next(new ErrorResponse('You must give the user a name', 400));
  }

  // Create a user
  const user = new User({
    username: username,
    email: email,
    admin: admin ? admin : false,
  });

  // Save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the user.',
      });
    });
};

// GET BY ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({message: `Could not find any user with id: ${id}`});
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({message: `Something went wrong when getting the User with id: ${id}`});
    });
};

// UPDATE a user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'You need to provide data to update',
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `A user with id=${id} could not be updated. Are you sure it's the right id?`,
        });
      } else res.send({message: 'The user was updated successfully.'});
    })
    .catch((err) => {
      res.status(500).send({
        message: `Something went wrong when trying to update the user with id: + ${id}`,
      });
    });
};

// DELETE a user
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`,
        });
      } else {
        res.send({
          message: 'The user was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Something went wrong when trying to delete the user with id: + ${id}`,
      });
    });
};
