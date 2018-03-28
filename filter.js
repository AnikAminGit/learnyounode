var fs = require("fs");
var path= require("path");
var ext = process.argv[3];
var dr = process.argv[2];


fs.readdir(dr,function callback(err , data){
    
    if(err){return err}
    for(var i=0;i<data.length;i++){
        if(path.extname(data[i])=="."+ext){
            console.log(data[i]);
        }
    }
})