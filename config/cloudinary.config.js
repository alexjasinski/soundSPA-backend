const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  // cloudinary: cloudinary,
  cloudinary,
  params: {
    allowed_formats: [
      "aac",
      "aiff",
      "amr",
      "flac",
      "m4a",
      "mp3",
      "ogg",
      "opus",
      "wav",
    ],
    folder: "tracks", // The name of the folder in cloudinary
    resource_type: "raw",
  },
});
const fileUpload = multer({ storage });
//                     storage: storage
// module.exports = multer({ storage });
module.exports = fileUpload;
