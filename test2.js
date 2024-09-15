const fs = require("fs");
const readline = require("readline");

const serverLogs = [
    "./server_1.log",
    "./server_2.log",
    "./server_3.log",
    "./server_4.log",
];

function readFiles(files) {
    return new Promise(function (resolve, reject) {
        const timestamps = [];
        let count = 0;
        files.forEach((file) => {
            const readStream = fs.createReadStream(file);
            const rl = readline.createInterface({
                input: readStream,
            });

            rl.on("line", (line) => {
                timestamps.push(JSON.parse(line).timestamp);
            });

            rl.on("close", () => {
                ++count;
                if (count == 4) {
                    resolve(timestamps.sort((a, b) => a - b));
                }
            });

            rl.on("error", (err) => {
                reject(err);
            });
        });
    });
}

// function writeIntoFile(data) {
//     fs.appendFile("./output.log", data, (err) => {
//         console.log(err);
//     });
// }

// function readFile(file) {
//     return new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(file);
//         const rl = readline.createInterface({
//             input: readStream,
//         });

//         rl.on("line", (line) => {
//             console.log(line);
//         });

//         rl.on("close", () => {
//             resolve();
//         });

//         rl.on("error", (err) => {
//             console.log(err);
//             reject();
//         });
//     });
// }

function checkFiles(files, timestamp) {
    return new Promise((resolve, reject) => {
        let finded = false;
        files.forEach(async (file) => {
            if (!finded) {
                const readStream = fs.createReadStream(file);
                const rl = readline.createInterface({
                    input: readStream,
                });
                for await (const line of rl) {
                    if (JSON.parse(line).timestamp == timestamp) {
                        finded = true;
                        resolve(line);
                        break;
                    }
                }
            }
        });
    });
}

async function sortLines(timestamps) {
    for (const timestamp of timestamps) {
        const line = await checkFiles(serverLogs, timestamp);
        fs.appendFile("./output.log", `${line}\n`, (err) => {});
    }
}

// function readAllFiles() {
//     readFile(serverLogs[0])
//         .then(readFile(serverLogs[1]))
//         .then(readFile(serverLogs[2]))
//         .then(readFile(serverLogs[3]));
// }

readFiles(serverLogs).then((timestamps) => sortLines(timestamps));
