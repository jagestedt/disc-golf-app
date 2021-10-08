const mongoose = require('mongoose');

const DiscSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name is required'],
  },
  manufacturer: {
    type: String,
  },
  description: {
    type: String,
  },
  //   ratings: {
  //     speed: Number,
  //     glide: Number,
  //     turn: Number,
  //     fade: Number,
  //   },
  speed: {
    type: Number,
  },
  glide: {
    type: Number,
  },
  turn: {
    type: Number,
  },
  fade: {
    type: Number,
  },
  inBag: {
    type: Boolean,
  },
});

const Disc = mongoose.model('Disc', DiscSchema);

module.exports = Disc;
