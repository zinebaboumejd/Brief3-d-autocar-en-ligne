const express = require('express');
const router = express.Router();
const {errorHandler} = require('../middleware/errormiddleware');
const {
     fonctionGet 
    ,fonctionPost
    ,fonctionUpdate
    ,fonctionDelete
}=require('../controllers/Controller');
// const port=process.env.PORT || 6000;
const {protect}=require('../middleware/authMiddlleware');

//routes
router.route('/').get(protect,fonctionGet).post(protect,fonctionPost)
router.route('/:id').put(protect,fonctionUpdate).delete(protect,fonctionDelete)

module.exports = router;