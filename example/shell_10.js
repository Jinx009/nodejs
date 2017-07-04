/**
 * Created by jinx on 7/4/17.
 */
'use strict';
const {spawn} = require('child_process');

const child = spawn(
    'sh',
    [
        '-c',
        `node -e "setInterval(() => {
      console.log(process.pid, 'is alive')
    }, 500);"`
    ], {
        stdio: ['inherit', 'inherit', 'inherit']
    }
);

setTimeout(() => {
    child.kill(); // 不会终止 shell 中的 node 进程
}, 2000);
