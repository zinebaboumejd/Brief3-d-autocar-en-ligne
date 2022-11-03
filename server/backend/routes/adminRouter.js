const express = require('express');
// const colors=require('colors');
const router = express.Router();

const {
    AjouterCar,
    AjouterVoyage,
    AfficherVoyage,
    AfficherCar,
    AfficherCarById,
    AfficherVoyageById,
    ModifierCar,
    ModifierVoyage,
    SupprimerCar,
    SupprimerVoyage,
    AfficherUsers

    // logoutUser
}=require('../controllers/adminController');
const {protect,isAdmin}=require('../middleware/authMiddlleware');


router.get('/AfficherUsers',protect,isAdmin,AfficherUsers);
router.post('/AjouterCar',protect,isAdmin,AjouterCar);
router.get('/AfficherCar',protect,isAdmin,AfficherCar);
router.get('/AfficherCar/:id',protect,isAdmin,AfficherCarById);
router.put('/ModifierCar/:id',protect,isAdmin,ModifierCar);
router.delete('/SupprimerCar/:id',protect,isAdmin,SupprimerCar);

router.post('/AjouterVoyage',protect,isAdmin,AjouterVoyage);
router.get('/AfficherVoyage',protect,isAdmin,AfficherVoyage);
router.get('/AfficherVoyage/:id',protect,isAdmin,AfficherVoyageById);
router.put('/ModifierVoyage/:id',protect,isAdmin,ModifierVoyage);
router.delete('/SupprimerVoyage/:id',protect,isAdmin,SupprimerVoyage);





module.exports = router;
