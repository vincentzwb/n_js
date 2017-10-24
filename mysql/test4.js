var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'test',
})

connection.connect();

var modSql='update websites set name=?,url=? where id=?';
var modSqlParams=["菜鸟移动站",'https://m.cainoa.xom',6];

connection.query(modSql,modSqlParams,function(err,result){
    if(err){
        console.log('[update error] - ',err.message);
        return;
    }

    console.log('update affectedRows',result.affectedRows);



})

connection.end();




