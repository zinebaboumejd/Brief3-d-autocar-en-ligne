const express = require('express');

// const colors=require('colors');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getMe
}=require('../controllers/userController');
const {protect}=require('../middleware/authMiddlleware');
router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/me',protect,getMe);
module.exports = router;
