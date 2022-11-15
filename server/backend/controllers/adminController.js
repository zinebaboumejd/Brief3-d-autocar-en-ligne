
const asyncHandler = require('express-async-handler');
const errorHandler=require('../middleware/errormiddleware');

const Car = require('../models/autocarModel');
const Voyage = require('../models/voyageModel');
const User = require('../models/userModel');
const multer  = require('multer');
const path = require('path');
const { response } = require('express');
const { error } = require('console');
const AfficherUsers=asyncHandler(async(req,res)=>{
    const users=await User.find({});
    res.json(users);
}
)
// const storage=multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null,'uploads/')
//   },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+path.extname(file.originalname))
//         }
// })
// const upload=multer({storage:storage})

// fonction ajouter un autocar
const AjouterCar=asyncHandler(async(req,res,next)=>{
//    let car=new Car({
//       matricule:req.body.matricule, 
//      nombreplace:req.body.nombreplace,
//      nomcar:req.body.nomcar,      
//     })  
//     if(req.file){
//         car.image=req.file.path;
//     }
//     car.save()
//     .then(response=>{
//         res.json({
//             message:"car added successfully",
//             car:response
//         })
//     })
//     .catch(error=>{
//         res.json({
//             message:"an error occured"
//         })
//     })

   

   
    
    const {matricule,nombreplace,nomcar}=req.body;
    const carexists=await Car.findOne({matricule});

   //check if car exists
    if(carexists){
        res.status(400)
        throw new Error('Cet autocar existe deja')
    }
    const car=await Car.create({
        matricule,
        nombreplace,
        nomcar,
        // image:req.file.path
    });
      if(req.file){
        car.image=req.file.path;
    }
    if(car){
        res.status(201).json({
            _id:car.id,
            matricule:car.matricule,
            nombreplace:car.nombreplace,
            nomcar:car.nomcar,
            img:car.image
            
           
        })
    }else{
        res.status(400)
        throw new Error('Invalid car data')
    }

})

// afficher car 
const AfficherCar=asyncHandler(async(req,res)=>{
    const car=await Car.find({});
    res.json(car);
})

// afficher car par id
const AfficherCarById=asyncHandler(async(req,res)=>{
    const car=await Car.findById(req.params.id);
    if(car){
        res.json(car);
    }else{
        res.status(404);
        throw new Error('car not found');
    }
})

//modifier car
const ModifierCar=asyncHandler(async(req,res)=>{
    const car=await Car.findById(req.params.id);
    if(car){
        car.matricule=req.body.matricule || car.matricule;
        car.nombreplace=req.body.nombreplace || car.nombreplace;
        const updatedcar=await car.save();
        res.json(updatedcar);
    }else{
        res.status(404);
        throw new Error('car not found');
    }
})
// supprimer car
const SupprimerCar=asyncHandler(async(req,res)=>{
    const car=await Car.findById(req.params.id);
    if(car){
        await car.remove();
        res.json({message:'car removed'});
    }else{
        res.status(404);
        throw new Error('car not found');
    }
})

//fonction ajouer voyage
const AjouterVoyage=asyncHandler(async(req,res)=>{

    const{origine,destination,datedepart,datedarrivee,datetimedepart,datetimedarevee,prix,idcar}=req.body;
    const voyage=await Voyage.create({
        origine,
        destination,
        datedepart,
        datedarrivee,  
        datetimedepart,
        datetimedarevee,    
        prix,
        idcar
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
    const voyage=await Voyage.find();
    res.json(voyage);
})
// afficher voyage par id
const AfficherVoyageById=asyncHandler(async(req,res)=>{
    const voyage=await Voyage.findById(req.params.id);
    if(voyage){
        res.json(voyage);
    }else{
        res.status(404);
        throw new Error('voyage not found');
    }
})

// modifier voyage 
const ModifierVoyage=asyncHandler(async(req,res)=>{
    const voyage=await Voyage.findById(req.params.id);
    if(voyage){
        voyage.origine=req.body.origine || voyage.origine;
        voyage.destination=req.body.destination || voyage.destination;
        voyage.datedepart=req.body.datedepart || voyage.datedepart;
        voyage.datedarrivee=req.body.datedarrivee || voyage.datedarrivee;
        voyage.prix=req.body.prix || voyage.prix;
        const updatedvoyage=await voyage.save();
        res.json(updatedvoyage);
    }else{
        res.status(404);
        throw new Error('voyage not found');
    }
})


// app.put('/parkings/:id', (req,res) => {   
//      const id = parseInt(req.params.id)    
//      let parking = parkings.find(parking => parking.id === id)   
//       parking.name =req.body.name,  
//         parking.city =req.body.city,  
//           parking.type =req.body.type,  
//             res.status(200).json(parking)
//         })

// supprimer voyage
const SupprimerVoyage=asyncHandler(async(req,res)=>{
    const voyage=await Voyage.findById(req.params.id);
    if(voyage){
        await voyage.remove();
        res.json({message:'voyage removed'});
    }else{
        res.status(404);
        throw new Error('voyage not found');
    }
})
module.exports={AjouterCar,AjouterVoyage,AfficherVoyage,
    AfficherCar,ModifierVoyage,SupprimerVoyage,
    SupprimerCar,AfficherCarById,AfficherVoyageById,ModifierCar
    ,AfficherUsers}