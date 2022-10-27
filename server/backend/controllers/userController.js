const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Reservation=require('../models/reservationModel');
const Voyage=require('../models/voyageModel');
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
    res.status(200).json({
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


// fonction reservation
const AjouterReservation=asyncHandler(async(req,res)=>{
    const {nombresiege,idvoyage,iduser}=req.body;
    const reservationexists=await Reservation.findOne({idvoyage,iduser});
    //check if reservation exists
    if(reservationexists){
        res.status(400)
        throw new Error('Vous avez deja reserver ce voyage')
    }
    const reservation=await Reservation.create({
        nombresiege,
        idvoyage,
        iduser
    });
    if(reservation){
        res.status(201).json({
            _id:reservation.id,
            nombresiege:reservation.nombresiege,
            idvoyage:reservation.idvoyage,
            iduser:reservation.iduser
        })
    }else{
        res.status(400)
        throw new Error('Invalid reservation data')
    }
})
// fonction afficher reservation
const AfficherReservation=asyncHandler(async(req,res)=>{
    const reservation=await Reservation.find({});
    res.json(reservation);
})
// fonction afficher reservation par id
const AfficherReservationById=asyncHandler(async(req,res)=>{
    const reservation=await Reservation.findById(req.params.id);
    res.json(reservation);
})
// fonction modifier reservation par id
const ModifierReservation=asyncHandler(async(req,res)=>{
    const {nombresiege}=req.body;
    const reservation=await Reservation.findById(req.params.id);
    if(reservation){
        reservation.nombresiege=nombresiege;
        const updatedReservation=await reservation.save();
        res.json(updatedReservation);
    }else{
        res.status(404)
        throw new Error('Reservation not found')
    }
})

// fonction supprimer reservation
const SupprimerReservation=asyncHandler(async(req,res)=>{
    const reservation=await Reservation.findById(req.params.id);
    if(reservation){
        await reservation.remove();
        res.json({message:'Reservation removed'});
    }else{
        res.status(404)
        throw new Error('Reservation not found')
    }
})

// recherche voyage par destination ou origine ou date ou les trois find()
const RechercheVoyage=asyncHandler(async(req,res)=>{
    const {destination,origine,date}=req.body;
    const voyage=await Voyage.find({destination,origine,date});
    res.json(voyage);
})


// generate token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
    
}

module.exports={
    registerUser ,
    loginUser,
    getMe,
    AjouterReservation,
    AfficherReservation,
    AfficherReservationById,
    ModifierReservation,
    SupprimerReservation,
    RechercheVoyage

}