var fs=require("fs");

console.log("ready");

fs.writeFile("../1/input.txt","write File",function(err){
    if(err){
        return console.error(err);
    }

    console.log("ok");
    console.log("-----------------------")
    console.log("read data");

    fs.readFile("../1/input.txt",function(err,data){
        if(err){
            return console.log(err);
        }
        console.log("异步 "+data.toString());


    })


})




