const express = require('express');
// const colors=require('colors');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getMe,
    AjouterReservation,
    AfficherReservation,
    AfficherReservationById,
    ModifierReservation,
    SupprimerReservation,
    RechercheVoyage,
    AfficherVoyage,
    AfficherVoyageById
    

    // logoutUser
}=require('../controllers/userController');
const {protect}=require('../middleware/authMiddlleware');


router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/me',protect,getMe);
//les operation user
router.post('/AjouterReservation',protect,AjouterReservation);
router.get('/AfficherReservation',protect,AfficherReservation);
router.get('/AfficherReservation/:id',protect,AfficherReservationById);
router.put('/ModifierReservation/:id',protect,ModifierReservation);
router.delete('/SupprimerReservation/:id',protect,SupprimerReservation);
router.post('/RechercheVoyage',RechercheVoyage);
router.get('/AfficherVoyage',AfficherVoyage);
router.get('/AfficherVoyage/:id',AfficherVoyageById);
// route deconnexion
// router.get('/logout',logoutUser);


module.exports = router;

// 