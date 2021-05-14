const router = require('express').Router();
const mongoose = require("mongoose");
const Workout = require("../models/workout");


router.get('/api/workouts', (req, res) => {
    Workout.find().then((results) => {
      res.json(results);
    })  
      .catch((error)=> {
        res.json(error);
      })
});

module.exports = router;