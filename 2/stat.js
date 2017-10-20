var fs=require("fs");

console.log("ready");
fs.stat('../1',function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("success");

    console.log(stats.isFile());
    console.log(stats.isDirectory());


})