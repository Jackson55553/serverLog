const fs = require("fs/promises");
const readline = require("readline");

const serverLogs = [
    "./server_1.log",
    "./server_2.log",
    "./server_3.log",
    "./server_4.log",
];

// const timestamps

async function myFileReader() {
    const timestamps = [];
    const file1 = await fs.open("./server_1.log");
    for await (const line of file1.readLines()) {
        timestamps.push(JSON.parse(line).timestamp);
    }
    const file2 = await fs.open("./server_1.log");
    for await (const line of file2.readLines()) {
        timestamps.push(JSON.parse(line).timestamp);
    }
    const file3 = await fs.open("./server_1.log");
    for await (const line of file3.readLines()) {
        timestamps.push(JSON.parse(line).timestamp);
    }
    const file4 = await fs.open("./server_1.log");
    for await (const line of file4.readLines()) {
        timestamps.push(JSON.parse(line).timestamp);
    }
    return timestamps;
}
const timestamps = [];
myFileReader().then((data) => data.forEach((e) => timestamps.push(e)));
console.log(timestamps);

// async function read() {
//     const sr1 = fs.readFile(
//         serverLogs[0],
//         { encoding: "utf-8" },
//         (err, data) => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(data);
//             return data;
//         }
//     );
//     console.log(sr1);
// }
// read();
serverLogs.forEach((serverName, i, arr) => {
    // const server = fs.createReadStream(serverName, {
    //     encoding: "utf-8",
    // });
    // const rl = readline.createInterface({
    //     input: server,
    //     crlfDelay: Infinity,
    // });
    // rl.on("line", (line) => {
    //     // console.log(JSON.parse(line).timestamp);
    //     timestamps.push(JSON.parse(line).timestamp);
    // });
    // rl.on("close", () => {
    //     if (i == arr.length - 1) {
    //         timestamps.sort((a, b) => a - b);
    //         console.log(timestamps)
    //     }
    // });
});

// timestamps.forEach((timestamp, i, arr) => {
//     // console.log(timestamp);
//     for (let i = 0; i < serverLogs.length - 1; i++) {
//         const server = fs.createReadStream(serverLogs[i], {
//             encoding: "utf-8",
//         });
//         const rl = readline.createInterface({
//             input: server,
//             crlfDelay: Infinity,
//         });
//         rl.on("line", (line) => {
//             // console.log(JSON.parse(line).timestamp === timestamp);
//             if (JSON.parse(line).timestamp === timestamp) {
//                 fs.appendFile("./output.log", line.toString(), () => {});
//             }
//         });
//         rl.on("close", () => {
//             // console.log("finished");
//         });
//     }
// });

// let ended1 = false;
// let ended2 = false;
// let ended3 = false;
// let ended4 = false;

// let stream = 1;
// let line = 0;

// const lines = [];
// const server = fs.createReadStream(`./server_${stream}.log`, {
//     encoding: "utf-8",
// });
// const server2 = fs.createReadStream(`./server_${stream + 1}.log`, {
//     encoding: "utf-8",
// });
// const server3 = fs.createReadStream(`./server_${stream + 2}.log`, {
//     encoding: "utf-8",
// });
// const server4 = fs.createReadStream(`./server_${stream + 3}.log`, {
//     encoding: "utf-8",
// });

// while (!ended1 &&
// !ended2 &&
// !ended3 &&
// !ended4) {}

// const rl1 = readline.createInterface({
//     input: server,
//     crlfDelay: Infinity,
// });

// const rl2 = readline.createInterface({
//     input: server2,
//     crlfDelay: Infinity,
// });
// const rl3 = readline.createInterface({
//     input: server3,
//     crlfDelay: Infinity,
// });
// const rl4 = readline.createInterface({
//     input: server4,
//     crlfDelay: Infinity,
// });

// rl1.on("line", (line) => {
//     console.log(`line from ${stream}`);
//     // console.log(JSON.parse(line).timestamp);
//     timestamps.push(JSON.parse(line).timestamp);
// });

// rl2.on("line", (line) => {
//     console.log(`line from ${stream + 1}`);
//     // console.log(JSON.parse(line).timestamp);
//     timestamps.push(JSON.parse(line).timestamp);
// });
// rl3.on("line", (line) => {
//     console.log(`line from ${stream + 2}`);
//     // console.log(JSON.parse(line).timestamp);
//     timestamps.push(JSON.parse(line).timestamp);
// });
// rl4.on("line", (line) => {
//     console.log(`line from ${stream + 3}`);
//     // console.log(JSON.parse(line).timestamp);
//     timestamps.push(JSON.parse(line).timestamp);
// });

// rl1.on("close", () => {
//     timestamps.sort(
//         (a, b) => JSON.parse(a).timestamp - JSON.parse(b).timestamp
//     );
//     console.log(timestamps);

//     console.log("Finished");
// });
// rl2.on("close", () => {
//     timestamps.sort(
//         (a, b) => JSON.parse(a).timestamp - JSON.parse(b).timestamp
//     );
//     console.log(timestamps);

//     console.log("Finished");
// });
// rl3.on("close", () => {
//     timestamps.sort(
//         (a, b) => JSON.parse(a).timestamp - JSON.parse(b).timestamp
//     );
//     console.log(timestamps);

//     console.log("Finished");
// });
// rl4.on("close", () => {
//     timestamps.sort(
//         (a, b) => JSON.parse(a).timestamp - JSON.parse(b).timestamp
//     );
//     console.log(timestamps);

//     console.log("Finished");
// });

const comleted = [
    {
        timestamp: 170005,
        message: "Index page request",
        method: "GET",
        type: "request",
        url: "/",
    },
    {
        timestamp: 170010,
        message: "Users list request",
        method: "GET",
        type: "request",
        url: "/api/users",
    },
    {
        timestamp: 170012,
        message: "Create user request",
        method: "POST",
        type: "request",
        url: "/api/users",
    },
    {
        timestamp: 170015,
        message: "Users list response",
        method: "GET",
        type: "response",
        url: "/api/users",
    },
    {
        timestamp: 170018,
        message: "User created",
        method: "POST",
        type: "response",
        url: "/api/users",
    },
    {
        timestamp: 170022,
        message: "Index page response",
        method: "GET",
        type: "response",
        url: "/",
    },
    {
        timestamp: 170027,
        message: "Update user with id 2 request",
        method: "PUT",
        type: "request",
        url: "/api/users/2",
    },
    {
        timestamp: 170036,
        message: "Update user with id 3 request",
        method: "PUT",
        type: "request",
        url: "/api/users/3",
    },
    {
        timestamp: 170038,
        message: "User with id 3 updated",
        method: "PUT",
        type: "response",
        url: "/api/users/3",
    },
    {
        timestamp: 170042,
        message: "User with id 2 updated",
        method: "PUT",
        type: "response",
        url: "/api/users/2",
    },
    {
        timestamp: 170046,
        message: "Users list request",
        method: "GET",
        type: "request",
        url: "/api/users",
    },
    {
        timestamp: 170047,
        message: "Delete user with id 2 request",
        method: "DELETE",
        type: "request",
        url: "/api/users/2",
    },
    {
        timestamp: 170051,
        message: "Users list response",
        method: "GET",
        type: "response",
        url: "/api/users",
    },
    {
        timestamp: 170053,
        message: "User with id 2 deleted",
        method: "DELETE",
        type: "response",
        url: "/api/users/2",
    },
    {
        timestamp: 170054,
        message: "Users list request",
        method: "GET",
        type: "request",
        url: "/api/users",
    },
    {
        timestamp: 170060,
        message: "Users list response",
        method: "GET",
        type: "response",
        url: "/api/users",
    },
];
