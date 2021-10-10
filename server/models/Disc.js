const mongoose = require('mongoose');

const DiscSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name is required'],
  },
  manufacturer: {
    type: String,
    required: [true, 'All fields must me filled'],
  },
  comment: {
    type: String,
    required: [true, 'All fields must me filled'],
  },
  //   ratings: {
  //     speed: Number,
  //     glide: Number,
  //     turn: Number,
  //     fade: Number,
  //   },
  speed: {
    type: Number,
    required: [true, 'All fields must me filled'],
  },
  glide: {
    type: Number,
    required: [true, 'All fields must me filled'],
  },
  turn: {
    type: Number,
    required: [true, 'All fields must me filled'],
  },
  fade: {
    type: Number,
    required: [true, 'All fields must me filled'],
  },
});

const Disc = mongoose.model('Disc', DiscSchema);

module.exports = Disc;
