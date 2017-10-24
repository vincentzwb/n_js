var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'test'
});

connection.connect();

var sql='SELECT * FROM websites';

connection.query(sql,function(err,result){
    if(err){
        console.log('[SELECT ERROR] -',err.message);
        return;
    }


    console.log("---------------------");
    console.log(result);
    console.log("----------22222-----------");
    console.log(sql);
})

connection.end();
