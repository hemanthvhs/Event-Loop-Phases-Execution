// MISCONCEPTION THAT setImmediate() puts the callback ahead of job queue

setTimeout(() => {
    console.log("Timeout - 1");
    setImmediate(() => {
        console.log("SetImmediate - 1");
    })
}, 0);

setTimeout(() => {
    console.log("Timeout - 2");
    setImmediate(() => {
        console.log("SetImmediate - 2");
    })
}, 0);

/*  Output
    ----------------------
    Timeout - 1
    Timeout - 2
    SetImmediate - 1
    SetImmediate - 2
*/


