const router = require('express').Router();

router.get('/workouts', (req, res) => {
    Workout.find().then((results) => {
      res.json(results);
    })  
      .catch((error)=> {
        res.json(error);
      })
});