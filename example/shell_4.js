/**
 * Created by jinx on 7/4/17.
 */
const {execFile} = require('child_process');
execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
    console.log(stderr);
});
