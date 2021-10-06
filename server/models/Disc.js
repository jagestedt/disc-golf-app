const mongoose = require('mongoose');

const DiscSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A username is required'],
  },
  manufacturer: {
    type: String,
  },
  description: {
    type: String,
  },
  speed: {
    type: Number,
  },
  inBag: {
    type: Boolean,
  },
});

const Disc = mongoose.model('Disc', DiscSchema);

module.exports = Disc;
