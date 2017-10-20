var fs=require("fs");

console.log("删除")

fs.rmdir("C:/Users/webfoss/n_js/2/c1",function(err){
    if(err){
        return console.error(err);
    }
    console.log("读取目录");
    fs.readdir("C:/Users/webfoss/n_js/2/aaa/",function(err,files){
        if(err){
            return console.error(err);
        }
        files.forEach(function(file){
            console.log(file);
        })
    })



});

