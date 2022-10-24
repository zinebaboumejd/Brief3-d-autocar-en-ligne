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
    }

},
    {timestamps:true}
 );
    //model est une classe
    //schema est un objet
    module.exports=mongoose.model('autocar',autocarSchema);
    
       
    
    