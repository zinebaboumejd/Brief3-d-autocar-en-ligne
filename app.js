// creation sever
const express = require('express');
const colors=require('colors');
 const { default: mongoose } = require('mongoose');
const { errorHandler } = require('./middleware/errormiddleware')
const connectDB =require('./config/db');
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
//routes
// app.get('/api/goats', (req, res) => {    
//     res.status(200).json({message:'welcome to /api/goats'});
// }); 

app.use('/api', require('./routes/Routes'));
app.use(errorHandler)
//listenig port
app.listen(port, () => console.log(`server is running ${port}`));

