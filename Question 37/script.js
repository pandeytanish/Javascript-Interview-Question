function callbackFunction() {
    console.log('I am  a callback function');
}

function higherOrderFunction() {
    console.log('I am higher order function')

}

higherOrderFunction(callbackFunction());