/**
 * Created by jinx on 7/4/17.
 */
const cp = require('child_process');
const n = cp.fork(`${__dirname}/shell_12_sub.js`);

n.on('message', (m) => {
    console.log('父进程收到消息：', m);
});

n.send({hello: 'world'});
