const Person = require('./logger')
const Person2 = new  Person ('jinay',22);

Person2.greeting();

//  console.log(module);
// const logger = require("./logger");
// logger.log("message");

// const path = require("path");
// let pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require("os");
// let freeMemory = os.freemem();
// let totalMemory = os.totalmem();

// console.log(`free memory: ${freeMemory}`)
// console.log(`total memory: ${totalMemory}`)

// const fs = require("fs");
// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('./', function(err , files) {
//     if (err) console.log('error',err);
//     else console.log(`result`,files);
// });

// const http = require('http');
// console.log(http)