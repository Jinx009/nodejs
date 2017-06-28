/**
 * Created by jinx on 6/28/17.
 */
function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);

var d = setInterval(printHello, 2000);

clearInterval(d);