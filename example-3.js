// setTimeout(), setImmediate() and process.nextTick() in IO Poll

const fs = require('fs');

fs.readFile(`${__dirname}/file.txt`, (err, data) => {
    console.log(`Inside File With Data`);

    setTimeout(() => {
        console.log("In setTimeout");
    }, 0);

    setImmediate(() => {
        console.log("In setImmediate");
    });

    process.nextTick(() => {
        console.log("In Process.nextTick");
    })
})


/*  Note:
    seImmediate(), setTimeout(), process.nextTick() in the IO poll will
    always make sure that first callback of process.nextTick() is executed.
    Since process.nextTick() gets executed irrespective of current stage.
    So, here once the file reading operation is done & once current callback
    in IO is executed then immediately process.nextTick() is executed.
    Then as per the event loop phase setImmediate() is executed then the
    setTimeout(). HERE THE ORDER IS DETERMINISTIC.
*/