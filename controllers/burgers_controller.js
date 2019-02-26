var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.select(function(data) {
      res.render("index", {burger: data});
    });
  });
  
router.post("/api/burgers", function(req, res) {
  burger.insert(burger: {
                            name: req.body.name,
                            eaten: false
                        },
    function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition ", condition);

  burger.update(burger : {name: req.body.name}, function(result) {
    res.json(result)
    })
});
