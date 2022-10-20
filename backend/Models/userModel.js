const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
 nom:{
        type:String,
        required:[true,'entrez votre nom']
    },
    prenom:{
        type:String,
        required:[true,'entrez votre prenom']
    },
    email:{
        type:String,
        required:[true,'entrez votre email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'entrez votre password']
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
);
//model est une classe
//schema est un objet
module.exports=mongoose.model('user',userSchema);
 

