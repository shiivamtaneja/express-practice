// console.log(process.argv);
// Prints the following - 
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Renuka\\Documents\\Shivam\\Express js\\Express Practice\\Tutorial\\arguments.js',
//   'name=Shivam'
// ]

// console.log(process.argv.slice(2)[0]);

// process.argv.forEach((val, index) => {
//   console.log(`${index}:${val}`);
// });

// Using Minimilist - in cli `node arguments.js name=Shivam` but with minimlist we pass args as `node arguments.js --name=Shivam`

const minimist = require("minimist");

const argvNew = minimist(process.argv.slice(2));
console.log(argvNew.name);