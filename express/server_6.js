/**
 * Created by jinx on 6/28/17.
 */
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(JSON.stringify(req.cookies));
    res.end();
})

app.listen(8081)