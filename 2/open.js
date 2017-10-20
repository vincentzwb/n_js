var fs=require("fs");
var buf=new Buffer(1024);

console.log("ready");

fs.open("input.txt","r+",function(err,fd){
    if(err){
        return console.log(err);
    }
    console.log("file ok");
    console.log("ready");

    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }

        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }


        fs.close(fd,function(err){
            if(err){
                console.log(err);
            }
            console.log("文件关闭")
        })


    })



})




