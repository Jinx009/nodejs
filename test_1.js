/**
 * Created by jinx on 6/28/17.
 */
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");