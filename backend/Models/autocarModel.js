const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const autocarSchema=new Schema({
   type:{
        type:String,
        required:[true,'entrez le type de voyage']
    },
    prix:{
        type:Number,
        required:[true,'entrez le prix']
    },
    dateDepart:{
        type:Date,
        required:[true,'entrez la date de depart']
    },
    dateRetour:{
        type:Date,
        required:[true,'entrez la date de retour']
    },
    origin:{
        type:String,
        required:[true,'entrez la ville de depart']
    },
    destination:{
        type:String,
        required:[true,'entrez la ville d arrivee']
    },
    
    nombreplace:{
        type:Number,
        required:[true,'entrez le nombre de place']
    },
},
    {timestamps:true}
 );
    //model est une classe
    //schema est un objet
    module.exports=mongoose.model('autocar',autocarSchema);
    
       
    
    