// Execution when setTimeout and setImmediate in main module

console.log('Top Level Code - 1');

setTimeout(() => {
    console.log("Set Timeout - 5seconds");
}, 5000);

setTimeout(() => {
    console.log("Set Timeout - 2seconds");
}, 2000);

console.log("Top Level Code - 2");


/*  Note:
    seImmediate() and setTimeout() in the main module (in top level)
    doesn't gaurantee that setImmediate() callback will always gets
    executed first. This depends on your performance of the process.
*/
