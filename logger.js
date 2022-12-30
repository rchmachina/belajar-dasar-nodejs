const path = require('path');
const os  = require('os');
var url = "localhost";
var totalMemory = os.totalmem();
var freeMemori = os.freemem();
pathObj = path.parse(__filename);

console.log(pathObj);
function message(name){
    console.log("you've got some message : " + name);
}
function all(){
    console.log(`total memory :` + totalMemory);
    console.log(`free memory:`, freeMemori);
    console.log(`used memory:`, totalMemory - freeMemori);

}
module.exports.end_message = message;
module.exports.path = pathObj;
module.exports.all = all;