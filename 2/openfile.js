var fs=require("fs");

console.log("ready");
fs.open('../1/input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功");
    console.log(fd)
})