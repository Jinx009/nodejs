/**
 * Created by jinx on 6/28/17.
 */
var express = require('express');
var app = require('router');

app.get('/', function (req, res) {
    res.send('Hello World haha');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})