const express = require("express");
const app = express();

const allRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const preapareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/", allRoutes);
  app.listen(3000, () => {
    console.log("Server is listening");
  });
};

preapareAndStartServer();
