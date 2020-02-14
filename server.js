const express = require("express");
const env = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connect = require("./config/db");

// Load environment variables
env.config({ path: "./config/config.env" });

// Connect to database
connect();

// Route files
const bootcamps = require("./routes/bootcamp");

const app = express();

// Dev Logging middleware
process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle Unhandled Rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled Rejection : ${err.message}`.red);
  // Close Server
  server.close(() => process.exit(1));
});
