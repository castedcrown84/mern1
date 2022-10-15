const router = require('express').Router();
const Workouts = require('../models/Workouts');
const {createWorkout, getWorkouts} = require('../controllers/workoutController')


//Get all workouts
router.get("/", getWorkouts)

//Get a single workout
router.get("/workout/:id", async(req, res) => {
    try{

        const workoutData = await Workouts.findOne(req.params.id)
        res.json(workoutData)

    }catch(err){

        res.json({message: err.message})
    }
})

router.post('/', createWorkout)
  
router.delete('/:', (req, res) => {
    res.json({message: 'deleted'})
})


router.patch("/:", (req, res) => {
    res.json({message: 'updated'})
})

module.exports = router;