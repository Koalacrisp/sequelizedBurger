var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.findAll({}).then(function(results){
    res.render("index", results)
  })
});

module.exports = router;