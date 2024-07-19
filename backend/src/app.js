const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const { PORT } = require("./config/envConfig");

const app = express();
const port = PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Sync models and start the server
db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
