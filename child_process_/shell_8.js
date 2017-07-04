/**
 * Created by jinx on 7/4/17.
 */
const fs = require('fs');
const {spawn} = require('child_process');
const out = fs.openSync('./out.log', 'a');
const err = fs.openSync('./out.log', 'a');

const child = spawn('ls', [], {
    detached: true,
    stdio: ['ignore', out, err]
});
child.on('error', (err) => {
    console.log(`${err}`);
});
