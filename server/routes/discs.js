// some comment
const DiscSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A username is required'],
  },
  manufacturer: {
    type: String,
  },
  speed: {
    type: Number,
  },
});
