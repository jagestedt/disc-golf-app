const Disc = require('../models/Disc');
const ErrorResponse = require('../utils/errorResponse');

// GET ALL discs
exports.all = (req, res) => {
  try {
    Disc.find().then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
};

// CREATE
exports.create = async (req, res, next) => {
  const {name, manufacturer, comment, speed, glide, turn, fade, inBag} = req.body;

  if (!name) {
    return next(new ErrorResponse('You must give the disc a name', 400));
  }

  // Create a Disc
  const disc = new Disc({
    name: name,
    manufacturer: manufacturer,
    comment: comment,
    speed: speed,
    glide: glide,
    turn: turn,
    fade: fade,
    inBag: inBag ? inBag : false,
  });

  // Save disc in the database
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

// GET BY ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Disc.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({message: `Could not find any disc with id: ${id}`});
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({message: `Something went wrong when getting the disc with id: ${id}`});
    });
};

// UPDATE a disc
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'You need to provide data to update',
    });
  }

  const id = req.params.id;

  Disc.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `A disc with id=${id} could not be updated. Are you sure it's the right id?`,
        });
      } else res.send({message: 'The disc was updated successfully.'});
    })
    .catch((err) => {
      res.status(500).send({
        message: `Something went wrong when trying to update the disc with id: + ${id}`,
      });
    });
};

// DELETE a disc
exports.delete = (req, res) => {
  const id = req.params.id;

  Disc.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete disc with id=${id}. Maybe disc was not found!`,
        });
      } else {
        res.send({
          message: 'The disc was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Something went wrong when trying to delete the disc with id: + ${id}`,
      });
    });
};
