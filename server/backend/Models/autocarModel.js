const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const autocarSchema=new Schema({
    matricule:{
        type:String,
        required:[true,'entrez matricule']
    },
    nombreplace:{
        type:Number,
        required:[true,'entrez nombre de place']
    },
    nomcar:{
        type:String,
        required:[true,'entrez nom de car']
    },

    image:{
        Data:Buffer,
        contentType:String
    }
        
 
},
    {timestamps:true}
 );
    //model est une classe
    //schema est un objet
    module.exports=mongoose.model('autocar',autocarSchema);
    
       
    
    