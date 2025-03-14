const chai = "chai";
const spies = "chai-spies";

function receivesAFunction(callback) {
    callback();
}

receivesAFunction(function () {
    console.log(spies);
});

function returnsANamedFunction() {
    return function namedFunction() {
        return chai;
    };
}

const namedFunction = returnsANamedFunction();
console.log(namedFunction());

function returnsAnAnonymousFunction() {
 return function () {

 };
}