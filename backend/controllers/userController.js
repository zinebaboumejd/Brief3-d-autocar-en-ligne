const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser=asyncHandler(async(req,res)=>{
    const {nom,prenom,email,password}=req.body;
    if(!nom||!prenom||!email||!password){
        res.status(400)
        throw new Error('Veuillez remplir tous les champs')
    }
    //check if user exists
    const userExists=await User.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error('Cet utilisateur existe deja')
    }
    //hash password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    //create user
    const user=await User.create({
        nom,
        prenom,
        email,
        password:hashedPassword

    });
    if(user){
        res.status(201).json({
            _id:user.id,
            nom:user.nom,
            prenom:user.prenom,
            email:user.email,
            password:user.password,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }

})
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    //check email ans password
   if(user && (await bcrypt.compare(password,user.password))){
    res.status(201).json({
        _id:user.id,
        nom:user.nom,
        prenom:user.prenom,
        email:user.email,
        isAdmin:user.isAdmin,
        // password:user.password,
        token:generateToken(user._id)
    })
   }else{
    res.status(400)
    throw new Error('Invalid email or password')
   }
    // res.json({message:'Login User'});

})
const getMe=asyncHandler(async(req,res)=>{
    const {id,nom,prenom,email}=await User.findById(req.user.id);
    res.status(200).json({
        id,
        nom,
        prenom,
        email
    })
    // res.json({message:'user display'});
})

// generate token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
    
}


// deconection user connecter et supprimer le token
// const logoutUser=asyncHandler(async(req,res)=>{
//     res.clearCookie('token');
//     res.json({
//         message:'User is logout'
//     })
//     // res.redirect('/login');
// })

module.exports={
    registerUser ,
    loginUser,
    getMe,
   
    // logoutUser

}