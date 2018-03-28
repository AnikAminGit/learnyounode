var fs=require("fs");
var fp=process.argv[2];
var buffer=fs.readFileSync(fp);
var store= buffer.toString();
var arr=store.split('\n');
console.log(arr.length-1);