// creation sever
const express = require('express');
const colors=require('colors');
 const { default: mongoose } = require('mongoose');
const { errorHandler } = require('./backend/middleware/errormiddleware');
const connectDB =require('./backend/config/db');
const doten=require('dotenv').config();
const port=process.env.PORT || 3000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// connection to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('connected to DB')

);
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//app.use('/api', require('./backend/routes/routes'));
app.use('/api/users', require('./backend/routes/userRoute'));
app.use(errorHandler)
//listenig port
app.listen(port, () => console.log(`server is running ${port}`));

