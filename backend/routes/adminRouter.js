const express = require('express');
// const colors=require('colors');
const router = express.Router();

const {
    AjouterCar,
    AjouterVoyage,
    AfficherVoyage
    // logoutUser
}=require('../controllers/adminController');
const {protect,isAdmin}=require('../middleware/authMiddlleware');





router.post('/AjouterCar',AjouterCar);
router.post('/AjouterVoyage',protect,isAdmin,AjouterVoyage);
router.get('/AfficherVoyage',AfficherVoyage);




module.exports = router;
