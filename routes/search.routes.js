const router = require("express").Router();

router.get("/tracklist/search", (req, res) => {
  const { searchText } = req.query;
  const searchRegex = new RegExp(searchText, "i");

  TracklistModel.find({
    $or: [
      { title: searchRegex },
      { artist: searchRegex },
    ],
  })
    .then((theTrack) => {
      if (!theTrack || tracks.length === 0) {
        return res.status(404).json({ message: "Track not found" });
      }
      res.json(theTrack); // Serve the track details as JSON response
    })
    .catch((error) => {
      console.log("Error while retrieving track details: ", error);
      next(error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

module.exports = router;
