/**
 * Created by jinx on 6/28/17.
 */
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");