const EventEmitter = require('events');
const emitter = new EventEmitter();



// var send = emitter.on('testt',function (arg){
 
//     console.log("signal sended: " , arg)    
//     }
// )

var send = emitter.on('testt',(arg)=>{
 
    console.log("signal sended: " , arg)    
    }
)



var receive = emitter.emit('testt', {name:"heissenber"})

module.exports.send = send
//module.exports.receive = receive