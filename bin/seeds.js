const mongoose = require("mongoose");
const Tracklist = require("../models/Tracklist.model");

const MONGO_URI = process.env.MONGODB_URI;

const tracks = [
  // PASTE HERE THE LIST OF BOOKS PROVIDED IN THIS GIST: https://gist.github.com/ironhack-edu/2816267a015d4870f95275cb873d33b6
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new documents in the books collection
    return Tracklist.create(tracklist);
  })
  .then((tracklistFromDB) => {
    console.log(`Created ${tracklistFromDB.length} tracklist`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log("DB connection closed!");
  })
  .catch((err) => {
    console.log(`An error occurred while creating tracklist from the DB: ${err}`);
  });
