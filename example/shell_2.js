/**
 * Created by jinx on 7/4/17.
 */
const {exec} = require('child_process');
const defaults = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null
};

exec('cat *.js /Users/jinx/Documents/jobs/nodejs/example/shell_1.js | wc -l', defaults, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});
