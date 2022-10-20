const express = require('express');
const router = express.Router();
const {errorHandler} = require('../middleware/errormiddleware');
const {
     fonctionGet 
    ,fonctionPost
    ,fonctionUpdate
    ,fonctionDelete
}=require('../controllers/Controller');
const port=process.env.PORT || 6000;

//routes

router.route('/').get(fonctionGet).post(fonctionPost)
router.route('/:id').put(fonctionUpdate).delete(fonctionDelete)

module.exports = router;