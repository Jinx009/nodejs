/**
 * Created by jinx on 7/4/17.
 */
const child = require('child_process').fork('shell_client.js');

// 开启 server 对象，并发送该句柄。
const server = require('net').createServer();
server.on('connection', (socket) => {
    socket.end('被父进程处理');
});
server.listen(1337, () => {
    child.send('server', server);
});
