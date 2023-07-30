const mongoose = require('mongoose');
const { Schema } = mongoose;

const tracklistSchema = new Schema({
  trackTitle: { type: String, required: true },
  rtistName: { type: String, required: true },
  // audioURL: { type: String, required: true },
  // Add other fields as needed
});

module.exports = mongoose.model('Tracklist', tracklistSchema); 
