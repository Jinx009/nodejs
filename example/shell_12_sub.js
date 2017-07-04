/**
 * Created by jinx on 7/4/17.
 */
process.on('message', (m) => {
    console.log('子进程收到消息：', m);
});

process.send({foo: 'bar'});