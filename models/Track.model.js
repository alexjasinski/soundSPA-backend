const mongoose = require('mongoose');
const { Schema } = mongoose;

const trackSchema = new Schema({
  trackTitle: { type: String, required: true },
  artistName: { type: String, required: true },
  // audioURL: { type: String, required: true }
  // Add other fields as needed
});

module.exports = mongoose.model('Track', trackSchema);