 const asyncHandler = require('express-async-handler')
 const Goal = require('../model/goalsModel')
//@desc Get Goals
// @route GET /api/goals
//@access private
 
const getGoals =asyncHandler( async (req, res)=>{
    const goals = await Goal.find()
    res.status(200).json({message:'get goals', goals})
})


//@desc create Goals
// @route POST /api/goals
//@access private

const postGoals = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please Add Your Goal')
    }

    const goal = await Goal.create({text:req.body.text})
    res.status(200).json({message:'Created goals'})
})

//@desc Edit Goals
// @route PUT /api/goals/:id
//@access private

const putGoals =asyncHandler( async (req, res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
}
)

//@desc Delete Goals
// @route DELETE /api/goals/:id
//@access private

const deleteGoals =asyncHandler( async (req, res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }
    await goal.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}