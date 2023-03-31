let num = 12;
let str = 'john';
let isRunning = false;
let nothing = null;
let undef;

function displayVar() {
    console.log(`values: ${num},${str},${isRunning},${nothing},${undef}`);
    console.log(`types: ${typeof num},${typeof str},${typeof isRunning},${typeof nothing},${typeof undef}`)
}

export {
    displayVar,
}