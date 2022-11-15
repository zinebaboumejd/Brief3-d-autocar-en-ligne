const path =require("path");
const multer = require("multer");
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    //    let uploadfile=require('uploads/')
        cb(null,path.join(__dirname,'../uploads/'))
    },
    filename:(req,file,cb)=>{
        let ext=path.extname(file.originalname);
        cb(null,Date.now()+ext);
    }

})
var upload=multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=="image/jpeg" ||
         file.mimetype=="image/png" || 
         file.mimetype=="image/jpg"){
            cb(null,true);
        }else{
            console.log("png file supported")
            cb(null,false);
        }
    },
    limits:{
        fileSize:1024*1024*2
    }
});

module.exports=upload;
