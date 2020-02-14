const express = require("express");
const env = require("dotenv");
const morgan = require("morgan");

// Route files
const bootcamps = require("./routes/bootcamp");

// Load environment variables
env.config({ path: "./config/config.env" });

const app = express();

// Dev Logging middleware
process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
