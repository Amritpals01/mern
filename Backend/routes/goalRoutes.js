const express = require('express')
const router = express.Router()
const {getGoals,updateGoal,setGoal,deleteGoal} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router