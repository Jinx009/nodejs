/**
 * Created by jinx on 6/28/17.
 */
function execute(someFunction, value) {
    someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");