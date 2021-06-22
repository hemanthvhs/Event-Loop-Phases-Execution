// Execution when setTimeout, setImmediate, process.nextTick() in main module 

console.log('Top Level Code - 1');

setTimeout(() => {
    console.log("Set Timeout - 1")
}, 0);

process.nextTick(() => {
    console.log("In process.nextTick - 1");
})

setTimeout(() => {
    console.log("Set Timeout - 2")
}, 0);

process.nextTick(() => {
    console.log("In process.nextTick - 2");
})

setImmediate(() => {
    console.log("Set Immediate - 1")
})

console.log("Top Level Code - 2");

/*  Note:
    seImmediate(), setTimeout(), process.nextTick() in the main module (in top level)
    behaves in such way that callback of process.nextTick() is executed
    first then the order of setTimeout() and setImmediate() is again
    non-deterministic. The order depends on the performance of the process.
*/