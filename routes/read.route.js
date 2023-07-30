const router = require("express").Router();
const Track = require("../models/Track.model.js");

router.get("/tracklist", (req, res, next) => {
  Track.find({})
    .then((tracks) => {
      res.status(200).json(tracks);
    })
    .catch((err) => next(err));
});

module.exports = router;
