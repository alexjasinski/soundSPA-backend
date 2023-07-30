const router = require("express").Router();
const Track = require("../models/Track.model.js");

router.post("/createTrack", (req, res, next) => {
    console.log("body: ", req.body);
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
  
    Track.create(req.body)
      .then((createdTrack) => {
        console.log("Created new track: ", createdTrack);
        res.status(200).json(createdTrack);
      })
      .catch((err) => next(err));
  });

  
module.exports = router;