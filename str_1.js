/**
 * Created by jinx on 6/28/17.
 */
var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.color = 'red';
    this.toString = function() {
        return this.name;
        return this.color;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));