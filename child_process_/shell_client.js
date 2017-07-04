process.on('message', (m, server) => {
    if (m === 'server') {
        server.on('connection', (socket) => {
            socket.end('被子进程处理');
        });
    }
});
/**
 * Created by jinx on 7/4/17.
 */
