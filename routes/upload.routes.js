const router = require("express").Router();
const Track = require("../models/Track.model.js");
const fileUpload = require("../config/cloudinary.config");
// const fs = require("fs");
const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

router.post("/upload", fileUpload.single("audioURL"), (req, res, next) => {
  if (!req.file) {
    next(new Error("File not found"));
    return;
  }

  res.json({ fileUrl: req.file.path });
});
//  res.json({ file: req.file.path });

module.exports = router;
