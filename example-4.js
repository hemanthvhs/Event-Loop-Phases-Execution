// setTimeout(), setImmediate() and process.nextTick() in IO Poll with multiple IO Calls

const fs = require('fs');

fs.readFile(`${__dirname}/file.txt`, (err, data) => {
    console.log(`Inside File With Data - 1`);

    setTimeout(() => {
        console.log("In setTimeout - 1");
    }, 0);

    setImmediate(() => {
        console.log("In setImmediate - 1");
    });

    process.nextTick(() => {
        console.log("In Process.nextTick - 1");
    })
})

fs.readFile(`${__dirname}/file.txt`, (err, data) => {
    console.log(`Inside File With Data - 2`);

    setTimeout(() => {
        console.log("In setTimeout - 2");
    }, 0);

    setImmediate(() => {
        console.log("In setImmediate - 2");
    });

    process.nextTick(() => {
        console.log("In Process.nextTick - 2");
    })
})

/*  Note:
    -----------------------
    Here we have two callbacks in IO Poll Callback queue. The order
    of execution will be in FIFO. So for the first callback process.nextTick
    callback is executed and again for the second callback procerss.nextTick
    is executed. Once done then in the event loop setImmediate callbacks
    are executed this will be IO firstcallback setImmediate and second
    callback setImmediate then the timer.
*/

/*  Output
    --------------------------
    Inside File With Data - 1
    In Process.nextTick - 1
    Inside File With Data - 2
    In Process.nextTick - 2
    In setImmediate - 1
    In setImmediate - 2
    In setTimeout - 1
    In setTimeout - 2
*/