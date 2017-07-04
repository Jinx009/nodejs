/**
 * Created by jinx on 7/4/17.
 */
const {spawn} = require('child_process');
const child = spawn('bad_command');

child.on('error', (err) => {
    console.log('启动子进程失败。');
});
