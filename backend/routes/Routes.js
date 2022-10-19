const express = require('express');
const router = express.Router();
const {errorHandler} = require('../middleware/errormiddleware');
const {
     fonctionGet 
    ,fonctionPost
    ,fonctionUpdate
    ,fonctionDelete
}=require('../controllers/Controller');
const port=process.env.PORT || 5000;

//routes

// router.get('/api/goals/:id', (req, res) => {
//     res.status(200).json({ message:'get /api/goals/:id'});
// });

router.route('/').get(fonctionGet).post(fonctionPost)
router.route('/:id').put(fonctionUpdate).delete(fonctionDelete)
// router.get('/', fonctionGet ) 
// router.post('/', fonctionPost);
// router.put('/id', fonctionUpdate);
// router.delete('/id', fonctionDelete);

module.exports = router;