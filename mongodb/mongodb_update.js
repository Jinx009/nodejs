/**
 * Created by jinx on 7/3/17.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/jinx';

var updateData = function (db, callback) {
    //连接到表
    var collection = db.collection('tbl_jinx');
    //更新数据
    var whereStr = {"name": 'test_name'};
    var updateStr = {$set: {"url": "test_url"}};
    collection.update(whereStr, updateStr, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功！");
    updateData(db, function (result) {
        console.log(result);
        db.close();
    });
});
