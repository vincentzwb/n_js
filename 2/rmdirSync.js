var fs=require('fs');


var rmdirSync=(function(){
    function iterator(url,dirs){
        var stat=fs.statSync(url);
        if(stat.isDirectory()){
            dirs.unshift(url);
            inner(url,dirs);
        }else if(stat.isFile()){
            fs.unlinkSync(url);
        }
    }

    function inner(path,dirs){
        var arr=fs.readdirSync(path);
        for(var i=0,el;el=arr[i++];){
            iterator(path+"/"+el,dirs);
        }
    }

    return function(dir,cb){
        cb=cb||function(){};
        var dirs=[];

        try{
            iterator(dir,dirs);
            console.log(dirs);
            for(var i = 0, el ; el = dirs[i++];){
                fs.rmdirSync(el);//一次性删除所有收集到的目录
            }
            cb()
        }catch(e){//如果文件或目录本来就不存在，fs.statSync会报错，不过我们还是当成没有异常发生
            e.code === "ENOENT" ? cb() : cb(e);
        }
    }



})();

rmdirSync("C:/Users/webfoss/n_js/2/aaa/b1",function(e){
    console.log("!!!"+e)
    console.log("删除aaa目录以及子目录成功")
})













