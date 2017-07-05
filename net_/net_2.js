/**
 * Created by jinx on 7/5/17.
 */
const net = require('net');
console.log(net.isIP('1'));
console.log(net.isIP('192.168.1.3'));
console.log(net.isIPv6('192.168.1.3'));