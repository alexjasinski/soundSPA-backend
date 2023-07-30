const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Hello World");
});

/*
router.get("/auth/upload", (req, res, next) => {
  res.json("Upload working");
});
/*
router.get("/track", (req, res, next) => {
  res.json("track also good");
});

router.get("/tracklist", (req, res, next) => {
  res.json("tracklist checked");
});

router.get("/search", (req, res, next) => {
  res.json("search checked");
});
*/

module.exports = router;
