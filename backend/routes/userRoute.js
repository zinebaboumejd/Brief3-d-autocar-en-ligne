const express = require('express');
// const colors=require('colors');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getMe,

    // logoutUser
}=require('../controllers/userController');
const {protect}=require('../middleware/authMiddlleware');


router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/me',protect,getMe);
// route deconnexion
// router.get('/logout',logoutUser);


module.exports = router;
