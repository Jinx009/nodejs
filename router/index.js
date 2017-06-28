/**
 * Created by jinx on 6/28/17.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);