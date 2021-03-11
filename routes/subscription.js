"use strict";
const express = require("express");
let router = express.Router();
let subscription = require("../models/subscription");

router
  .route("/")
  .post((req, res) => {
    subscription.add(req.body);
    res.send("hi post /things/cars", 200);
  });

router
  .route("/:username")
  .get((req, res) => {
    subscription.getAll(req.params.username);
    res.send("hi get /subscription/username" + req.params.username);
  });

router
  .route("/:username/:date?")
  .get((req, res) => {
    subscription.get(req.params.username, req.params.date);
    res.send("hi get /subscription/username/date" + req.params.username);
  })



module.exports = router;