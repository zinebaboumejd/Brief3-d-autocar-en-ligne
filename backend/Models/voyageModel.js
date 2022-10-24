const mongoose = require('mongoose');
// const schema=mongoose.Schema;
const voyageSchema=mongoose.Schema({
    origine:{
        type:String,
        required:[true,'entrez origine']
    },
    destination:{
        type:String,
        required:[true,'entrez destination']
    },
    datedepart:{
        type:String,
        required:[true,'entrez date depart']
    },
    datedarrivee:{
        type:String,
        required:[true,'remplire votre date arrivee']
    },
    prix:{
        type:Number,
        required:[true,'entrez prix']
    },
    // ajouter forign key idcar
    idcar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'autocar'
    }
  
    },{timestamps:true}
);
module.exports=mongoose.model('voyage',voyageSchema);