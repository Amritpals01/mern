const asynvHandler = require('express-async-handler')
// desc Get goals
// route GET/api/goals
const getGoals = asyncHandler (async(req , res) => {
    res.status(200).json({message: 'Get goals'})
})

// desc Set goal
// route POST/api/goals
const setGoal = asyncHandler (async(req , res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goal'})
})

// desc Update goals
// PUT Get/api/goals/:id
const updateGoal = asyncHandler (async(req , res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// desc Delete goals
// route DELETE/api/goals/:id
const deleteGoal = asyncHandler (async(req , res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}