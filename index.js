// var http = require('http');

// var server = http.createServer(function (req, res) {
//     res.end("Hi, selamat datang di nodejs");
// });
// console.log("hello word")
// server.listen(8000);

// console.log("server running on http://localhost:8000");

// function SayMyname(name){
//     return name
// } 
// var logger = require('./logger')
// var memory = require('./memori')
// var emit = require('./emmiter')
// logger.end_message("heisenberg")
// logger.path

// emit.send
// memory.memori()
// //emit.receive



var http = require('http');
const server =  http.createServer(function(request, response){
  if (request.url === '/test'){
   

    response.write("Hi, selamat datang di nodejs");
    response.end()
  };

  if (request.url === '/api'){
   
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello <b>World</b>!');
    response.end();
  };

});

server.listen(8000)

console.log("server running on http://localhost:8000");