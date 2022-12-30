const path = require('path');
const os  = require('os');
var totalMemory = os.totalmem();
var freeMemori = os.freemem();
function all(){
    console.log(`total memory :` + totalMemory);
    console.log(`free memory:`, freeMemori);
    console.log(`used memory:`, totalMemory - freeMemori);

}

module.exports.memori = all;