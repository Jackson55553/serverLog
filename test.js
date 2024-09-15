const fs = require("fs");
const readline = require("readline");

const serverLogs = [
    "./server_1.log",
    "./server_2.log",
    "./server_3.log",
    "./server_4.log",
];
// const promisses = [];
// const timestamps = [];
// const readFile = function (file) {
//     return new Promise(function (resolve, reject) {
//         const rl = readline.createInterface({
//             input: fs.createReadStream(file),
//         });

//         rl.on("line", function (line) {
//             timestamps.push(JSON.parse(line).timestamp);
//         });

//         rl.on("close", function () {
//             console.log(`close ${file}`);
//             resolve();
//         });

//         rl.on("error", () => {
//             reject();
//         });
//     });
// };

// const writeFile = function (file, timestamp) {
//     return new Promise(function (resolve, reject) {
//         const rl = readline.createInterface({
//             input: fs.createReadStream(file),
//         });

//         rl.on("line", function (line) {
//             if (JSON.parse(line).timestamp == timestamp) {
//                 fs.appendFile("./output.log", line, (err) => {
//                     console.log(err);
//                 });
//             }
//         });

//         rl.on("close", function () {
//             console.log(`close ${file}`);
//             resolve();
//         });

//         rl.on("error", () => {
//             reject();
//         });
//     });
// };

// serverLogs.forEach((file, i, arr) => {
//     promisses.push(readFile(file));
//     if (i == arr.length - 1) {
//         // promisses.push(sortTimestamps());
//         Promise.all(promisses)
//             .then(() => {
//                 timestamps.sort((a, b) => a - b);
//             })
//             .then(() => console.log(timestamps));
//         // .then(() => timestamps.forEach(

//         // ))
//     }
// });

// const file1 = fs.open("./server_1.log");
const logsTimestamps = [];
async function getLogsArray(file) {
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        console.log(line);
        logsTimestamps.push(JSON.parse(line).timestamp);
    }
    logsTimestamps.sort((a, b) => a - b);
    console.log(logsTimestamps);

    // rl.on("line", (line) => {
    //     // console.log(`Line: ${line}`);
    //     // console.log(JSON.parse(line).timestamp);
    //     logsTimestamps.push(JSON.parse(line).timestamp);
    // });

    // rl.on("close", () => {
    //     ++count;
    //     console.log(`Finished reading the file. ${file}`);
    //     if (count === 4) {
    //         count = 0;
    //         logsTimestamps.sort((a, b) => a - b);
    //         console.log(logsTimestamps);
    //         logsTimestamps.forEach((val) => {
    //             console.log(val);
    //         });
    //     }
    // });
}

async function writeLogs(file, timestamp) {
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    for await (const line of rl) {
        if (JSON.parse(line).timestamp == timestamp) {
            fs.appendFile("./output.log", line, (err) => {
                console.log(err);
            });
        }
    }
}

async function getLogs() {
    for await (const log of serverLogs) {
        getLogsArray(log);
    }
}

// getLogs();

serverLogs.forEach((val) => {
    getLogsArray(val);
});
