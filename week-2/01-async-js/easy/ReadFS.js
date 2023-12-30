const fs = require('node:fs');

const data = fs.readFileSync('./week-2/01-async-js/easy/myfile.txt', 'utf-8');
console.log(data);