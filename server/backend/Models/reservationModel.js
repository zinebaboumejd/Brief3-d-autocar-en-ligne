const mongoose = require('mongoose');
const schema=mongoose.Schema;
const reservationSchema=new schema({
    nombresiege:{
        type:Number,
        required:[true,'entrez nombre de siege']
    },
    idvoyage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'voyage'
    },
    iduser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

},{timestamps:true}
);

module.exports=mongoose.model('reservation',reservationSchema);