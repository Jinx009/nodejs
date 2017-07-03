/**
 * Created by jinx on 7/3/17.
 */
var express = require('express')
    , routes = require('./routes_demo')
    , http = require('http')
    , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

routes(app);
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});