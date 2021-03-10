"use strict";
const express = require("express");
let router = express.Router();

router
  .route("/")
  .post((req, res) => {
    res.send("hi post /things/cars", req);
  });

router
  .route("/:username")
  .get((req, res) => {
    res.send("hi get /subscription/username" + req.params.username);
  });

router
  .route("/:username/:date?")
  .get((req, res) => {
    res.send("hi get /subscription/username/date" + req.params.username);
  })



module.exports = router;