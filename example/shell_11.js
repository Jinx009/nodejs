/**
 * Created by jinx on 7/4/17.
 */
const {spawn} = require('child_process');
const grep = spawn('grep', ['ssh']);

console.log(`衍生的子进程的 pid：${grep.pid}`);
grep.stdin.end();
