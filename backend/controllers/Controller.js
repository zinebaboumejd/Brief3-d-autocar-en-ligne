// const asyncHandler = require("express-async-handler");
// const Goal = require("../models/model");
// const User = require("../models/userModel");
// //@route GRT /api
// //@desc get all goals
// //@access public
// const fonctionGet = asyncHandler(async (req, res) => {
//   const goals = await Goal.find({ user: req.user.id });
//   res.status(200).json(goals);
// });

// const fonctionPost = asyncHandler(async (req, res) => {
//   if (!req.body.text) {
//     res.status(400);
//     throw new Error("no text");
//   }
//   const goal = await Goal.create({
//     text: req.body.text,
//     user: req.user.id,
//   });
//   res.status(200).json(goal);
// });

// const fonctionUpdate = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id);
//   if (!goal) {
//     res.status(400);
//     throw new Error("Goal not found");
//   }
//   const user = await User.findById(req.user.id);
//   if (!user) {
//     res.status(401);
//     throw new Error("not autherized no update");
//   }
//   //make sure user loggedin in user matcher the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("not autherized no update");
//   }
//   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   // res.status(200).json(updatedGoal);
// });

// const fonctionDelete = async (req, res) => {
//   const goal = await Goal.findById(req.params.id);
//   if (!goal) {
//     res.status(400);
//     throw new Error("Goal not found");
//   }
//   const user = await User.findById(req.user.id);
//   if (!user) {
//     res.status(401); 
//     throw new Error("not autherized no update");
//   }
//   //make sure user loggedin in user matcher the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("not autherized no update");
//   }
//   await goal.remove();
//    res.status(200).json({id:req.params.id});
// };
// module.exports = {
//   fonctionGet,
//   fonctionPost,
//   fonctionUpdate,
//   fonctionDelete,
// };
