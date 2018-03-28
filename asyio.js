var fs=require("fs");
var fp=process.argv[2];

fs.readFile(fp,function callback(err,data){
    if(err){return err}
    var store= data.toString();
    var arr=store.split('\n');
    
    console.log(arr.length-1);
});