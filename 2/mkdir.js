var fs=require("fs");

console.log("创建目录");
var i=100;
var _url="C:/Users/webfoss/n_js/2/aaa/";
createDir();
function createDir(){
    _url+="/b1";
    fs.mkdir(_url,function(err){
        if(err){
            return console.error(err);
        }
        i--;
        if(i>0){
            createDir();
        }
        console.log("ok")
    })
}
