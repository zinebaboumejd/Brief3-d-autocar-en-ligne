
const asyncHandler = require('express-async-handler');
const errorHandler=require('../middleware/errormiddleware');
const Car = require('../models/autocarModel');
const Voyage = require('../models/voyageModel');
// fonction ajouter un autocar
const AjouterCar=asyncHandler(async(req,res)=>{
    const {matricule}=req.body;
    const carexists=await Car.findOne({matricule});
   //check if car exists
    if(carexists){
        res.status(400)
        throw new Error('Cet autocar existe deja')
    }
    const car=await Car.create({
        matricule
    });
    if(car){
        res.status(201).json({
            _id:car.id,
            matricule:car.matricule,
            // token:generateToken(car._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid car data')
    }


})
//fonction ajouer voyage
const AjouterVoyage=asyncHandler(async(req,res)=>{

    const{origine,destination,datedepart,datedarrivee,prix}=req.body;
    const voyage=await Voyage.create({
        origine,
        destination,
        datedepart,
        datedarrivee,      
        prix
    });
    if(voyage){
        res.status(201).json(voyage)
    }else{
        res.status(400)
        throw new Error('Invalid voyage data')
    }
})
// Afficher les voyages
const AfficherVoyage=asyncHandler(async(req,res)=>{
    const voyage=await Voyage.find({});
    res.json(voyage);
})
module.exports={AjouterCar,AjouterVoyage,AfficherVoyage}