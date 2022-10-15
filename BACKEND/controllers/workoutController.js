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

    const workoutData = await Workouts.find({})
    res.json(getWorkouts)


}


module.exports = {createWorkout, getWorkouts}