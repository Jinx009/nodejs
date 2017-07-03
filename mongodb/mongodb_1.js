/**
 * Created by jinx on 7/3/17.
 */

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/jinx';
/*数据库为 runoob*/

var insertData = function (db, callback) {
    //连接到表 tbl_jinx
    var collection = db.collection('tbl_jinx');
    //插入数据
    var data = [{"name": "test_name", "url": "test"}, {"name": "test_name_2", "url": "test"}];
    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功！");
    insertData(db, function (result) {
        console.log(result);
        db.close();
    });
});
