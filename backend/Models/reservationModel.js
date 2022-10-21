const mongoose = require('mongoose');
const schema=mongoose.Schema;
const reservationSchema=new schema({
origin:{
type:String,
required:[true,'entrez origine']
},
destination:{
type:String,
required:[true,'entrez destination']
},
datedepart:{
type:Date,
required:[true,'entrez date depart']
},
datedarrivee:{
type:Date,
required:[true,'entrez date arrivee']
},
typevoyage:{
type:Boolean,
required:[true,'entrez le type de voyage']
},
// idvoyage:{
// type:[
// {type:schema.Types.ObjectId,ref:'voyage'}
// ]
// },
},{timestamps:true}
);

module.exports=mongoose.model('reservation',reservationSchema);