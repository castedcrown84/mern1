const Workouts = require('../models/Workouts')

//create a workout & adds it to database
const createWorkout = async(req, res) => {

    try{
        const workoutData = await Workouts.create(req.body)
        res.json(workoutData)
    
    }catch(error){
        res.json({message: error.message})
    }

}

//Get all workouts
const getWorkouts = async(req, res) => {
try{
    const workoutData = await Workouts.find({})
    res.json(workoutData)
}catch(error){
    res.json({message: error.message})
}
}

//Get a single workout
const getWorkout = async(req, res) => {

    const {id} = req.params
    
    try{
       const workoutData = await Workouts.findById(id)
        res.json(workoutData)

    }catch(error){
        res.json(error)

    }
}

module.exports = {createWorkout, getWorkouts, getWorkout}