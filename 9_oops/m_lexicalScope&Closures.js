//closures:
//  where an inner function "remembers" variables from 
// its outer function's scope even after the outer function has finished executing.

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();
