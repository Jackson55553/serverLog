const fs = require("fs");
const readline = require("readline");

function readfiles(params) {
    const rs = fs.createReadStream("./server_1.log");
    const rl = readline.createInterface({
        input: rs,
    });

    const rs2 = fs.createReadStream("./server_2.log");

    const rs3 = fs.createReadStream("./server_3.log");

    const rs4 = fs.createReadStream("./server_4.log");

    rl.on("line", (line) => {
        console.log(line);
    });
    rl.on("close", () => {
        console.log("event close");
        const rl2 = readline.createInterface({
            input: rs2,
        });
        rl2.on("line", (line) => {
            console.log("rl2");
            console.log(line);
        });
        rl2.on("close", () => {
            console.log("rl2 close");
            const rl3 = readline.createInterface({
                input: rs3,
            });
            rl3.on("line", (line) => {
                console.log("rl3");
                console.log(line);
            });
            rl3.on("close", () => {
                console.log("rl3 close");
                const rl4 = readline.createInterface({
                    input: rs4,
                });
                rl4.on("line", (line) => {
                    console.log("rl4");
                    console.log(line);
                });
            });
        });
    });
}
// const rs = fs.createReadStream("./server_1.log");
// const rl = readline.createInterface({
//     input: rs,
// });

// const rs2 = fs.createReadStream("./server_2.log");

// const rs3 = fs.createReadStream("./server_3.log");

// const rs4 = fs.createReadStream("./server_4.log");

// rl.on("line", (line) => {
//     console.log(line);
// });
// rl.on("close", () => {
//     console.log("event close");
//     const rl2 = readline.createInterface({
//         input: rs2,
//     });
//     rl2.on("line", (line) => {
//         console.log("rl2");
//         console.log(line);
//     });
//     rl2.on("close", () => {
//         console.log("rl2 close");
//         const rl3 = readline.createInterface({
//             input: rs3,
//         });
//         rl3.on("line", (line) => {
//             console.log("rl3");
//             console.log(line);
//         });
//         rl3.on("close", () => {
//             console.log("rl3 close");
//             const rl4 = readline.createInterface({
//                 input: rs4,
//             });
//             rl4.on("line", (line) => {
//                 console.log("rl4");
//                 console.log(line);
//             });
//         });
//     });
// });
readfiles();
