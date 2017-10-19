var events=require('events');
var eventEmitter=new events.EventEmitter();

//创建事件处理程序
var connectHander=function connected(){
    console.log('连接成功。');

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHander);

eventEmitter.on('data_received',function(){
    console.log('数据接收成功。');
})

eventEmitter.emit('connection');
console.log("完成")



