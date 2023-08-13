// repl = Read Evaluate Print Loop

const repl = require("repl");

//const local = repl.start(); // it can be default or be specific like below
const local = repl.start("$ ");

local.on("exit", () => {
  console.log("exiting REPL");
  process.exit();
});