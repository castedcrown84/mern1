const router = require('express').Router();
const Workouts = require('../models/Workouts')


//Get all workouts
router.get("/", async(req, res) => {
    try{
        const workoutData = await Workouts.find({});
        res.json(workoutData)
    }catch(err){
        res.json(err)
    }
})

//Get a single workout
router.get("/workout/:id", async(req, res) => {
    try{

        const workoutData = await Workouts.findOne(req.params.id)
        res.json(workoutData)

    }catch(err){

        res.json({message: err.message})
    }
})

router.post('/', async (req, res) => {    
    try {
      const workout = await Workouts.create(req.body)
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })
  
router.delete('/:', (req, res) => {
    res.json({message: 'deleted'})
})


router.patch("/:", (req, res) => {
    res.json({message: 'updated'})
})

module.exports = router;