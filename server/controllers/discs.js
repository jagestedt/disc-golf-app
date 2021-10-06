const Disc = require('../models/Disc');
const ErrorResponse = require('../utils/errorResponse');

// Get all discs
exports.all = (req, res) => {
  try {
    Disc.find().then((users) => {
      res.send(users);
    });
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
};

// Create
exports.create = async (req, res, next) => {
  const {name, manufacturer, description, speed, inBag} = req.body;

  if (!name) {
    return next(new ErrorResponse('You must give the disc a name', 400));
  }

  // Create a Disc
  const disc = new Disc({
    name: name,
    description: description,
    manufacturer: manufacturer,
    inBag: inBag ? inBag : false,
  });

  // Save Tutorial in the database
  disc
    .save(disc)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the disc.',
      });
    });
};
