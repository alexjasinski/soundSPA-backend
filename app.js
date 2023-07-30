require("dotenv/config");
require("./db");

const express = require("express");
const app = express();


const { isAuthenticated } = require("./middleware/jwt.middleware");

require("./config")(app);
// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
const configureMiddleware = require("./config");
configureMiddleware(app);

function ignoreFavicon(req, res, next) {
    if (req.originalUrl.includes('favicon.ico')) {
      res.status(204).end()
    }
    next();
  }
  app.use(ignoreFavicon);

// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const searchRoutes = require("./routes/search.routes");
app.use("/api", isAuthenticated, searchRoutes);

const trackRoutes = require("./routes/track.routes");
app.use("/api", isAuthenticated, trackRoutes);

const tracklistRouter = require("./routes/tracklist.routes");
app.use("/api", isAuthenticated, tracklistRouter);

const uploadRouter = require("./routes/upload.routes");
app.use("/api", isAuthenticated, uploadRouter);

const createRouter = require("./routes/create.routes");
app.use("/api", isAuthenticated, createRouter);
// app.use("/api", createRouter);

const readRouter = require("./routes/read.route");
app.use("/api", isAuthenticated, readRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

//To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
