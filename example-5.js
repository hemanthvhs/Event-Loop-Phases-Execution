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

setTimeout(() => {
    console.log("Set Timeout - Outside")
}, 0);

setImmediate(() => {
    console.log("In setImmediate - Outside");
});

process.nextTick(() => {
    console.log("In process.nextTick - Outside");
})