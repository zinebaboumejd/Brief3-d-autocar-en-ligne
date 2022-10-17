const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GoalSchema = new Schema({
    text: {
        type: String,
        required: [true,'Message:Please add some text']
    },  
},
 { timestamps: true });
module.exports = mongoose.model('Goal', GoalSchema);