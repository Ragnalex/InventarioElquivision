
const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const InsumosRoute = require("./routes/insumos.route");


//Initialization
const app = express();
require("./database");

//Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));


//Middleware
app.use(express.urlencoded({ extended: false })); //acepta mas que strings formularios
app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
  return res.json({
    message: "error!!",
  });
});


//Routes
app.use("/api/insumos", InsumosRoute)

//Server is listening
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

