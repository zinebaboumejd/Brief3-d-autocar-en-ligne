const asyncHandler=require('express-async-handler');
const Goal=require('../models/model');
//@route GRT /api
//@desc get all goals
//@access public
const fonctionGet=asyncHandler(async(req,res)=>{
    const goals=await Goal.find();
    res.status(200).json(goals);
})

const fonctionPost=asyncHandler(async(req,res)=>{
  if(!req.body.text){
      res.status(400)
      throw new Error('no text')
  }
    const goal=await Goal.create({
      text:req.body.text
    });
    res.status(200).json(goal);
})  

const fonctionUpdate=asyncHandler(async(req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
       res.status(400)
       throw new Error('Goal not found')
    }
    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id, req.body, {
       new: true,
    })
    res.status(200).json(updatedGoal);
})
const fonctionDelete=(async(req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
       res.status(400)
       throw new Error('Goal not found')
    }
    await goal.remove();
    res.status(200).json({id:req.params.id});
})
module.exports = {
    fonctionGet
    ,fonctionPost
    ,fonctionUpdate
    ,fonctionDelete
}