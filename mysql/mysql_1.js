var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'xx.sh.cdb.myqcloud.com',
    user     : 'test_user',
    password : 'Jinx0007',
    port: '5492',
    database: 'base',
});

connection.connect();

var  sql = 'SELECT * FROM HOME_USER';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();
