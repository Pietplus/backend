const process = require("process");
const fs = require("fs");

console.log(process.pid);
console.log(process.cwd());

process.chdir('/Users/piet/Documents');

console.log(process.cwd);

console.log(process.argv.slice(2));

console.log(process.env);


process.on('exit',() => {
    console.log('Good Bye!')
})
process.exit;