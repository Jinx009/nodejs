/**
 * Created by jinx on 6/28/17.
 */
var buf = new Buffer('www.qq.com');
var json = buf.toJSON(buf);

console.log(json);