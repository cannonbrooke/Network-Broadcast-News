var net = require('net');
var PORT = 6969;
var HOST = "0.0.0.0";
process.stdin.setEncoding('utf8');

var client = net.connect({port: PORT, host: HOST }, function() {
   console.log('connected to server!'); //connect to server
process.stdin.pipe(client); //pipes data to server
});
client.on('data', function(data) {
   process.stdout.write(data);

   // console.log(socket.remoteAddress);

});
client.on('end', function() {
  console.log('closed.');
});