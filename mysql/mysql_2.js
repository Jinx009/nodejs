/**
 * Created by jinx on 7/3/17.
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'xx.sh.cdb.myqcloud.com',
    user     : 'test_user',
    password : 'Jinx0007',
    database : 'base',
    port     :5492

});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
