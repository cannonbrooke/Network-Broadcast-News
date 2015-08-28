var net = require('net');
process.stdin.setEncoding('utf8');

var socketMemory = [];

var server = net.createServer(function(connection) {
   connection.write('connected \r\n');
   socketMemory.push(connection);
   process.stdin.pipe(connection);

  connection.on('data', function(data){
     process.stdout.write(data);

  socketMemory.forEach(function(element){
    if(connection !== element){
      element.write(data);
    }
});

  });

  connection.on('end', function() {
    console.log('disconnected');
  });
});
server.listen(6969, function() {
  console.log('listening');
});