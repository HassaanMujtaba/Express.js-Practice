 const asyncHandler = require('express-async-handler')
//@desc Get Goals
// @route GET /api/goals
//@access private
 
const getGoals =asyncHandler( async (req, res)=>{
    res.status(200).json({message:'get goals'})
})


//@desc create Goals
// @route POST /api/goals
//@access private

const postGoals = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please Add Your Goal')
    }
    res.status(200).json({message:'Created goals'})
})

//@desc Edit Goals
// @route PUT /api/goals/:id
//@access private

const putGoals =asyncHandler( async (req, res)=>{
    res.status(200).json({message:`Update goals ${req.params.id}`})
}
)

//@desc Delete Goals
// @route DELETE /api/goals/:id
//@access private

const deleteGoals =asyncHandler( async (req, res)=>{
    res.status(200).json({message:`Delete Goals ${req.params.id}`})
})

module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}