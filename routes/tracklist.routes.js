const router = require("express").Router();
const Track = require("../models/Track.model");

// GET route to retrieve all tracks from the tracklist

router.get("/tracklist", (req, res, next) => {
  Track.find({})
    .then((allTracks) => {
      console.log("Retrieved gallery from DB:", allTracks);

      res.status(200).json(allTracks);
    })
    .catch((error) => {
      console.log("Error while getting the tracks from the DB: ", error);
      next(error);
    });
});

module.exports = router;
