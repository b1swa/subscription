"use strict";
const express = require("express");
let router = express.Router();

router
  .route("/:username")
  .get((req, res) => {
    res.send("hi get /user/" + req.params.username);
  })
  .put((req, res) => {
    res.send("hi put /user/" + req.params.username);
  });

module.exports = router;