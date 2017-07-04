/**
 * Created by jinx on 7/4/17.
 */
const {spawn} = require('child_process');
const grep = spawn('grep', ['ssh']);

grep.on('stdout',(data) => {
    console.log(`${data}`);
});

grep.on('close', (code, signal) => {
    console.log(`子进程收到信号 ${signal} 而终止`);
});

grep.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});


// 发送 SIGHUP 到进程
grep.kill('SIGHUP');
