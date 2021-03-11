"use strict";
const express = require("express");
let router = express.Router();
let user = require("../models/user");

router
  .route("/:username")
  .get((req, res) => {
    let response = {
        status: "400"
    }
    let result = user.get(req.params.username);
    if(result){
        response.status = "200"; 
    } 
    res.send(response);
  })
  .put((req, res) => {
    let result = user.add(req.params.username);
    res.send(result);
  });

module.exports = router;