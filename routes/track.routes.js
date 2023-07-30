const router = require("express").Router();
const Track = require('../models/Track.model');


// GET route to retrieve details of a specific track by its ID
router.get("/tracklist/:trackId", (req, res) => {
    const { trackId } = req.params;
TracklistModel.findById(trackId)
.then((theTrack) => {
    if (!theTrack) {
        return res.status(404).json({ message: 'Track not found' });
      }
      res.json(theTrack); // Serve the track details as JSON response
    })
    .catch((error) => {
      console.log('Error while retrieving track details: ', error);
      next(error);

        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

 
  
  module.exports = router;
  