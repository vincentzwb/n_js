var fs=require("fs");
fs.readFile("../1/input.txt",function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(err);
    console.log("异步获取： "+data.toString());
})

var data=fs.readFileSync('../1/input.txt');
console.log("同步"+data.toString());
console.log("ok") 