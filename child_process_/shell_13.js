/**
 * Created by jinx on 7/4/17.
 */
const assert = require('assert');
const fs = require('fs');
const child_process = require('child_process');

const child = child_process.spawn('ls', {
    stdio: [
        0, // 使用父进程的 stdin 用于子进程
        'pipe', // 把子进程的 stdout 通过管道传到父进程
        fs.openSync('err.log', 'w') // 把子进程的 stderr 指向一个文件
    ]
});

assert.strictEqual(child.stdio[0], null);
assert.strictEqual(child.stdio[0], child.stdin);

assert(child.stdout);
assert.strictEqual(child.stdio[1], child.stdout);

assert.strictEqual(child.stdio[2], null);
assert.strictEqual(child.stdio[2], child.stderr);
