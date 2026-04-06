const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const logs = require("./data");

app.use(cors());
app.use(express.json());

// simple route
app.get("/api/logs", (req, res) => {
  res.json(logs);
});

// health check route
app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(PORT, () => {
  console.log(Server started on port ${PORT});
});