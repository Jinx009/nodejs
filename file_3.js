/**
 * Created by jinx on 6/28/17.
 */
var fs = require('fs');

fs.stat('input.txt', function (err, stats) {
    console.log(stats.isFile()); 		//true
})