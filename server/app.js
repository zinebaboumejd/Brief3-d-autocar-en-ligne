// creation sever
const express = require('express');
const colors=require('colors');
 const { default: mongoose } = require('mongoose');
const { errorHandler } = require('./backend/middleware/errormiddleware');
const connectDB =require('./backend/config/db');
const doten=require('dotenv').config();
const port=process.env.PORT || 9000;
const multer=require('multer')
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/uploads',express.static('uploads'));
// connection to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('connected to DB')

);


//Ajouter headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
//  app.use('/api', require('./backend/routes/routes'));
app.use('/api/users', require('./backend/routes/userRoute'));
app.use('/api/admin', require('./backend/routes/adminRouter'));

app.use(errorHandler);



//listenig port
app.listen(port, () => console.log(`server is running ${port}`));

